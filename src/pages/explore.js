import React, { useState } from "react";
import { useDisclosure } from '@chakra-ui/react'
import Button from "@/components/form-elements/button";
import Layout from "@/components/layout/layout";
import Banner from "@/components/banner";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const Card = ({ title, img, onClick }) => {
  return (
    <div className="event-card w-[90%] md:w-[31%] flex flex-col mb-[2%] mr-[2%] rounded-[30px] hover:drop-shadow-[35px_15px_15px_rgba(0,0,0,0.25)]">
      <div
        className={`flex flex-col items-center bg-[url('../../public/banner.jpg')] bg-center rounded-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[150px]`}
      >
        <div className="event-detail hidden flex-col items-center justify-center bg-[#00000090] w-full min-h-[100px] md:min-h-[150px]">
          <div className="font-bold text-xl mb-2 text-center text-[#ccc]">
            {title}
          </div>
          <div className="w-fit">
            <Button label="Create Event" onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Event 1",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event 2",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event 3",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event 4",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
  {
    title: "Event 5",
    img: "../../public/banner.jpg",
    date: "2023-01-01",
    description: "Event description",
  },
];

function ModalComponent({isOpen, onClose, data, onClick}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="text-[#ffffff]">{data?.title}</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="text-[#ffffff]">{data?.date}</div>
            <div className="text-[#ffffff]">{data?.description}</div>
          </ModalBody>

          <ModalFooter>
          <div className="w-fit">
            <Button label="Attend" onClick={onClick} />
          </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedEvent, setSelectedEvent] = useState()

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
            onClick={() => {
              onOpen()
              setSelectedEvent(card)
            }}
          />
        ))}
      </div>
      <ModalComponent isOpen={isOpen} onClose={onClose} data={selectedEvent} onClick={()=>{}} />
    </Layout>
  );
};

export default Explore;
