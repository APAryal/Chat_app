import React from 'react'

export default function user() {
  return (
    <div>
      <div className=" flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>Apsara Aryal</h1>
          <span>Apsara@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
