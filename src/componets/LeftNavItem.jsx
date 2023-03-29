import React, { useState } from 'react'

const LeftNavItem = ({text,icon,action,className,isLoading}) => {
  const [progress, setProgress] = useState(0)

  return (
   <div className=" px-2 md:px-3 md:pb-[1px]"> 
     
     <div onClick={action} className={`space-x-2  text-[13px] w-32 md:w-full text-white md:text-sm cursor-pointer h-9  flex items-center px-3 md:mb-[1px] rounded-lg hover:bg-white/[0.15]` + className}>
        <p className="">{icon}</p>
        <p className="">{text}</p>
    </div>
   </div>
  )
}

export default LeftNavItem