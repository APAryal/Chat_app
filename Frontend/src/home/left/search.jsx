import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function search() {
  return (
    <div className="h-[10vh]">
      <div classNme="px-6 py-4">
        <form action="">
          <div className="flex space-x-3">
            <label className="border-[px] border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2 w-[80%] p-3">
              <input
                type="text"
                className="grow  outline-none  bg-slate-900 w-[80%] "
                placeholder="Search"
              />
            </label>

            <button>
              <IoIosSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
