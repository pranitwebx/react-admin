import React, { useState } from "react";

import { User, ChartPieSlice, ShoppingCartSimple, CurrencyDollar } from "phosphor-react";

const Dashboard = () => {

  const [sidebar, setSidebar] = useState(false);



  return (
    <>

      <p className="absolute p-2 text-xl md:hidden" onClick={() => setSidebar(!sidebar)}>=</p>


      <div className="flex md:flex-row flex-col">

        {/* PC Nav  */}
      <div className="sidebar md:block hidden bg-primary-100 w-100 md:w-2/12 h-[100vh] p-3">
          <div className="logo w-2/4 m-auto">
            <img src="/lucky-numbers.png" className="w-full" alt="" />
          </div>

          <div className="tab text-white w-11/12 my-2 bg-primary-500 rounded-lg flex p-2 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">Dashboard</span>
          </div>

          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
          <User size={32} />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
          <ChartPieSlice size={32} />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
        </div>

        {/* Mobile Nav  */}
        {sidebar && <div className="sidebar bg-primary-100 w-100 md:w-2/12 h-[100vh] p-3">
          <div className="logo w-2/4 m-auto">
          <img src="/lucky-numbers.png" className="w-full" alt="" />
          </div>

          <div className="tab text-white w-11/12 my-2 bg-primary-500 rounded-lg flex p-2 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">Dashboard</span>
          </div>

          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
          <div className="tab w-11/12 my-2 rounded-lg flex p-2 text-gray-400 m-auto">
            <img src="/favicon.ico" width={20} alt="" />
            <span className="font-semibold pl-4">User Info</span>
          </div>
        </div>}

        <div className="maincomponent md:w-10/12 w-full  md:p-6 p-2">
          <div className="top flex justify-between items-center pb-6 px-6">
            <h1 className="text-3xl font-extralight ">Dashboard</h1>

            <img
              src="/favicon.ico"
              className="rounded-full  w-10 h-10"
              alt=""
            />
          </div>

          <div className="stats flex md:flex-row flex-col">
            {/* Graph  */}
            <div className="app-stats  border-gray-200 md:w-3/4 border rounded-xl"></div>

            <div className="cards md:w-1/4 md:mt-0 mt-4" >
              <div className="stat-card mb-6 p-4 w-10/12 m-auto bg-secondary-100 rounded-xl">
                <div className="flex justify-between">
                  <p className="text-secondary-500 font-semibold">
                    Card downloads - Total
                  </p>
                  <ShoppingCartSimple size={30} className='text-white bg-secondary-500 p-[6px] rounded-full'/>
                </div>

                <p className="text-3xl font-semibold text-left ">6,452</p>
                <div className="flex items-center">
                  <img
                    src="/red-down-arrow.png"
                    className="w-3 h-3 mr-1"
                    alt=""
                  />
                  <p className="text-danger-500 font-semibold"> 0.15%</p>
                </div>
              </div>

              <div className="stat-card mb-6 p-4 w-10/12 m-auto bg-primary-100 rounded-xl">
                <div className="flex justify-between">
                  <p className="text-primary-500 font-semibold">
                    App downloads - Total
                  </p>
                  
                  <CurrencyDollar size={30} className='text-white bg-primary-500 p-[6px] rounded-full'/>
                </div>

                <p className="text-3xl font-semibold text-left">46,452</p>
                <div className="flex items-center">
                  <img
                    src="/red-down-arrow.png"
                    className="w-3 h-3 mr-1"
                    alt=""
                  />
                  <p className="text-danger-500 font-semibold"> 0.15%</p>
                </div>
              </div>

              <div className="stat-card mb-6 p-4 w-10/12 m-auto bg-secondary-100 rounded-xl">
                <div className="flex justify-between">
                  <p className="text-secondary-500 font-semibold">
                    No of Winners - Total
                  </p>
                  <User size={30} className='text-white bg-secondary-500 p-[6px] rounded-full'/>
                </div>

                <p className="text-3xl font-semibold text-left ">6,452</p>
                <div className="flex items-center">
                  <img
                    src="/red-down-arrow.png"
                    className="w-3 h-3 mr-1"
                    alt=""
                  />
                  <p className="text-danger-500 font-semibold"> 0.15%</p>
                </div>
              </div>
            </div>

            
          </div>

          <div className="stats2 mt-5 flex md:flex-row flex-col">
            <div className="md:w-1/2 mr-3">
              <h2 className="bg-primary-150 text-2xl p-5 text-left rounded-xl mb-2">
                Show Current Stat
              </h2>

              <div className="flex md:flex-row flex-col">
                <div className="stat-card p-3 md:w-1/3 my-1 bg-red-100 rounded-xl">
                  <p className="text-left">Card Download</p>
                  <p className="text-2xl font-semibold text-left">46,452</p>
                  <div className="flex items-center">
                    <img
                      src="/red-down-arrow.png"
                      className="w-3 h-3 mr-1"
                      alt=""
                    />
                    <p className="text-danger-500 font-semibold"> 0.15%</p>
                  </div>
                  <p className="text-left">From Previous Show</p>
                </div>

                <div className="stat-card p-3 md:w-1/3 my-1 md:mx-6 bg-warning-150 rounded-xl">
                  <p className="text-left">Uses By Gender</p>
                </div>

                <div className="stat-card p-3 md:w-1/3 my-1 bg-blue-100 rounded-xl">
                  <p className="text-left">No of Winners</p>
                  <p className="text-5xl font-semibold mt-3">5</p>
                </div>
              </div>

              <div className="sponsors border rounded-xl p-5 mt-3">sponsors-TBD</div>
            </div>

            <div className="md:w-1/2 w-full mt-2 md:pl-3">


              <div className="w-full h-72 bg-purple-100" >

              </div>

              <h2 className="font-bold text-lg text-left">App Users by City</h2>

              <div className="flex flex-wrap">



              <div className="city  flex justify-between p-2">
                <p className="text-left">Manila</p> 
                <div className="flex pr-5">
                  <p className="font-semibold px-2">400</p>

                  <p className="bg-purple-100 px-1 rounded-xl text-purple-500">20%</p>

                </div>
              </div>


              <div className="city w-1/2 flex justify-between p-2">
                <p className="text-left">Manila</p> 
                <div className="flex pr-5">
                  <p className="font-semibold px-2">400</p>

                  <p className="bg-purple-100 px-1 rounded-xl text-purple-500">20%</p>

                </div>
              </div>


              <div className="city w-1/2 flex justify-between p-2">
                <p className="text-left">Manila</p> 
                <div className="flex pr-5">
                  <p className="font-semibold px-2">400</p>

                  <p className="bg-purple-100 px-1 rounded-xl text-purple-500">20%</p>

                </div>
              </div>


              <div className="city w-1/2 flex justify-between p-2">
                <p className="text-left">Manila</p> 
                <div className="flex pr-5">
                  <p className="font-semibold px-2">400</p>

                  <p className="bg-purple-100 px-1 rounded-xl text-purple-500">20%</p>

                </div>
              </div>



              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;