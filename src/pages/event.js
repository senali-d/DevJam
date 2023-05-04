import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import Banner from "@/components/banner";
import Upload from "@/components/form-elements/upload";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import eventAddress from "../utils/constant";
import eventABI from "../contracts/event.json"
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { Web3Storage } from "web3.storage";

const Event = () => {
  const [banner, setBanner] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [nftaddress, setAddress] = useState("");
  const toast = useToast();

  const { config } = usePrepareContractWrite({
    address: "0x4cAD6d1fA95e0090c079D515272c9b23DEF8b298",
    abi: eventABI,
    functionName: "createEvent",
    args: [
      banner,
      name,
      date,
      description,
      nftaddress,
      "123"
    ],

    onError: (error) => {
      console.log(banner, name, date, description, nftaddress, "123");
      console.log("Error", error);
    },
    onSuccess: (result) => {
      console.log(banner, name, date, description, nftaddress, "123");
      console.log("Success", result);
    },
  });

  const { data, write, error } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction({ hash: data?.hash });

  useEffect(() => {
    console.log("isSuccess", isSuccess);
    console.log("error", error);
    if (isSuccess) {
      toast({
        title: "Event Created",
        description: "Your Event has been created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: "There was an error creating your Event: " + error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, error]);

  return (
    <Layout headTitle="Create Token">
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <Banner
          image="/token.png"
          title="EVENT"
          description="Mint a token on a fixed supply Already have a token? Import token into DevJam"
          style="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-500"
        />
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
        {banner == "" ? (<Image
            className="mx-auto"
            src={banner !== "" ? banner : "/token.png"}
            alt="preview"
            width={200}
            height={200}
          />) : (<Image
            className="mx-auto"
            src={banner !== "" ? banner : "/token.png"}
            loader={() => banner}
            alt="preview"
            width={200}
            height={200}
          />)}
          <Upload
            id="banner"
            name="banner"
            label="Event Banner"
            type="file"
            onChange={(e) => {
              const image = URL.createObjectURL(e.target.files[0]);
              const files = e.target.files;
              const client = new Web3Storage({
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
              });
              client.put(files).then((cid) => {
                console.log(cid);
                setBanner(`https://${cid}.ipfs.w3s.link/${files[0].name}`);
              });

            }}
          />
          <Input
            id="name"
            name="name"
            label="Event Name"
            placeholder="Event Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
             }}
            helper="Event name helper"
          />
          <Input
            id="date"
            name="date"
            label="Event Date"
            placeholder="Event Date"
            type="date"
            onChange={(e) => { 
              setDate(e.target.value);
            }}
            helper="Event date helper"
          />
          <Input
            id="description"
            name="description"
            label="Event Description"
            placeholder="Event Description"
            type="text"
            onChange={(e) => { 
              setDescription(e.target.value);
            }}
            helper="Description description helper"
          />
          <Input
            id="address"
            name="address"
            label="Contract Address"
            placeholder="0dqrfwtgdhzsfsdnwbxvwbyn"
            type="text"
            onChange={(e) => { 
              setAddress(e.target.value);
            }}
            helper="Contract Address helper"
          />
          <Button label="Create Event"  onClick={ (e) => {
              e.preventDefault();
              write();
            }}/>
        </form>
      </div>
    </Layout>
  );
};

export default Event;
