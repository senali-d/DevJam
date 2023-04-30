import React from "react";
import Button from "@/components/form-elements/button";
import Layout from "@/components/layout/layout";
import Banner from "@/components/banner";

const Card = ({ title, img, date }) => {
  console.log(img);
  return (
    <div className="event-card w-[90%] md:w-[32%] flex flex-col mb-[1%] mr-[1%]">
      <div
        className={`flex flex-col items-center bg-[url('../../public/banner.jpg')] bg-center rounded-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[150px]`}
      >
        <div className="event-detail hidden flex-col items-center justify-center bg-[#00000090] w-full min-h-[100px] md:min-h-[150px]">
          <div className="font-bold text-xl mb-2 text-center text-[#ccc]">
            {title}
          </div>
          <div className="text-[#ccc]">{date}</div>
          <div className="w-fit">
            <Button label="Create Event" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Event",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event",
    img: "../../public/banner.jpg",
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
