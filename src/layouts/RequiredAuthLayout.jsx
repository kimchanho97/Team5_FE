import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import GNB from "../components/common/GNB";

export default function RequiredAuthLayout() {
  const { isLogged } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isLogged) {
      // 뒤로가기 허용을 위해 replace 사용
      window.location.replace("/login");
    }
  }, []);

  return (
    <div>
      {isLogged && (
        <>
          <Outlet />
          <GNB />
        </>
      )}
    </div>
  );
}