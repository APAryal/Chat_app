import React from "react";
import Search from "./search";
import Users from "./users";
export default function left() {
  return (
    <>
      <div className="w-[30%]  bg-stone-900 text-white">
  <h1 className="font-bold text-3xl p-2 px-11 ">Chat</h1>
        <Search></Search>
        <hr />
        <Users></Users>
      </div>
      
    </>
  );
}
