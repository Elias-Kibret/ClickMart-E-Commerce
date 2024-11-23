import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { Footer } from "../home/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
