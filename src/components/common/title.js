import { GiArchBridge } from "react-icons/gi";

const Title = ({title}) => {
  return (
    <>
      <GiArchBridge size={25} className="text-[#5b7a8a] dark:text-[#3d7f91]" />
      <h1 className="text-[#5b7a8a] font-semibold text-xl dark:text-[#3d7f91]">
        {title}
      </h1>
    </>
  );
};

export default Title;
