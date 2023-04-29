import React from 'react'

const Button = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-white bg-[#387997] hover:bg-[#38799780] focus:ring-1 focus:outline-none focus:ring-[#5b7a8a] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none dark:bg-[#224063] dark:hover:bg-[#22406380]"
    >
      {label}
    </button>
  )
}

export default Button

Button.defaultProps = {
  label: '',
  onClick: () => {}
}