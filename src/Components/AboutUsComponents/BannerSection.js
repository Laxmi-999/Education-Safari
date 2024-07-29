import React from "react";

const BannerSection = () =>{
    return (
        <>
        <div className='relative h-auto  w-full p-0'> 
           <img className="w-full h-[5rem] md:h-[15rem] 2xl:h-[30rem] object-cover" src="https://educationsafari.com/img/banner/Australia_1704872113.jpg" alt="" /> 
             <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 transition-opacity'></div>
                <div className="absolute top-0 right-auto  w-full h-full flex flex-col items-left justify-center text-white z-10">
                <p className="absolute text-left ml-[1rem] text-white text-[1.5rem]">About Us</p>
             </div>
      </div>

        </>
    )
}
export default BannerSection;