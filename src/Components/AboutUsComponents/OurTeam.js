import React from "react";

const OurTeam = () =>{
    const filteredTeamList = teamList.filter(member => member.location === 'true');
    const WholeTeamList = teamList.filter(member => member.location === 'false');


    return(
        <>
        <div className="h-auto w-full bg-white">
        <h1 className="text-center text-[2rem]  font-bold text-[#0e0b62] mt-[1rem] mb-[1rem]">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center  align-center ml-[3rem] ">
        {WholeTeamList.map((currElem, id ) =>(
        <div key={id} className="justify-start h-[32rem] w-[90%] mb-[3rem] align-center pl-[5px] pr-[5px] pt-[5px] items-center flex flex-col shadow-custom-equal rounded-xl">
             <img src = {currElem.img}  className="h-[20rem]  w-auto"/>
             <p className="text-[1.3em] text-black-900 mt-[5px] mb-[0.5rem]  font-sans">{currElem.name}</p>
             <p className="text-[0.9rem] text-gray-500 text-center font-sans mb-[5px]">{currElem.position}</p>
             <p className="text-[0.9rem] text-gray-500  text-center font-sans mb-[5px]">{currElem.education}</p>
             <p className="text-[0.9rem]  text-gray-500 text-center font-sans ">{currElem.education1}</p>
             <p className="text-[0.9rem]  text-gray-500  text-center font-sans ">{currElem.education2}</p>
             <p className="text-[0.9rem]  text-gray-500 text-center font-sans ">{currElem.education3}</p>
             <p className="text-[0.9rem]  text-gray-500 text-center font-sans ">{currElem.education4}</p>
             <p className="text-[0.9rem]  text-gray-500 text-center font-sans mb-[2px]">{currElem.qeac}</p>
         </div>

        ))}

        </div>
        </div>
        <hr className="bg-black h-[2px] ml-[2rem] mr-[2rem]"/>
        <div className="h-auto w-full bg-white">
            <h1 className="text-center text-[2rem] text-[#0e0b62] mt-[1rem] font-bold mb-[1rem]">Chitwan Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center ml-[5rem] mb-[3rem] items-center">
      {filteredTeamList.map((currElem, id) => (
      <div key={id} className="justify-start h-auto w-[80%]  align-center  mb-[5px]  items-center flex flex-col shadow-custom-equal  rounded-xl">
            <img src={currElem.img} alt={currElem.name} className="h-[20rem] w-full object-cover rounded-lg"/>
          <p  className="text-[1.3em] text-black-900 mt-[5px] mb-[0.5rem]  font-sans">{currElem.name}</p>
          <p className="text-[0.9rem] text-gray-500 text-center font-sans mb-[5px]">{currElem.position}</p>
          {currElem.education && <p>{currElem.education}</p>}
          {currElem.education1 && <p>{currElem.education1}</p>}
          {currElem.education2 && <p>{currElem.education2}</p>}
          {currElem.education3 && <p>{currElem.education3}</p>}
          {currElem.education4 && <p>{currElem.education4}</p>}
          {currElem.qeac && <p>{currElem.qeac}</p>}
        </div>
      ))}
    </div>
    <hr  className="bg-black  h-[1px] mb-[3rem] ml-[2rem] mr-[2rem]" />

        </div>

        </>
    )
}
const teamList = [
    {
        id:1,
        name:'Er. Sagar Shrestha',
        location:'false',
        img:'https://educationsafari.com/img/team/364191799_1516638999165051_3948373328117725967_n_1691665254_1701425806_1701771307.png',
        education:'MIT (Flinders University)',
        position : 'Director',
        qeac :'QEAC #12075',

    },
    {
        id:2,
        name:'Shyam Dahal',
        location:'false',
        img:'https://educationsafari.com/img/team/364191799_1516638999165051_3948373328117725967_n_1691665254_1701425906.jpg',
        education1:'MAcc ( University of Western Sydney)',
        education2:'MBS (TU)',
        education3:'GDIP in MHN ( Flinders University)',
        education4:'Bachelor of Nursing ( University of South Australia)',
        position : 'Operation Manager',
        qeac :'QEAC #12091',

    },
    {
        id:3,
        name:'Khagendra Sapkota',
        location:'false',
        img:'https://educationsafari.com/img/team/364191799_1516638999165051_3948373328117725967_n_1691665254_1701425654.jpg',
        education1:'MIPA, Registered Tax Agent',
        education2:'Master of Commerce | Professional Accounting University of Ballarat Australia',
        position : 'Finance Manager',
        qeac :'C #12103',

    },
    {
        id:4,
        name:'Surya Acharya',
        location:'false',
        img:'https://educationsafari.com/img/team/364191799_1516638999165051_3948373328117725967_n_1691665254_1701426150.jpg',
        education1:'Bachelor of Nursing (UNISA)',
        education2:'Master of MHN University of Newcastle',
        position : 'Business Development Manager',
        qeac :'QEAC #12072',

    },
 
    {
        id:5,
        name:'SK Bohara',
        location:'false',
        img:'https://educationsafari.com/img/team/364191799_1516638999165051_3948373328117725967_n_1691665254_1701426062.jpg',
        education1:'Bachelor of Accounting (University of Ballarat)',
        education2:'Bachelor Of Nursing ( Flinders University)',    
        position : 'Marketing Manager',
        qeac :'QEAC #12092',

    },
    {
        id:6,
        name:'Yatharth Bharadwaj',
        location:'false',
        img:'https://educationsafari.com/img/team/364191799_1516638999165051_3948373328117725967_n_1691665254_1701426112.jpg',
        education:'',
        position : 'Registered Migration Agent',
        qeac :'MARA 1680071',

    },
    {
        id:7,
        name:'Ashma Timilsina',
        location:'true',
        img:'https://educationsafari.com/img/team/78762%20kk_1706431447.png',
        position : 'Country Manager',

    },
    {
        id:7,
        name:'Prabin SharmaShrestha',
        location:'true',
        img:'https://educationsafari.com/img/team/prabin_1706001153.jpeg',
        position : 'PTE, IELTS & OET Instructor',
       

    },
]
export default  OurTeam;