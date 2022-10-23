import React from "react";
import { Menu } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Menu />
      </div>
      <main style={{ marginTop: "70px" }}>{children}</main>
    </>
  );
};

export default Layout;
