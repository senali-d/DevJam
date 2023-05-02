import React, { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@chakra-ui/react";
import Layout from "@/components/layout/layout";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import Upload from "@/components/form-elements/upload";
import Banner from "@/components/banner";
import { Web3Storage } from "web3.storage";
import { ABI } from "../contracts/launchpad.json"
import { contracAddress } from "../utils/constant";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

const Token = () => {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [supply, setSupply] = useState('')
  const [price, setPrice] = useState('')
  const [maxSupplyFlag, setMaxSupplyFlag] = useState(true);
  const { address } = useAccount();
  const [uri, setUri] = useState('');
  const toast = useToast();

  const { config } = usePrepareContractWrite({
    address: contracAddress,
    abi: ABI,
    functionName: "createNFT",
    args: [
      uri,
      supply,
      maxSupplyFlag == true ? 0 : 1,
      parseInt(price),
      address,
    ],

    onError: (error) => {
      console.log("Error", error);
    },
    onSuccess: (result) => {
      console.log(uri, supply, maxSupplyFlag == true ? 0 : 1, price, address);
      console.log("Success", result);
    },
  });

  const { data, write, error } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction({ hash: data?.hash });

  const createMetadata = () => {
    var metadata = {
      name: name,
      description: description,
      image: image,
    };
    console.log(metadata);
    const client = new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
    });
    client
      .put([new File([JSON.stringify(metadata)], "metadata.json")])
      .then(async (cid) => {
        setUri(`https://${cid}.ipfs.w3s.link/metadata.json`);
      });
  };

  useEffect(() => {
    console.log("isSuccess", isSuccess);
    console.log("error", error);
    if (isSuccess) {
      toast({
        title: "NFT Created",
        description: "Your NFT has been created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: "There was an error creating your token: " + error.message,
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
          title="NFT"
          description="Monetize your event registreation to attent."
          style="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-500"
        />
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
          <Image
            className="mx-auto"
            src={image !== "" ? image : "/token.png"}
            alt="preview"
            loader={() => image}
            width={200}
            height={200}
          />
          <Upload
            id="image"
            name="image"
            label="Image"
            type="file"
            onChange={(e) => {
              const image = URL.createObjectURL(e.target.files[0]);
              setImage(image);
              const files = e.target.files;
              const client = new Web3Storage({
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
              });
              client.put(files).then((cid) => {
                console.log(cid);
                setImage(`https://${cid}.ipfs.w3s.link/${files[0].name}`);
              });

            }}
          />
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Coinverse DAO"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            helper="This Can Be Your DAO Name or Special Access Collection"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Coinverse DAO Memberships"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            helper="Write Something About This NFT or Features"
          />
          <Checkbox
            onChange={(e) => {
              setMaxSupplyFlag(e.target.checked)
            }}
            defaultChecked
            className="text-[#5b7a8a] dark:text-[#3d7f91]"
          >
            Set Max Supply
          </Checkbox>
          <Input
            id="supply"
            name="supply"
            label="Max Supply"
            placeholder="0"
            type="number"
            onChange={(e) => {
              setSupply(e.target.value);
            }}
            helper="Recommended Max Supply - 10 Million Tokens."
          />
          <Input
            id="price"
            name="price"
            label="Price"
            placeholder="1 5IRE"
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            helper="Recommend initial NFT Price - 2 5IRE, No '5IRE' Symbol Required."
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              createMetadata();
            }}
            className="w-full text-[#fffff] bg-violet-500 hover:bg-violet-600 focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-gray-100"
          >
            Upload
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
            write();
            }}
            className="w-full text-[#fffff] bg-violet-500 hover:bg-violet-600 focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-gray-100"
          >
            {" "}
            Create
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Token;
