import React from "react";
import { Footerbar } from "./components/Footerbar";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
  return (
    <div className="container m-auto bg-gray-700 min-h-screen overflow-x-hidden flex flex-col relative">
      <Navbar />
      <div className="flex-grow">
        <MainRoutes />
      </div>
      <div className="">
        <Footerbar />
      </div>
    </div>
  );
}
