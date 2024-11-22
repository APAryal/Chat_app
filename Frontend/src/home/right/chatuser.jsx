import React from "react";

export default function chatuser() {
  return (
    <>
      <div className=" flex gap-2 pl-5 pt-5 m-5 h-[12vh] flex-space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold ">Apsara Aryal</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
}
