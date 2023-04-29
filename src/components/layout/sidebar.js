import React from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdSpaceDashboard,
  MdOutlineToken,
  MdOutlineExplore,
  MdEventAvailable,
  MdVideoCall,
} from "react-icons/md";

const NavLink = ({ label, path, icon }) => {
  return (
    <li className="w-[80%] border-b text-[#5b7a8a] border-[#5b7a8a] flex justify-center pb-4 dark:text-[#3d7f91] dark:border-[#3d7f91]">
      <Tooltip label={label} fontSize="md" placement="right">
        <Link
          href={path}
          className="flex justify-center sm:justify-start items-center py-2"
        >
          {icon}
        </Link>
      </Tooltip>
    </li>
  );
};

const navData = [
  {
    label: "Home",
    path: "/",
    icon: <AiOutlineHome size={25} />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <MdSpaceDashboard size={25} />,
  },
  {
    label: "NFT",
    path: "/nft",
    icon: <MdOutlineToken size={25} />,
  },
  {
    label: "Event",
    path: "/event",
    icon: <MdEventAvailable size={25} />,
  },
  {
    label: "EXPLORE EVENT",
    path: "/explore",
    icon: <MdOutlineExplore size={25} />,
  },
  {
    label: "Huddle",
    path: "/huddle",
    icon: <MdVideoCall size={25} />,
  }
];

const Sidebar = () => {
  return (
    <aside className="fixed min-h-[100vh] w-[60px] border-r border-[#5b7a8a] py-5 dark:border-[#3d7f91]">
      <div>
        <ul className="flex flex-col items-center justify-center space-y-4 w-full">
          {navData.map(({ path, label, icon }) => {
            return <NavLink key={path} label={label} path={path} icon={icon} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
