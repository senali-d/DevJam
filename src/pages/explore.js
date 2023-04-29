import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import Banner from "@/components/banner";

const Card = ({ title, img, date, description }) => {
  return (
    <div className="w-[90%] md:w-[32%] flex flex-col mb-[1%] mr-[1%]">
      <div className="flex flex-col items-center bg-gray-300 rounded-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[150px]">
        <div className="flex mx-auto justify-center w-[100%]">
          <Image src={img} width="120" height="100" alt="Icon" />
        </div>
        <div className="px-6 py-4 w-full">
          <div className="font-bold text-xl mb-2 text-center text-[#3d7f91]">
            {title}
          </div>
          <div className="text-[#3d7f91]">Event on: {date}</div>
          <div className="mb-2 text-[#3d7f91]">{description}</div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Event",
    img: "/token.png",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "/token.png",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "/token.png",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "/token.png",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "/token.png",
    date: "2023-01-01",
    description: "Event description",
  },
];

const Explore = () => {
  return (
    <Layout headTitle="Explore Event">
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-10 pl-[60px] lg:pl-0">
        <Banner
          image="/token.png"
          title="Explore Event"
          description="Mint a token on a fixed supply Already have a token? Import token into DevJam"
          style="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-500"
        />
      </div>
      <div className="flex flex-col flex-wrap md:flex-row items-center md:items-start md:justify-start pl-[60px] lg:pl-0">
        {cardData.map((card) => (
          <Card
            title={card.title}
            img={card.img}
            date={card.date}
            description={card.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Explore;
