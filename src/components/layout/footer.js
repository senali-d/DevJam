import { company } from "../../utils/typo";
import { textColor } from "@/utils/color";

const Footer = () => {
  const { light, dark } =  textColor
  return (
    <footer className="w-full p-4 font-medium">
      <div className="pl-[80px] mx-auto max-w-[1080px] lg:pl-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* TODO: Add the logo here. */}
            <span className={`text-md text-[${light}] hover:text-[#a1a1a1] sm:text-center dark:text-[${dark}]`}>
              <a href="">{company.name}</a>
            </span>
            <a
              href="https://github.com/senali_d/DevJam"
              target="_blank"
              className={`text-[${light}] hover:text-[#a1a1a1] dark:text-[${dark}]`}
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <span className={`text-md text-[${light}] hover:text-[#a1a1a1] sm:text-center dark:text-[${dark}]`}>
            © {new Date().getFullYear()}{" "}
            <a href="" className="hover:underline">
              {company.name}
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
