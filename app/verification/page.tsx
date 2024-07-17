// import AuthBgSvg from "@/components/auth-bg-svg";

import React from "react";

import Image from "next/image";

export default function StepThreePage() {
  return (
    <div className="   mt-24 ">
      <div className="items-center justify-center flex">
        <div className="bg-white border-t shadow-md flex justify-center items-center rounded-lg  p-4 ">
          <div className="py-7 px-28">
            <div className="h-12 w-12 mx-auto flex justify-center items-center rounded-full bg-green-600">
              <Image
                src="/images/check.svg"
                alt=""
                height={50}
                width={50}
                className={`  w-7  `}
              />
            </div>
            <div className="mx-auto ">
              {" "}
              <p className="text-center mt-7 text-lg text-[#4472CA] font-bold">
                Thank You
              </p>
              <p className="text-gray-400 text-center mt-3">
                You will receive a message confirming <br /> your case has been
                referred
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
