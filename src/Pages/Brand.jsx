import React from "react";

export default function Brand() {
  return (
    <section className=" mb-10">
      <div className=" bg-[#F6F7F8] rounded">
        <div className="pl-4 text-xl font-semibold mb-4">Brand</div>
        <div className="flex justify-between p-4">
          <div className="">Nike</div>
          <div className="text-gray-300">99</div>
        </div>
        <div className="flex justify-between p-4 text-[#33A0FF]">
          <div className="">Nike</div>
          <div className="">99</div>
        </div>

        <div className="flex justify-between p-4">
          <div className="">Adidas</div>
          <div className="text-gray-300">99</div>
        </div>
        <div className="flex justify-between p-4">
          <div className="">Siemens</div>
          <div className="text-gray-300">99</div>
        </div>
      </div>
    </section>
  );
}
