import React from "react";

import Dashboard from "./Dashboard";
import UserInfo from "./UserInfo";
import Analytics from "./Analytics";
import Sponsors from "./Sponsors";
import LuckyNumbers from "./LuckyNumbers";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Marketing from "./Marketing";

const Layout = () => {



  return (
    <>
      <div className="flex md:flex-row flex-col">
          
          <Navbar/>
        
        <div className="maincomponent md:w-10/12 w-full ">

          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/userinfo" element={<UserInfo/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/luckynumbers" element={<LuckyNumbers/>}/>
            <Route path="/sponsors" element={<Sponsors/>}/>
            <Route path="/marketing" element={<Marketing/>}/>


          </Routes>
  
        
        </div>
      </div>
    </>
  );
};

export default Layout;
