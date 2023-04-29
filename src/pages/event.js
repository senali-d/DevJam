import React, {useState} from "react";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import Banner from "@/components/banner";
import Upload from "@/components/form-elements/upload";

const Dashboard = () => {
  const [banner, setBanner] = useState("");

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
          <Image
            className="mx-auto"
            src={banner !== "" ? banner : "/token.png"}
            alt="preview"
            width={200}
            height={200}
          />
          <Upload
              id="banner"
              name="banner"
              label="Event Banner"
              type="file"
              onChange={() => {setBanner()}}
            />
          <Input
            id="name"
            name="name"
            label="Event Name"
            placeholder="Event Name"
            type="text"
            onChange={() => {}}
            helper="Event name helper"
          />
          <Input
            id="date"
            name="date"
            label="Event Date"
            placeholder="Event Date"
            type="date"
            onChange={() => {}}
            helper="Event date helper"
          />
          <Input
            id="description"
            name="description"
            label="Event Description"
            placeholder="Event Description"
            type="text"
            onChange={() => {}}
            helper="Description description helper"
          />
          <Input
            id="address"
            name="address"
            label="Contract Address"
            placeholder="0dqrfwtgdhzsfsdnwbxvwbyn"
            type="text"
            onChange={() => {}}
            helper="Contract Address helper"
          />
          <Button label="Create Event" onClick={() => {}} />
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
