// import AuthBgSvg from "@/components/auth-bg-svg";

import React from "react";

import Image from "next/image";
import CustomForm from '../components/forms/validation'
import AuthBgSvg from '../components/ui/auth-bg-svg'

export default function StepThreePage() {
  return (
    <div className="grid grid-cols-10">
      <div className="relative z-10  col-span-5 h-screen bg-[linear-gradient(#A8D3722E,#102A5B7A),url(/images/fond.svg)] bg-cover bg-no-repeat"></div>
      <div className="relative col-span-5 bg-white  flex h-screen items-center">
        <div className="mx-auto mb-5 space-y-4">
          <div className="bg-white ">
            <AuthBgSvg/>
            <CustomForm />
          </div>
        </div>
      </div>
    </div>
  );
}
