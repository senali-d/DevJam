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
        className="max-w-full text-[#5b7a8a] py-2 rounded border border-[#3d7f91] hover:border-white mb-5 md:mb-0"
      >
        Upload
        <input
          id={id}
          name={name}
          type={type || "file"}
          className="opacity-0 absolute left-0 right-0 max-w-full"
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