import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";
import CustomHead from "@/components/common/head";

const Layout = ({ children, headTitle, headContent, isFooter=true }) => {
  return (
    <>
      <CustomHead title={headTitle} content={headContent} />
      <main className="mx-auto max-w-full min-h-[calc(100vh-56px)]">
        <Sidebar />
        <div className="w-full min-h-[calc(100vh-56px)] lg:pl-[120px] lg:pr-[60px]">
          <Navbar />
          <div className="pt-[20px]">{children}</div>
        </div>
      </main>
      {
        isFooter && <Footer />
      }
    </>
  );
};

export default Layout;
