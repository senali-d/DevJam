import { company } from "../../utils/typo";

const Footer = ({ fontColor }) => {
  return (
    <footer className="w-full p-4 font-medium">
      <div className="pl-[80px] mx-auto max-w-[1080px] lg:pl-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* TODO: Add the logo here. */}
            <span
              className={`text-md ${
                fontColor ? fontColor : "text-[#5b7a8a] hover:text-[#a1a1a1]"
              } sm:text-center dark:text-[#3d7f91]`}
            >
              <a href="">{company.name}</a>
            </span>
            <a
              href="https://github.com/senali_d/DevJam"
              target="_blank"
              className={`${
                fontColor ? fontColor : "text-[#5b7a8a] hover:text-[#a1a1a1]"
              } dark:text-[#3d7f91]`}
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <span
            className={`text-md ${
              fontColor ? fontColor : "text-[#5b7a8a] hover:text-[#a1a1a1]"
            } sm:text-center dark:text-[#3d7f91]`}
          >
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
