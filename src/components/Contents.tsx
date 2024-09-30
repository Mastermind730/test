"use client";
import React from 'react'
import ContentsItems from './ContentsItems'
import acmimage2 from "@/assets/acm_desktopcta (1).jpeg"
import acmimage3 from '@/assets/acm_desktopcta (2).jpeg'
import acmimage4 from '@/assets/acm_desktopcta (3).jpeg'
import Banner1 from '@/assets/main_banner.png'
import ListItems from './ListItems'
import Image from 'next/image'
import Link from 'next/link'

function Contents() {
    const menu = [
        { heading: 'ABOUT ACM ORGANIZATION', paragraph: "ACM is a global scientific and educational organization dedicated to advancing the art, science, engineering, and application of computing, serving both professional and public interests by fostering the open exchange of information and by promoting the highest professional and ethical standards.", subheading: 'Visions:' },
        { heading: 'ACM INDIA COUNCIL', paragraph: "ACM India Council, an initiative by ACM, the world's largest computing society, elevates and amplifies ACM activities in India. Focused on research, top-tier conferences, advancing CS education, and recognizing achievements through awards, it engages both academia and industry in the computing domain.", subheading: '' },
        { heading: 'ACM SPECIAL INTEREST GROUPS', paragraph: "ACM’s Special Interest Groups (SIGs) represent the major areas of the dynamic computing field. A primary source of original research and personal perspectives from the world's leading thinkers in computing and information technology, they foster technical communities within their respective specialties across countries and continents. ACM’s SIGs are invested in advancing the skills of their members, keeping them abreast of emerging trends. They offer opportunities for networking with colleagues, staying connected to peers and negotiating the strategic challenges of the digital age.", subheading: '' },
    ]
    const list = [
        "To be a Premier Hub in Computer Engineering",
        " To ensure overall Development of Students",
        "Adaptability to Current Market Scenario",
        "Expertise-driven Training by Faculty",
        "To be an Association of students for students and by students.",

        "Unique volunteering opportunities for hands-on marketplace experience",
        "Professional networking hub for technology enthusiasts",
        "Promoting active engagement in the dynamic field of computing among students",
        "Organizing high-quality ACM conferences in India",
        "Supporting growth of ACM chapters with logistical assistance",
        "Improving access to ACM Digital Library and publications for Indian members",
        "Boosting ACM member participation across various dimensions in India",
    ]
    return (
        <div className='w-full min-h-[100vh] bg-blue relative py-8 px-8 sm:overflow-x-hidden'>



            {/* _______________________FIRST__________________________________ */}
            <div className='lg:flex items-center my-8 sm:block'>
                {/* --------------------First Content---------------------------- */}
                <div className='lg:w-[50%] lg:px-[80px] py-3 sm:w-full'>
                    {menu.map((items, index) => index < 1 && (
                        <ContentsItems key={index} heading={items.heading} paragraph={items.paragraph} subheading={items.subheading} />
                    ))}
                    {
                        list.map((objs, index) => (index >= 0 && index < 5) && (
                            <ListItems key={index} obj={objs} />
                        ))
                    }
                </div>
                {/* --------------------First Banner---------------------------- */}
                <div className=' lg:w-[50%] flex items-center justify-center lg:mx-8 sm:w-full sm:mx-2'>
                    <Image width={200} height={200} src={Banner1} alt="Image1" className='rounded-2xl w-[550px] m-auto shadow-slate-700 shadow-lg' />
                </div>
            </div>



            {/* _______________________SECOND__________________________________ */}
            <div className='  w-full lg:flex justify-between sm:block'>

                {/* --------------------Second Banner---------------------------- */}
                <div className=' lg:w-[50%] flex items-center justify-center sm:w-full'>
                    <Image width={200} height={200} src={acmimage2} alt="Image1" className='rounded-2xl w-[550px] m-auto shadow-slate-700 shadow-lg' />
                </div>
                {/* --------------------Second Content---------------------------- */}
                <div className='lg:w-[50%] lg:px-[80px] py-3 sm:w-full'>
                    {menu.map((items, index) => (index > 0 && index < 2) && (
                        <ContentsItems  key={index} heading={items.heading} subheading={items.subheading} paragraph={items.paragraph} />
                    ))}
                    {
                        list.map((objs, index) => index > 4 && (
                            <ListItems key={index} obj={objs} />
                        ))
                    }
                    {/* --------------------Button---------------------------- */}
                    <div className='lg:w-[50%] flex items-center sm:text-center py-7 sm:w-full'>
                        <Link href="https://acm.org" className='text-[18px] border-[2px]  border-[#00F8EC] hover:text-[#111827] text-[#00F8EC] px-5 py-2 hover:bg-[#00F8EC]'><button>Learn More</button></Link>
                    </div>
                </div>
            </div>



            {/* _______________________THIRD__________________________________ */}
            <div className='lg:flex items-center my-8 sm:block'>
                {/* --------------------Third Content---------------------------- */}
                <div className='lg:w-[50%] lg:px-[80px] py-3 sm:w-full'>
                    {menu.map((items, index) => (index > 1 && index < 3) && (
                        <ContentsItems key={index} heading={items.heading} subheading={items.subheading} paragraph={items.paragraph} />
                    ))}
                </div>
                {/* --------------------Third Banner---------------------------- */}
                <div className=' lg:w-[50%] flex items-center justify-center lg:mx-8 sm:w-full sm:mx-4'>
                    <Image width={200} height={200} src={acmimage3} alt="Image1" className='rounded-2xl w-[550px] m-auto shadow-slate-700 shadow-lg' />
                </div>
            </div>

        </div >
    )
}

export default Contents