import React from "react";

export default function Prices() {
  return (
    <section className="w-full mb-10 rounded bg-[#F6F7F8]">
      <div className="text-xl mb-4 mt-2 font-semibold pl-4">Prices</div>
      <div className="flex p-4  justify-between">
        <div className="">Ranger:</div>
        <div className=" flex gap-2">
          <div className="">$13.99 -</div>
          <div className="">$25.99</div>
        </div>
      </div>
      <div className="w-full pl-4 pr-4 "> 
        <input type="range" className="w-full" />
      </div>
    </section>
  );
}
