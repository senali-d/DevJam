import { GiArchBridge } from "react-icons/gi";
import { textColor } from "@/utils/color";

const Title = ({title}) => {
  const { light, dark } = textColor;
  return (
    <>
      <GiArchBridge size={25} className={`text-[${light}] dark:text-[${dark}]`} />
      <h1 className={`text-[${light}] font-semibold text-xl dark:text-[${dark}]`}>
        {title}
      </h1>
    </>
  );
};

export default Title;
