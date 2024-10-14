"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import react from "@/public/physics.svg";
import next from "@/public/next.png";
import redux from "@/public/redux.png";
import tailwind from "@/public/tailwind.png";
import js from "@/public/js.png";
import html from "@/public/html.svg";
import bootstrap from "@/public/bootstrap.svg";
import ts from "@/public/typescript.svg";
import node from "@/public/node.svg";
import ex from "@/public/express.png";
import mon from "@/public/mon.png";
import laravel from "@/public/laravel.png";
import mysql from "@/public/mysql.png";
import post from "@/public/postgresql.svg";
import mongo from "@/public/mongodb.svg";
import word from "@/public/wordpress.svg";
import oo from "@/public/woo.svg";
import webflow from "@/public/webflow.png";
import Image from "next/image";
const OurExpertize = () => {
  return (
    <div className="mx-auto lg:max-w-[1440px] pt-[120px] pb-[100px]">
      <h1 className="md:text-[40px] text-[33px] p-1 md:p-0 leading-[52px] font-bold mb-[15px] text-center ">
        Technologies we work with
      </h1>
      <div>
        <Tabs>
          <TabList className="text-center mt-[30px] flex flex-wrap justify-center gap-7">
            <Tab
              selectedClassName=" text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2  border-b-2 cursor-pointer"
            >
              Front End
            </Tab>
            <Tab
              selectedClassName="text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2 border-b-2 cursor-pointer"
            >
              Backend
            </Tab>
            <Tab
              selectedClassName="text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2 border-b-2 cursor-pointer"
            >
              Database
            </Tab>
            <Tab
              selectedClassName="text-red-500 border-red-500 rounded-lg"
              className="text-black font-medium p-2 border-b-2 cursor-pointer"
            >
              CMS
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 p-8 grid-cols-2 mr-[-15px] ml-[-15px] lg:gap-8 gap-3 ">
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={html}
                    alt="Html Image loading"
                  />
                  <p className="text-sm leading-6">Html 5 </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={tailwind}
                    alt="tailwind Image loading"
                  />
                  <p className="text-sm leading-6">Tailwind css </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={bootstrap}
                    alt="bootstrap Image loading"
                  />
                  <p className="text-sm leading-6">Bootstrap</p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={js}
                    alt="JavaScript Image loading"
                  />
                  <p className="text-sm leading-6">JavaScript</p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={react}
                    alt="react Image loading"
                  />
                  <p className="text-sm leading-6">React Js </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={redux}
                    alt="redux Image loading"
                  />
                  <p className="text-sm leading-6">Redux Js </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={next}
                    alt="next Image loading"
                  />
                  <p className="text-sm leading-6">Next Js </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={ts}
                    alt="TypeScript Image loading"
                  />
                  <p className="text-sm leading-6">TypeScript </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 p-8 grid-cols-2 mr-[-15px] ml-[-15px] lg:gap-8 gap-3 ">
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={node}
                    alt="Node Image loading"
                  />
                  <p className="text-sm leading-6">Node js </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[90px] mx-auto"
                    src={ex}
                    alt="tailwind Image loading"
                  />
                  <p className="text-sm leading-6">Express js </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={mon}
                    alt="bootstrap Image loading"
                  />
                  <p className="text-sm leading-6">Mongoose Js</p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={laravel}
                    alt="JavaScript Image loading"
                  />
                  <p className="text-sm leading-6">laravel</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 p-8 grid-cols-2 mr-[-15px] ml-[-15px] lg:gap-8 gap-3">
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={mongo}
                    alt="Html Image loading"
                  />
                  <p className="text-sm leading-6">MongoDB </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[90px] mx-auto"
                    src={post}
                    alt="tailwind Image loading"
                  />
                  <p className="text-sm leading-6">postgresql </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={mysql}
                    alt="bootstrap Image loading"
                  />
                  <p className="text-sm leading-6">MySql</p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={laravel}
                    alt="JavaScript Image loading"
                  />
                  <p className="text-sm leading-6">laravel</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 p-8 grid-cols-2 mr-[-15px] ml-[-15px] lg:gap-8 gap-3">
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={word}
                    alt="Html Image loading"
                  />
                  <p className="text-sm leading-6">Wordpress </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[90px] mx-auto"
                    src={oo}
                    alt="tailwind Image loading"
                  />
                  <p className="text-sm leading-6">Woo Commerce </p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[80px] mx-auto"
                    src={webflow}
                    alt="bootstrap Image loading"
                  />
                  <p className="text-sm leading-6">webflow</p>
                </div>
              </div>
              <div className="text-center py-5 bg-[#f7f7f7] rounded-[14px] mt-7">
                <div className="">
                  <Image
                    className="pb-5 h-[100px] w-[100px] mx-auto"
                    src={laravel}
                    alt="JavaScript Image loading"
                  />
                  <p className="text-sm leading-6">laravel</p>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurExpertize;
