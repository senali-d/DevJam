import React, { useState } from "react";
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  BiLinkExternal,
} from "react-icons/bi";
import Button from "@/components/form-elements/button";
import Layout from "@/components/layout/layout";
import Link from "next/link";

const Card = ({ title, img, onClick }) => {
  return (
    <div className="event-card w-[90%] md:w-[31%] flex flex-col mb-[2%] mr-[2%] rounded-t-[30px]">
      <div
        className={`flex flex-col items-center bg-[url('../../public/banner.jpg')] bg-cover bg-center bg-no-repeat rounded-t-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[200px]`}
      >
        <div className="event-detail hidden flex-col items-center justify-center bg-[#00000090] w-full min-h-[100px] md:min-h-[200px]">
          <div className="font-bold text-xl mb-2 text-center text-[#ccc]">
            {title}
          </div>
          <div className="w-fit">
            <Button label="Create Event" onClick={onClick} />
          </div>
        </div>
      </div>
      <div className="bg-[#3d7f9150] dark:bg-white flex w-full flex-col items-center justify-center rounded-b-[30px]">
        <p className="dark:text-[#5b7a8a] text-[#3d7f91] text-xl py-2">View Name</p>
        <div className="flex w-full px-2 pb-5">
          <div className="flex w-1/2">
            <p className="dark:text-[#5b7a8a] text-[#3d7f91]">2023-5-2</p>
          </div>
          <div className="flex w-1/2 justify-end">
            <Link href="/">
              <BiLinkExternal size={25} />
            </Link>
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
            <div className="text-[##3d7f91]">{data?.title}</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="text-[##3d7f91]">{data?.date}</div>
            <div className="text-[##3d7f91]">{data?.description}</div>
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
