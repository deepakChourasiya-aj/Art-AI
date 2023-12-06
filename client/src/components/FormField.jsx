import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-black-900'>{labelName}</label>
        {/* {
          isSurpriseMe && (<button type="button" onClick={handleSurpriseMe} className='font-semibold text-xs bg-gray py-1 px-2 rounded-[5px] text-black'>Surprise Me</button>)
        } */}
      </div>

      <div className='flex'>
        <input type={type} id={name} name={name} value={value} placeholder={placeholder} onChange={handleChange} required className={`bg-white-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block  p-3 ${isSurpriseMe && 'w-[60%]'} `} />
        {
          isSurpriseMe && (<button type="button" onClick={handleSurpriseMe} className='font-semibold text-xs bg-gray py-1 px-2 rounded-[5px] text-black'>Surprise Me</button>)
        }
      </div>
    </div>
  )
}

export default FormField