import React from "react";
import Left from "./home/left/left";
import Right from "./home/right/right";
import Logout from "./home/left1/logout";

export default function App() {
  return (
    <>
      <div className="flex h-screen">
      <Logout></Logout>
        <Left />
        <Right />
        
      </div>
    </>
  );
}
