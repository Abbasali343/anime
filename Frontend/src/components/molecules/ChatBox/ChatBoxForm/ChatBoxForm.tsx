import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { v4 as uuid } from 'uuid';

function ChatBoxForm({ handleSubmit }: any) {

  const unique_id = uuid();
  
  const[name,setName] = useState('');

  const navigate = useNavigate();

  function gotoChat(){
    if(name===''){
      alert('Please Enter yoruname')
    }else{
      navigate('/chat',{state:{name:name,id:unique_id}});
    }
    
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      style={{ alignItems: "stretch" }}
    >
      <Field
        type="text"
        name="message"
        placeholder="Enter Your Name"
        component="textarea"
        onChange={(e:any)=>setName(e.target.value)}
        rows={6}
        style={{
          width: "100%",
          margin: "0",
          background: "none",
          border: "2px solid #ffffff",
        }}
        onKeyDown={(e: any) => {
          if (e.keyCode === 13 && !e.shiftKey) {
            handleSubmit();
          }
        }}
      />
      <br />
      <button
        type="submit"
        style={{
          color: "white",
          padding: "18px 24px",
          background: "none",
          border: "2px solid #ffffff",
        }}
        onClick={gotoChat}
      >
        Join
      </button>
    </form>
  );
}

export default reduxForm({ form: "ChatBoxForm" })(ChatBoxForm);
