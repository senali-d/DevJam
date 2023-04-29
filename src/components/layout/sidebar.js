import React from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="fixed min-h-[100vh] w-[60px] border-r border-[#5b7a8a] py-5 dark:border-[#3d7f91]">
      <div>
        <ul className="flex flex-col items-center justify-center space-y-4 w-full">
          <li className="w-[80%] border-b text-[#5b7a8a] border-[#5b7a8a] flex justify-center pb-4 dark:text-[#3d7f91] dark:border-[#3d7f91]">
            <Tooltip label="HOME" fontSize="md" placement="right">
              <Link
                href="/"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <AiOutlineHome size={25} />
              </Link>
            </Tooltip>
          </li>
          <li className="w-[80%] border-b text-[#5b7a8a] border-[#5b7a8a] flex justify-center pb-4 dark:text-[#3d7f91] dark:border-[#3d7f91]">
            <Tooltip label="DASHBOARD" fontSize="md" placement="right">
              <Link
                href="dashboard"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <MdSpaceDashboard size={25} />
              </Link>
            </Tooltip>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
