import React from "react";



const WhyUs = () => {
    return(
        <>
         <div className="h-auto w-auto bg-white ">
          <div className="justify-center ml-[1rem] mr-[1rem] mt-[1.5rem]  mb-[1rem] align-center items-center flex space-x-[2rem]">
          <div className="h-[47rem] w-[49%]">
            <img src = 'https://educationsafari.com/assets/about/company.jpg' className="h-full w-full" />
          </div>


                <div className="flex flex-col h-[48rem]   mt-[2rem] w-[49%]">
                    <h1 className="text-left   font-bold text-[#080050] mb-[1rem] text-[2.5rem]">Why Choose Us?</h1>

                    <div className="flex flex-col mt-[3rem]">
                        <p className="text-[1.5rem] text-[#080050]  font-semibold text-left">Expertise</p>
                        <span className="text-justify  text-[#080050]  font-sans text-[0.8rem]">
                        Our team consists of seasoned education consultants with in-depth knowledge of the Australian education system and immigration policies. We are well-equipped to address students' concerns and provide accurate information.
                        </span>
                    </div>
                    
                    <div className="flex flex-col mt-[3rem]">
                        <p className="text-[1.5rem] font-semibold text-[#080050] text-left">Personalized Approach</p>
                        <span className="text-justify text-[#080050]  text-[0.8rem]">
                        We believe in understanding each student's goals and preferences to tailor our services accordingly. Our personalized counselling ensures that students receive guidance that aligns with their aspirations.
                        </span>
                    </div>
                    
                    <div className="flex flex-col mt-[3rem]">
                        <p className="text-[1.5rem] font-semibold text-left text-[#080050] ">Extensive Network</p>
                        <span className="text-justify text-[0.8rem] text-[#080050]">
                        Over the years, we have established strong connections with reputable educational institutions in Australia. This network enables us to facilitate seamless communication between students and universities.
                        </span>
                    </div>
                    
                    <div className="flex flex-col mt-[3rem]">
                        <p className="text-[1.5rem] font-semibold text-left text-[#080050]">Commitment to Success</p>
                        <span className="text-justify text-[0.8rem] text-[#080050]">
                        We measure our success by the achievements of our students. Your dreams are our priority, and we are dedicated to supporting you at every step of your educational journey.
                        </span>
                    </div>
               </div>
             </div>
         </div>

        </>
    )
}
export default WhyUs;