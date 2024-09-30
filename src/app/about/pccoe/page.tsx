"use client";
import acmlogo from "@/assets/amc-pccoe-logo.png";
// import "animate.css";
// import "animate.css/animate.min.css";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import "react-vertical-timeline-component/style.min.css";
import "./about.css";
import ScrollAnimation from 'react-animate-on-scroll';
import useScrollTriggeredCountUp from "@/components/Counter";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const member_count = useScrollTriggeredCountUp(ref, 121);
  const local_count = useScrollTriggeredCountUp(ref, 1796);


  // creating respective arrays for chairpersons of each year
  
     const timelineData = [
      {
        img_path: "/teamPhotos/sourav.jpg",
        date: "2024-2025",

        name: 'Sourav Narvekar',
        title: "President",
        profile: 'https://www.linkedin.com/in/sourav-narvekar-a29778257/',
        gmail: 'sourav.narvekar22@pccoepune.org'
    }, {
      img_path: "/teamPhotos/hirve.jpg",
        date: "2024-2025",

        name: 'Sahil Hirve',
        title: "Vice President",
        profile: 'https://www.linkedin.com/in/sahil-hirve',
        gmail: 'sahil.hirve'
    },
    {
      img_path: "/teamPhotos/marke.JPG",
        date: "2024-2025",

        name: 'Aditya Marke',
        title: "Management Executive",
        profile: 'https://www.linkedin.com/in/adityamarke/',
        gmail: 'aditya.marke'
    },
  ];
  
  const timelineData1 = [
    {
      name: "Prathamesh Bacchav",
      title: "Chairperson",
      date: "2023-2024",
      img_path: "/images/2.png",
      profile:"https://www.linkedin.com/in/prathamesh-bachhav-282b11229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mahima Nair",
      title: "Vice Chairperson",
      date: "2023-2024",
      img_path: "/images/3.png",
      profile:"https://www.linkedin.com/in/mahima-nair-8995b823b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Prajwal Lonari",
      title: "Management Executive",
      date: "2023-2024",
      img_path: "/images/4.png",
      profile:"https://www.linkedin.com/in/prajwal-lonari-55932222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const timelineData2 = [
    {
      name: "Aditi Sambhare",
      title: "Chairperson",
      date: "2022-2023",
      img_path: "/images/AditiSambare.jpg",
      profile:"https://www.linkedin.com/in/aditi-jitendra-sambare-b53978209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sahil Shinde",
      title: "Vice Chairperson",
      date: "2022-2023",
      img_path: "/images/sahil.png",
      profile:"https://www.linkedin.com/in/thesahilshinde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Om Bidve",
      title: "Vice Chairperson",
      date: "2022-2023",
      img_path: "/images/OmBidve.jpg",
      profile:"https://www.linkedin.com/in/om-bidve-aa436a1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const timelineData3 = [
    {
      name: "Saumya Phadkar",
      title: "Chairperson",
      date: "2021-2022",
      img_path: "/images/SaumyaPhadkar.png",
      profile:"https://www.linkedin.com/in/saumya-phadkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Soham Kulkarni",
      title: "Vice Chairperson",
      date: "2021-2022",
      img_path: "/images/Soham Kulkarni.png",
      profile:"https://www.linkedin.com/in/soham01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Mrunali Padwal",
      title: "Vice Chairperson",
      date: "2021-2022",
      img_path: "/images/Mrunali_Padwal.png",
      profile:"https://www.linkedin.com/in/mrunali-padwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const timelineData4 = [
    {
      name: "Chinmay Joshi",
      title: "Chairperson",
      date: "2020-2021",
      img_path: "/images/Chinmay-Joshi.jpg",
      profile:"https://www.linkedin.com",
    },
    {
      name: "Rakshit Jha",
      title: "Vice Chairperson",
      date: "2020-2021",
      img_path: "/images/Rakshit_Jha.jpg",
      profile:"https://www.linkedin.com/in/rakshitjha/"
    },
    {
      name: "Anshu Shrivastava",
      title: "Vice Chairperson",
      date: "2020-2021",
      img_path: "/images/Anshu Srivastava.jpg",
      profile:"https://www.linkedin.com/in/anshu-srivastava0613?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const timelineData5 = [
    {
      name: "Varun Gadak",
      title: "Chairperson",
      date: "2019-2020",
      img_path: "/images/VarunGadde.jpg",
      profile:"https://www.linkedin.com/in/varun-gadde-9a136417b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sharvari Gaikwad",
      title: "Vice Chairperson",
      date: "2019-2020",
      img_path: "/images/SharvariGaikwad.jpg",
      profile:"https://www.linkedin.com/in/sharvarigaikwad5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
  ];
  const timelineData6 = [
    {
      name: "Jovian Anthony",
      title: "Chairperson",
      date: "2018-2019",
      img_path: "/images/jovian.jpg",
      profile:"https://www.linkedin.com/in/jovianjaison?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
      name: "Shubham Mandhare",
      title: "Vice Chairperson",
      date: "2018-2019",
      img_path: "/images/shubham.jpeg",
      profile:"https://www.linkedin.com/in/shubham-mandhare?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
  ];
  const timelineData7 = [
    {
      name: "Abhishek Gaikwad",
      title: "Chairperson",
      date: "2017-2018",
      img_path: "/images/abhishek g.jpg",
      profile:"https://www.linkedin.com",

    },
    {
      name: "Neha Waghchure",
      title: "Vice Chairperson",
      date: "2018-2019",
      img_path: "/images/neha.jpg",
      profile:"https://www.linkedin.com",

    },
  ];
  const timelineData8 = [
    {
      name: "Abdul Wasay",
      title: "Chairperson",
      date: "2016-2017",
      img_path: "/images/abdul.jpg",
      profile:"https://www.linkedin.com/in/wasaya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
      name: "Ankur Jangra",
      title: "Vice Chairperson",
      date: "2016-2017",
      img_path: "/images/ankur.jpg",
      profile:"https://www.linkedin.com/in/ankur-j-a1482a92?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
  ];
  const timelineData9 = [
    {
      name: "Sanchita Rao",
      title: "Chairperson",
      date: "2015-2016",
      img_path: "/images/sanchita.jpg",
      profile:"https://www.linkedin.com/in/sanchita-rao-51717aa3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
    {
      name: "Vishal Maurya",
      title: "Vice Chairperson",
      date: "2015-2016",
      img_path: "/images/vishal.jpg",
      profile:"https://www.linkedin.com/in/vishalmaurya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    },
  ];
  const timelineData10 = [
    {
      name: "Amrita Nair",
      title: "Chairperson",
      date: "2014-2015",
      img_path: "/images/amrita.jpg",
      profile:"https://www.linkedin.com",

    },
    {
      name: "Nikita Merani",
      title: "Vice Chairperson",
      date: "2014-2015",
      img_path: "/images/nikita.jpg",
      profile:"https://www.linkedin.com",

    },
  ];
  const timelineData11 = [
    {
      name: "Gopi Kapangunta",
      title: "Chairperson",
      date: "2013-2014",
      img_path: "/images/gopi.jpg",
      profile:"https://www.linkedin.com",

    },
    {
      name: "Reena Gandhi",
      title: "Vice Chairperson",
      date: "2013-2014",
      img_path: "/images/reena.jpg",
      profile:"https://www.linkedin.com",

    },
  ];
  const timelineData12 = [
    {
      name: "Dipesh Walte",
      title: "Chairperson",
      date: "2012-2013",
      img_path: "/images/dipesh.jpg",
      profile:"https://www.linkedin.com",

    },
    {
      name: "Aishwarya Chandrasekaran",
      title: "Vice Chairperson",
      date: "2012-2013",
      img_path: "/images/aishwarya.jpg",
      profile:"https://www.linkedin.com",

    },
  ];
  // making a single array to map it over and display over the screen
  const lead_data = [
    timelineData,
    timelineData1,
    timelineData2,
    timelineData3,
    timelineData4,
    timelineData5,
    timelineData6,
    timelineData7,
    timelineData8,
    timelineData9,
    timelineData10,
    timelineData11,
    timelineData12,
  ];
  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black text-white">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="h-3 border rounded-sm bg-blue-400" />
      <div className="flex flex-col items-center justify-around sm:flex-row">
        <div className="mb-8 w-full sm:w-1/2 lg:w-1/3">
          <Image
            src={acmlogo}
            width={300}
            height={300}
            alt="banner"
            className="mx-auto animate_animated animate_flipInX"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3 m-4 sm:m-12 p-8 bg-opacity-10 bg-blue-400 border rounded-md animate_animated animate_zoomInRight">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Us</h1>
            <h2 className="text-xl sm:text-2xl font-medium text-blue-700 mb-4">
              PCCOE ACM STUDENT CHAPTER(ACM)
            </h2>
            {/* <p className="text-sm sm:text-base lg:text-xl">
              Set up in 2012, the PCCOE ACM Student Chapter is one of the best
              Student Chapters in Pune. Year by year, the Chapter strives to
              increase the number of events and the participation of students.
              With the guidance of faculty sponsors and enthusiastic volunteers,
              the Chapter, now in its eighth year, is improving rapidly on all
              counts. With a dynamic team, it has become the most active Student
              Chapter in Pune. Various events are held throughout the year; the
              details can be found in the various sections of the website. We
              encourage students to excel in academic discipline as well as the
              bohemian. With an aim to be the best Student Chapter in the
              country, we are rapidly taking long strides to meet the goal.
            </p> */}
            <>
              <div className="mt-5 mb-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  Missions:
                </h2>
                <p className="text-xs sm:text-sm lg:text-base">
                  - Advance Art, Science, and Engineering of Computing <br />
                  - Foster Open Exchange of Information <br />
                  - Promote Highest Professional and Ethical Standards <br />
                  - Cultivate Technical Excellence <br />- Drive Education and
                  Technical Advancement
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  Vision:
                </h2>
                <p className="text-xs sm:text-sm lg:text-base">
                  - To be a Premier Hub in Computer Engineering <br />
                  - To ensure overall Development of Students <br />
                  - Adaptability to Current Market Scenario <br />
                  - Expertise-driven Training by Faculty <br />- To be an
                  Association of students for students and by students.
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
      
      


{/* mapping over the data to show the timeline  */}
<h1 className="text-4xl font-bold text-center mb-12">Chairpersons Timeline</h1>


<div className="row">
      <div className="col-md-12">
        <div className="main-timeline flex flex-col flex-5 flex-wrap transition-all duration-400 ease-in-out relative">

        {lead_data.map((timelineData, index) => (
  <div key={index}>
    <div>
    <ScrollAnimation duration={2} animatePreScroll={false} initiallyVisible={true}  animateIn="flipInY" animateOut="flipInX">

      <div className="timeline-icon"></div>
      <div data-aos="fade-up" className={`timeline-content${index % 2 === 0 ? '-right' : '-left'} timeline mx-20 `}>
        <span className="date animate_animated animate_fadeInUp">{timelineData[0].date}</span>
        <br />
        <br />
        <div className="">
          <div className="grid grid-col-2 grid-cols-2 grid-flow-row">
            {timelineData.map((timelinedata, innerIndex) => (
              <div key={innerIndex} className={`person m-5 ${innerIndex === 0 ? 'col-start-1 col-end-3' : 'flex align-center '}`}>
                <div className="profile-img">
                  <Image
                    width={100}
                    height={100}
                    src={timelinedata.img_path}
                    alt=""
                    className="profile-imgtag img-responsive"
                  />
                </div>
                <div className="person-content m-5">
                  <Link href={"https://in.linkedin.com/"}>
                    <FaLinkedin className="mx-auto text-2xl mb-2 hover:text-gray-600" />
                  </Link>
                  <h4 className="font-3xl text-center font-bold">{timelinedata.name}</h4>
                  <h5 className="font-2xl text-center font-semibold text-blue-700">{timelinedata.title}</h5>
                </div>

                {/* </ScrollAnimation> */}
              </div>
            ))}
          </div>
        </div>
      </div>
                    </ScrollAnimation>

    </div>

  </div>
))}

        </div>
      </div>
    </div>



 
      <h2 className="text-center font-bold text-2xl sm:text-3xl mt-20 border-b-2 pb-2">
        STATISTICS
      </h2>
      <div className="flex flex-wrap items-center justify-center -mx-4 mt-5 counters">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center mb-6">
          <span
            className="text-xl sm:text-4xl font-bold block"
            data-toggle="counter-up"
          >
            2012
          </span>
          <p className="text-sm sm:text-base">Founding Year</p>
        </div>
        <div ref={ref}className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center mb-6">
          <span 
            className="text-xl sm:text-4xl font-bold block"
            data-toggle="counter-up"
          >
            {/* <CountUp duration={5} className="counter" end={121} />+ */}
            {member_count}+
          </span>
          <p className="text-sm sm:text-base" >Professional Members</p>
        </div>
        <div ref={ref} className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center mb-6">
          <span
            className="text-xl sm:text-4xl font-bold block"
            data-toggle="counter-up"
          >
            {/* <CountUp duration={5} className="counter" end={1796} />+ */}
            {local_count}+
          </span>
          <p className="text-sm sm:text-base">Local Active Members</p>
        </div>
      </div>
   </div>
   </div>
  );
};

export default AboutPage;