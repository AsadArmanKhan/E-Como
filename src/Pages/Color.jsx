import React from "react";

export default function Color() {
  return (
    <section className="w-full mb-10 rounded bg-[#F6F7F8]">
      <div className=" pl-4">
        <h2 className="text-xl mb-4 font-semibold">Color</h2>

        <div className="flex justify-between items-center pt-5 pl-1 pr-3 pb-5">
          <div className="border-2 w-8 h-8 flex justify-center items-center rounded-2xl  border-[#006CFF] ">
            <div className="bg-[#006CFF] w-5 h-5 rounded-full"></div>
          </div>
          <div className="bg-[#FC3E39] w-5 h-5 rounded-full"></div>
          <div className="bg-[#171717] w-5 h-5 rounded-full"></div>
          <div className="bg-[#FFF600] w-5 h-5 rounded-full"></div>
          <div className="bg-[#FF00B4] w-5 h-5 rounded-full"></div>
          <div className="bg-[#EFDFDF] w-5 h-5 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
