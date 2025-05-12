import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-389px)] bg-slate-900">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
