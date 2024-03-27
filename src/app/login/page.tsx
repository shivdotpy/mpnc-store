"use client";

import React from "react";
import { LoginForm } from "./containers";
import { CompanyLogo } from "./components";

const page = () => {
  return (
    <div className="h-screen text-xs bg-slate-300">
      <div className="flex items-center justify-center flex-col gap-10 pt-32">
        <CompanyLogo />
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
