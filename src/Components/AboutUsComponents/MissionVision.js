import React from "react";


const MissionVision = () =>{
    return(
        <>
        <div className="h-auto w-full bg-white">
        <div className="justify-center  bg-[#f5f5f5] p-[1rem] flex w-auto  align-center items-center space-x-[1rem]">
           <div className="h-auto w-[50%] flex flex-col space-y-[1rem] p-[1.5rem]">
               <div className="flex flex-col  justify-center  align-center items-left">
                <h1 className="text-left font-semibold text-[1.3rem] text-[#080050]"> Our Mission </h1>
                <span  className="text-justify text-black font-sans text-[0.9rem]">
                To be the preferred global education consultancy, empowering students to achieve their academic and career aspirations through our personalized guidance and expert services, particularly for Australia.
                </span>
               </div>
               <div className="flex flex-col  justify-center   align-center items-left">
                <h1 className="text-left font-bold text-[1.8rem] text-[#080050]"> Our Vission </h1>
                 <span className="text-justify text-black  font-sans text-[0.9rem]">
                 To provide unparalleled educational counseling, migration services, and language enhancement programs that bridge the gap between students' dreams and the reality of studying in Australia. We aim to be the guiding light for students seeking a transformative international education and migration experience.                 </span>
               </div>

           </div>
           <div className="h-auto w-[50%] ">
             <img src='https://educationsafari.com/assets/about/vision.jpg' />
             
           </div>

        </div>

        </div>

        </>
    )
}
export default MissionVision;