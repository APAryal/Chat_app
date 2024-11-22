import React from "react";
import Chatuser from "./chatuser";
import Messages from "./messages";
import Type from "./type";
export default function right() {
  return (
    <>
      <div className=" w-[70%]  bg-stone-800 text-white">
        <Chatuser></Chatuser>
        <div
          className="py-2 flex-apsara overflow-y-auto"
          style={{ maxHeight: "calc( 74vh)" }}
        >
          <Messages></Messages>
        </div>
        <Type></Type>
      </div>
    </>
  );
}
