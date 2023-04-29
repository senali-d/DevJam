import React, { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@chakra-ui/react";
import Layout from "@/components/layout/layout";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import Upload from "@/components/form-elements/upload";
import Banner from "@/components/banner";

const Token = () => {
  const [image, setImage] = useState('')
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
            width={200}
            height={200}
          />
          <Upload
            id="image"
            name="image"
            label="Image"
            type="file"
            onChange={(e) => {}}
          />
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Coinverse DAO"
            type="text"
            onChange={(e) => {}}
            helper="This Can Be Your DAO Name or Special Access Collection"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Coinverse DAO Memberships"
            type="text"
            onChange={(e) => {}}
            helper="Write Something About This NFT or Features"
          />
          <Checkbox
            onChange={(e) => {}}
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
            onChange={(e) => {}}
            helper="Recommended Max Supply - 10 Million Tokens."
          />
          <Input
            id="price"
            name="price"
            label="Price"
            placeholder="1 5IRE"
            type="number"
            onChange={(e) => {}}
            helper="Recommend initial NFT Price - 2 5IRE, No '5IRE' Symbol Required."
          />
          <Button label="Create NFT" onClick={() => {}} />
        </form>
      </div>
    </Layout>
  );
};

export default Token;
