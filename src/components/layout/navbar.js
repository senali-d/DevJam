import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

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
              className="text-[#5b7a8a] hover:cursor-pointer dark:text-[#3d7f91]"
            />
          ) : (
            <BiSun
              size="25"
              onClick={switchTheme}
              className="text-[#5b7a8a] hover:cursor-pointer dark:text-[#3d7f91]"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
