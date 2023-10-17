import React from "react";
import { Outlet } from "react-router-dom";

export default function OnlyOutletLayout() {
  return (
    <div className="overflow-x-hidden">
      <div className=" w-screen flex justify-center h-screen bg-blue-50">
        <div className=" max-w-[576px] w-full h-full bg-white relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
