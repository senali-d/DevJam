import React from "react";
import Layout from "@/components/layout/layout";
import Title from "@/components/common/title";

const Dashboard = () => {
  return (
    <Layout headTitle="Dashboard">
      <div className="flex flex-col w-full pl-[80px] lg:pl-0 pb-10 md:pr-5">
        <div className="flex space-x-2 items-center mb-10 justify-center md:justify-start">
          <Title title="DASHBOARD"/>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
