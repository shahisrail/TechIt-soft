"use client";
import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import project from "@/public/project.jpg"
import "react-tabs/style/react-tabs.css";

const OurWorked = () => {
  return (
  <div className="bg-[#FBF1EF] ">
      <div className="mx-auto lg:max-w-[1440px] pt-[120px] pb-[120px]">
      <p className="text-[#ff5b2e] text-[16px] text-center font-bold tracking-[0.5px] uppercase mb-[5px]">
        Recent Works
      </p>
      <h2 className="text-[40px] leading-[52px] font-bold mb-[15px] text-center">
        Our Portfolio
      </h2>
      <div>
        <Tabs>
          <TabList className="text-center mt-[30px] flex flex-wrap justify-center gap-7">
            <Tab  selectedClassName=" text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2  border-b-2 cursor-pointer">All</Tab>
            <Tab  selectedClassName=" text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2  border-b-2 cursor-pointer">Frontend</Tab>
            <Tab  selectedClassName=" text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2  border-b-2 cursor-pointer">Full Stack </Tab>
            <Tab  selectedClassName=" text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2  border-b-2 cursor-pointer">Seo</Tab>
          </TabList>

          <TabPanel className="md:mt-[20px] mt-3 ">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-2 lg:p-0">
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
           </div>
          </TabPanel>
          <TabPanel className="md:mt-[20px] mt-3 ">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-2 lg:p-0" >
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
           </div>
          </TabPanel>
          <TabPanel className="md:mt-[20px] mt-3 ">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-2 lg:p-0">
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
           </div>
          </TabPanel>
          <TabPanel className="md:mt-[20px]  ">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-2 lg:p-0">
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
           </div>
          </TabPanel>
          <TabPanel className="md:mt-[20px]  ">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-2 lg:p-0">
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
              <div className  ="bg-[#fff] border-[4px] rounded-xl border-white">
               <div className=" rounded-[14px] overflow-hidden border-4 border-white">
               <Image src={project} alt="project Image loading meybe our server any problem please wait a some times or realoade this site "/>
               </div>
              <div className="p-5">
              <h3 className="text-[20px] leading-10 font-bold mb-4">Leanding page</h3>
              <p>Technology : React , Tailwind </p>
              </div>


              </div>
           </div>
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
  </div>
  );
};

export default OurWorked;
