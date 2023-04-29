import Image from "next/image";

const Banner = ({ image, title, description, style }) => {
  return (
    <div className={`flex items-center w-[90%] md:w-full ${style} rounded-[30px] overflow-hidden shadow-lg`}>
      <div className="hidden md:flex mx-auto justify-center">
        <Image src={image} width="200" height="200" alt="Icon" />
      </div>
      <div className="px-10 py-8 text-white text-right">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-bold text-md mb-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Banner;
