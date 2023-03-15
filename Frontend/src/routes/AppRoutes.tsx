import { Suspense } from "react";
import CircleLoader from "components/atoms/CircleLoader";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";
import Chat from "pages/ChatPage/Chat";

export default function AppRoutes() {
  return (
    <div style={{ position: "relative" }}>
      <Suspense fallback={<CircleLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile/:id" element={<Profile />} />

          {/* Redirect to root or Not Found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
