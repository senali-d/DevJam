import React from 'react'
import { FormLabel, Input as ChakraInput } from '@chakra-ui/react'

const Input = ({
  id,
  name,
  label,
  placeholder,
  type,
  onChange,
  helper,
}) => {
  return (
    <div>
      <FormLabel 
        htmlFor={id} 
        className="text-[#5b7a8a] dark:text-[#3d7f91]">
          {label}
      </FormLabel>
      <ChakraInput
        id={id}
        name={name}
        onChange={onChange}
        variant="outline" 
        className="mt-0 text-[#5b7a8a] border-black dark:text-[#3d7f91] dark:border-[#3d7f91]" 
        focusBorderColor="#3d7f91" 
        borderColor="#3d7f91"
        placeholder={placeholder}
        type={type}
      />
      <div className="text-sm mt-1 text-[#666666]">{helper}</div>
    </div>
  )
}

export default Input

Input.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  onchange: () => {},
  helper: ''
}