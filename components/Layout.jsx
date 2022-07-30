import React from "react";
import { Navbar } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <div className="px-4 lg:px-12 main-container">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
