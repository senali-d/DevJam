import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";
import {
  Flex,
  Box,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { pathname } = useRouter();

  return (
    <>
      <nav className="fixed z-10 w-full mx-auto bg-white/40 bg-opacity-80 border-gray-200 px-2 sm:px-4 py-2.5 rounded drop-shadow-lg">
        <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center flex-1">
            <span className="flex flex-row items-center self-center text-xl font-bold whitespace-nowrap text-[#732fff] hover:text-[#932fff]">
              <Image
                src="/5ire-fund.png"
                width="50"
                height="50"
                className="mr-4"
                alt="Logo"
              />
              5ire Fund
            </span>
          </Link>
          <div className="flex md:order-2" style={{ marginLeft: "2rem" }}>
            <ConnectKitButton />
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="ml-2 md:ml-0 inline-flex items-center py-2 px-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu size="20" />
            </button>
          </div>
          <div
            className={`${isOpenMenu ? "block" : "hidden"
              } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li></li>
              <li>
                <Link
                  href="/"
                  className={`${pathname === "/"
                      ? "text-[#a137df]"
                      : "text-gray-700"
                    } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                  aria-current="page"
                >
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      href="#"
                      className={`${pathname === "#"
                          ? "text-[#a137df]"
                          : "text-gray-700"
                        } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                      aria-current="page"
                    >
                      <b>Profile</b>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white-500 bg-opacity-80 box-border h-25 w-35 shadow-lg rounded-xl border-1 p-4 min-w-sm">
                    <Link
                      href="/create"
                      className="group display-block p-2 rounded-md hover:bg-white-200 hover:text-[#a13bf7]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:white-400 text-gray-600 hover:text-[#a13bf7]">
                            {"Create Profile"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                    <Link
                      href="/viewprofile"
                      className="group display-block p-2 rounded-md hover:bg-white-200 hover:text-[#a13bf7]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:white-400 text-gray-600 hover:text-[#a13bf7]">
                            {"View Profile"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className={`${pathname === "dasboard"
                      ? "text-[#a137df]"
                      : "text-gray-700"
                    } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0`}
                  aria-current="page"
                >
                  <b>Dashboard</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;