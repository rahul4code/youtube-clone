import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";

const Body = () => {

  const isToggle=useSelector(state=> state.isToggle)

  return (
    <>
      <Header />
      <div className="flex">
        {isToggle &&  <Sidebar />}
        <CardContainer />
      </div>
      <Footer />
    </>
  );
};

export default Body;
