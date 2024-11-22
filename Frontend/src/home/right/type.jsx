import React from 'react'
import { IoSend } from "react-icons/io5";
export default function type() {
  return (
    <>
      <div className="flex space-x-3 h-[8vh] text-center bg-slate-600">
        <div className="w-[70%] mx-3 ">
          <input
            type="text"
            placeholder="Type here"
            className="border-[px] border-gray-700 bg-slate-900  flex items-center w-full py-3 px-3 rounded-xl grow outline-none mt-1"
          />
        </div>
        <button className="button button-primary">
          <IoSend className="text-3xl" />
        </button>
      </div>
    </>
  );
}
