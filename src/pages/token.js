import React from "react";
import { Checkbox } from "@chakra-ui/react";
import Layout from "@/components/layout/layout";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import Banner from "@/components/banner";

const Token = () => {
  return (
    <Layout headTitle="Create Token">
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <Banner
          image="/token.png"
          title="TOKEN"
          description="Mint a token on a fixed supply Already have a token? Import token into DevJam"
          style="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-500"
        />
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Forefront"
            type="text"
            onChange={() => {}}
            helper="This Can Be A Discord Server, Project Or Your Own Name."
          />
          <Input
            id="symbol"
            name="symbol"
            label="Symbol"
            placeholder="FF"
            type="text"
            onChange={() => {}}
            helper="Your Token Symbol (1-7 Characters), No '$' Sign Required."
          />
          <Checkbox
            onChange={() => {}}
            defaultChecked
            className="text-[#5b7a8a] dark:text-[#3d7f91]"
          >
            Set Total Cap
          </Checkbox>
          <Input
            id="supply"
            name="supply"
            label="Total Cap"
            placeholder="0"
            type="number"
            onChange={() => {}}
            helper="Recommended Supply - 10 Million Tokens."
          />
          <Checkbox
            onChange={() => {}}
            defaultChecked
            className="text-[#5b7a8a] dark:text-[#3d7f91]"
          >
            Set Initial Supply
          </Checkbox>
          <Input
            id="supply"
            name="supply"
            label="Initial Supply"
            placeholder="0"
            type="number"
            onChange={() => {}}
            helper="Recommended Supply - 10 Million Tokens."
          />
          <Input
            id="whitelist"
            name="whitelist"
            label="Enter addresses for whitelist"
            placeholder="Enter comma separated addresses"
            type="text"
            onChange={() => {}}
            helper="Only whitelisted addresses will be able to mint your token."
          />
          <Button label="Create Token" onClick={() => {}} />
        </form>
      </div>
    </Layout>
  );
};

export default Token;
