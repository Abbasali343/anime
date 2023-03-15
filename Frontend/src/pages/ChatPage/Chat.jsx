import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import reactscrolltobottom from "react-scroll-to-bottom";
import {
  Container,
  ChatContainer,
  StyledBox,
  StyledButton,
  Title,
  Title2,
} from "components.style";

const socket = io("localhost:3001");
// const socket = io("https://api.animedisney.com");

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [items, setItems] = useState([]);
  //   var items = [];
  // var messages = document.getElementById('messages');

  const location = useLocation();

  const data = location.state;

  // useEffect(() => {
  //   socket.on("connection", () => {});

  // }, []);

  socket.on("received", ({ message, name }) => {
    // const receivedValues = {
    //   message,
    //   name,
    // };

    setItems([
      ...items,
      {
        message,
        name,
      },
    ]);
  });

  //   console.log(items[0]);

  function sendMessage() {
    if (msg === "") {
      alert("Please type a msg");
    } else {
      socket.emit("sendMessage", {
        sender: data.id,
        name: data.name,
        message: msg,
      });
      document.getElementById("msg").value = "";
    }
  }

  //   function setValues(data){
  //     item=data;
  //   }

  console.log(items);

  return (
    <>
      <Container
        
        width={"400px"}
        height={"500px"}
        border={"1px solid black"}
        left={"370px"}
      >
        
        <Container overflow={'auto'}  height={'460px'}>
        {items.map((x, i) => (
          
            <>
              <Container top={"10px"} bgclr={"black"} display={"flex"}>
                <Title2>{x.name}: </Title2>
                <Title2>{x.message}</Title2>
              </Container>
            </>
          
        ))}
        </Container>
       

        
        <ChatContainer display={"flex"} >
          <StyledBox
            id="msg"
            width={"249px"}
            height={"38px"}
            onChange={(e) => setMsg(e.target.value)}
          />
          <StyledButton onClick={sendMessage}>Send</StyledButton>
        </ChatContainer>
      </Container>
    </>
  );
}
