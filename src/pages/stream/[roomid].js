import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import Button from "@/components/form-elements/button";
import {
  BsFillMicFill,
  BsMicMuteFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { HiPhoneMissedCall } from "react-icons/hi";
import { useEventListener, useHuddle01 } from "@huddle01/react";
import {
  useAudio,
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
  useVideo,
} from "@huddle01/react/hooks";

const Event = () => {
  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby, isLobbyJoined } = useLobby();
  const { joinRoom, leaveRoom, isRoomJoined } = useRoom();
  const { state, send } = useMeetingMachine();
  const {
    fetchAudioStream,
    stopAudioStream,
    stream: micStream,
  } = useAudio();
  const {
    fetchVideoStream,
    produceVideo,
    stopVideoStream,
    stopProducingVideo,
    stream: camStream,
  } = useVideo();

  const videoRef = useRef(null);
  const router = useRouter();

  const { roomid } = router.query;

  useEffect(() => {
    initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR");
    joinLobby(roomid);
  }, []);

  useEventListener("lobby:cam-on", () => {
    if (state.context.camStream && videoRef.current)
      videoRef.current.srcObject = state.context.camStream;
  });

  return (
    <Layout headTitle="Huddle" isFooter={false}>
      <div className="flex flex-col flex-row flex-wrap md:flex-row items-center md:items-start md:justify-start pl-[60px] lg:pl-0">
        <div className="w-[90%] mx-auto lg:w-full flex flex-col mb-3 md:mb-0">
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-[30px] overflow-hidden shadow-lg min-h-[calc(100vh-200px)]">
            <div className="flex mx-auto flex-col items-center justify-center w-full">
              <video ref={videoRef} width={"80%"} autoPlay muted></video>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-3 md:mb-0">
          <div className="flex flex-col space-y-5 sm:space-y-0 mb-5 sm:mb-0 sm:flex-row mx-auto items-center justify-center w-full px-5">
            <div className="w-[100%] space-x-3 sm:min-h-[80px] flex items-center justify-center sm:justify-center">
              <div className="w-[300px] flex space-x-3">
                <Button
                  label={isLobbyJoined ? "Join Room" : "Join Lobby"}
                  onClick={() => {
                    if (isLobbyJoined) {
                      joinRoom();
                    } else {
                      fetch("/api/access-token", {
                        method: "POST",
                        body: JSON.stringify({
                          roomId: roomid,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }).then(async (res) => {
                        const data = await res.json();
                        joinLobby(roomid, data.token);
                      });
                    }
                  }}
                />
                <Button
                label="Video"
                onClick={() => {
                  produceVideo(camStream);
                }}
              />
              </div>

              <button
                onClick={() => {
                  state.matches("Initialized.JoinedLobby.Mic.Unmuted")
                    ? stopAudioStream()
                    : fetchAudioStream();
                }}
                className="bg-gray-600 w-fit p-3 rounded-full flex justify-center sm:justify-start items-center hover:cursor-pointer"
              >
                {state.matches("Initialized.JoinedLobby.Mic.Unmuted") ? (
                  <BsFillMicFill size={20} color="#fff" />
                ) : (
                  <BsMicMuteFill size={20} color="#fff" />
                )}
              </button>
              <button
                onClick={() => {
                  if (isLobbyJoined) {
                    if (state.matches("Initialized.JoinedLobby.Cam.On")) {
                      stopVideoStream();
                    } else {
                      fetchVideoStream();
                    }
                  } else {
                    if (state.matches("Initialized.JoinedRoom.Cam.On")) {
                      stopProducingVideo();
                    } else {
                      console.log("produce video");
                      produceVideo(camStream);
                    }
                  }
                }}
                className="bg-blue-600 w-fit p-3 rounded-full flex justify-center sm:justify-start items-center hover:cursor-pointer"
              >
                {state.matches("Initialized.JoinedLobby.Cam.On") ||
                state.matches("Initialized.JoinedRoom.Cam.On") ? (
                  <BsFillCameraVideoFill size={20} color="#fff" />
                ) : (
                  <BsFillCameraVideoOffFill size={20} color="#fff" />
                )}
              </button>
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
