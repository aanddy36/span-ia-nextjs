"use client";

import Topbar from "@/app/_components/topbar";
import { Sidebar } from "@/app/_components/sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <Topbar setIsSidebarOpen={setIsSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    </>
  );
};

export default Navbar;
