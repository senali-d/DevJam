import React from "react";
import { FormLabel, Icon } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";

const Upload = ({ id, name, label, type, accept, onChange }) => {
  return (
    <div className="flex flex-col">
      <FormLabel htmlFor={id} className="text-[#5b7a8a] dark:text-[#3d7f91]">
        {label}
      </FormLabel>
      <button
        leftIcon={<Icon as={FiFile} />}
        className="max-w-full h-[38px] text-[#5b7a8a] py-2 rounded border border-[#3d7f91] hover:border-gray-300 mb-5 md:mb-0"
      >
        Upload
        <input
          id={id}
          name={name}
          type={type || "file"}
          className="bg-red-500 w-full relative top-[-32px] h-[36px] opacity-0"
          accept={accept || "image/*"}
          onChange={onChange}
        />
      </button>
    </div>
  );
};

Upload.defaultProps = {
  label: "",
  placeholder: "",
  type: "file",
  accept: "image/*",
  onchange: () => {},
};

export default Upload;