import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { textColor } from "@/utils/color";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { light, dark } =  textColor
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <nav className="w-full mx-auto py-5 px-2 lg:px-0">
        <div className="max-w-[1080px] container flex flex-wrap justify-end space-x-5 items-center mx-auto">
          {theme === "light" ? (
            <BiMoon
              size="25"
              onClick={switchTheme}
              className={`text-[${light}] hover:cursor-pointer dark:text-[${dark}]`}
            />
          ) : (
            <BiSun
              size="20"
              onClick={switchTheme}
              className={`text-[${light}] hover:cursor-pointer dark:text-[${dark}]`}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
