import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import Button from "@/components/form-elements/button";
import { HiPhoneMissedCall } from "react-icons/hi";
import { useEventListener, useHuddle01 } from "@huddle01/react";
import {
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
} from "@huddle01/react/hooks";
import { Audio, Video } from "@huddle01/react/components";

// call join room in serverside props

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

const Event = () => {
  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby, isLobbyJoined } = useLobby();
  const { joinRoom, leaveRoom, isRoomJoined } = useRoom();
  const { state, send } = useMeetingMachine();

  const videoRef = useRef(null);
  const router = useRouter();

  const { roomid, token } = router.query;
  const { peers } = usePeers();

  useEffect(() => {
    initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR");
  }, []);

  useEventListener("lobby:cam-on", () => {
    if (state.context.camStream && videoRef.current)
      videoRef.current.srcObject = state.context.camStream;
  });

  return (
    <Layout headTitle="Huddle" isFooter={false}>
      <div className="flex flex-col flex-row flex-wrap md:flex-row items-center md:items-start md:justify-start pl-[60px] lg:pl-0">
        <div className="w-[90%] mx-auto lg:w-full flex flex-col mb-3 md:mb-0">
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-[30px] overflow-hidden shadow-lg  min-h-[calc(100vh-200px)]">
            <div className="flex mx-auto flex-col items-center justify-center w-full">
              {Object.values(peers)
                .filter((peer) => peer.cam)
                .map((peer) => (
                  <Video
                    key={peer.peerId}
                    peerId={peer.peerId}
                    track={peer.cam}
                    width="90%"
                  />
                ))}
              {Object.values(peers)
                .filter((peer) => peer.mic)
                .map((peer) => (
                  <Audio
                    key={peer.peerId}
                    peerId={peer.peerId}
                    track={peer.mic}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-3 md:mb-0">
          <div className="flex flex-col space-y-5 sm:space-y-0 mb-5 sm:mb-0 sm:flex-row mx-auto items-center justify-center w-full px-5">
            <div className="w-[100%] space-x-2 sm:min-h-[80px] flex items-center justify-center sm:justify-center">
              <div className="w-fit">
                <Button
                  label={isLobbyJoined ? "Start stream" : "Join Lobby"}
                  onClick={() => {
                    isLobbyJoined ? joinRoom() : joinLobby(roomid);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  leaveRoom();
                }}
                className="bg-red-600 w-fit p-3 rounded-full flex justify-center sm:justify-start items-center hover:cursor-pointer"
              >
                <HiPhoneMissedCall size={20} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Event;
