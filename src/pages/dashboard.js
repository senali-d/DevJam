import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import Title from "@/components/common/title";

const Card = ({ heading, title, img, link, color }) => {
  return (
    <div className="w-[90%] md:w-1/3 flex flex-col">
      <h1 className="text-[#9f9f9f] font-bold text-sm pl-5 pb-3 dark:text-[#605e8a]">
        {heading}
      </h1>
      <Link
        href={link}
        className={`flex items-center rounded-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[150px] ${color}`}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center text-[#E4E4ED]">
            {title}
          </div>
        </div>
        <div className="flex mx-auto justify-center w-[100%]">
          <Image
            src={img}
            width="120"
            height="100"
            alt="Icon"
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </div>
      </Link>
    </div>
  );
};

const cardData = [
  {
    heading: "LAUNCH A NFT",
    link: "/nft",
    title: "NFT",
    img: "/token.png",
    color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
  },
  {
    heading: "CREATE EVENT",
    link: "/event",
    title: "EVENT",
    img: "/token.png",
    color: "bg-gradient-to-r from-blue-400 to-emerald-400"
  },
  {
    heading: "EXPLORE EVENT",
    link: "/explore",
    title: "EXPLORE",
    img: "/token.png",
    color: "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
  }
]

const Dashboard = () => {
  return (
    <Layout headTitle="Dashboard">
      <div className="flex flex-col w-full pl-[80px] lg:pl-0 pb-10 md:pr-5">
        <div className="flex space-x-2 items-center mb-10 justify-center md:justify-start">
          <Title title="DASHBOARD"/>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 md:items-start md:justify-start">
          {
            cardData.map((card) => (
              <Card
                heading={card.heading}
                link={card.link}
                title={card.title}  
                img={card.img}
                color={card.color}
              />
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
