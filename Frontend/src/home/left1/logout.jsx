import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
export default function logout() {
  return (
    <>
      <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end ">
        <div className="p-3 align-bottom">
          <button>
            <BiLogOutCircle className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
          </button>
        </div>
      </div>
    </>
  );
}
