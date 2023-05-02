import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import Button from "@/components/form-elements/button";
import { MdOutlineToken } from "react-icons/md";

const Card = ({ title, img }) => {
  return (
    <div className="min-w-[50%] md:min-w-[33%] mr-3 md:mr-0 md:w-[90%] flex flex-col mb-3">
      <div className="flex flex-col items-center bg-gray-300 rounded-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[150px]">
        <div className="flex mx-auto justify-center w-[100%]">
          <Image src={img} width="120" height="100" alt="Icon" />
        </div>
        <div className="px-6 py-4 w-full">
          <div className="font-bold text-xl mb-2 text-center text-[#3d7f91]">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Person",
    img: "/token.png",
  },
  {
    title: "Person",
    img: "/token.png",
  },
  {
    title: "Person",
    img: "/token.png",
  },
  {
    title: "Person",
    img: "/token.png",
  },
  {
    title: "Person",
    img: "/token.png",
  },
  {
    title: "Person",
    img: "/token.png",
  },
];

const Explore = () => {
  return (
    <Layout headTitle="Huddle" isFooter={false}>
      <div className="flex flex-col flex-row flex-wrap md:flex-row items-center md:items-start md:justify-start pl-[60px] lg:pl-0">
        <div className="w-full flex flex-col mb-3 md:mb-0">
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-[30px] overflow-hidden shadow-lg  min-h-[calc(100vh-200px)]">
            <div className="flex mx-auto flex-col items-center justify-center w-full">
              <Image src="/token.png" width="120" height="100" alt="Icon" />
              <div className="font-bold text-xl mb-2 text-center text-[#3d7f91]">
                Organizer
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-3 md:mb-0">
          <div className="flex flex-row mx-auto items-center justify-center w-full">
            <div className="flex items-center w-[50%] min-h-[80px] bg-green-100">
              <div className="w-fit">
                <Button label="Join Lobby" onClick={() => {}} />
              </div>
            </div>
            <div className="w-[50%] min-h-[80px] bg-green-100">
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
