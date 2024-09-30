"use client";
import acmwLogo from "@/assets/acm-w-logo.png";
import banner from "@/assets/banner.jpg";
import codechefLogo from "@/assets/codechef-logo.svg";
import courseraLogo from "@/assets/coursera-logo.png";
import gsocLogo from "@/assets/gsoc-logo.png";
import hackerrankLogo from "@/assets/hackerrank-logo.png";
import icpcLogo from "@/assets/icpc-logo.ico";
import imadLogo from "@/assets/imad-logo.jpeg";
import interviewbitLogo from "@/assets/interviewbit-logo.png";
import leetcodeLogo from "@/assets/leetcode-logo.png";
import nptelLogo from "@/assets/nptel-logo.png";
import rewards from "@/assets/rewards.svg";
import sihLogo from "@/assets/sih-logo.png";
import udacityLogo from "@/assets/udacity-logo.png";
import Image, { StaticImageData } from "next/image";
import "./Home.css";
import React from "react";
import Card from "../components/h_Slider";
import "../components/h_Slider.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// import {Card as AwardsCard, CardBody, CardFooter, CardHeader, Divider, Link} from "@nextui-org/react";
// import { Card as AwardsCard, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";
import AwardsCard from "@/components/AwardCard";
import MainPageSlider from "@/components/MainPageSlider";
// import { MainPageSlider } from "@/components/MainPageSlider";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#opp-slider",
          start: "center center",
          end: "center top",
          scrub: 1,
          
        },
      })
      .to(".opp-slider-anim", {
        x: "-40%",
        duration: 0.4,
      });
  }, []);
  const opportunities = [
    { img: gsocLogo, title: "Google Summer of Code" },
    { img: icpcLogo, title: "ACM ICPC" },
    { img: acmwLogo, title: "Lady ADA Coding" },
    { img: nptelLogo, title: "NPTEL" },
    { img: sihLogo, title: "Smart India Hackathon" },
    { img: imadLogo, title: "IMAD" },
    { img: codechefLogo, title: "CodeChef" },
    { img: hackerrankLogo, title: "HackerRank" },
    { img: leetcodeLogo, title: "LeetCode" },
    { img: udacityLogo, title: "Udacity" },
    { img: courseraLogo, title: "Coursera" },
    { img: interviewbitLogo, title: "InterviewBit" },
  ];

  return (
    <div className="back">
      {/* <div className="bannerImg w-full h-2/3 overflow-hidden flex items-center">
        <Image src={banner} alt="banner" />
      </div> */}
      <MainPageSlider />
      {/* <section className="relative text-center py-16 bg-gradient-to-b from-black via-gray-800 to-black">
  <h1 className="font-bold text-[60px] md:text-[80px] text-white tracking-wide uppercase drop-shadow-lg">
    Awards & Achievements
  </h1>
</section> */}
      <section className="relative text-center py-16 bg-gradient-to-b from-black via-gray-800 to-black">
        <h1 className="font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-white tracking-wide uppercase drop-shadow-lg">
          Awards & Achievements
        </h1>

        <div className="flex flex-col md:flex-row p-5 sm:p-10 gap-5 sm:gap-8 md:gap-10 justify-center">
          <div className="flex-1 max-w-full md:max-w-[300px] lg:max-w-[400px] h-full flex flex-col">
            <AwardsCard
              footerText=""
              headerText="ACM India Student Chapter Awards for Outstanding Community Service 2022"
              bodyContent=""
              className="bg-gray-900 text-white rounded-lg shadow-lg flex flex-col h-full"
              imageSrc="/awards/Best_Community_Service.jpeg"
              imageClassName="h-[200px] w-full object-cover"
            />
          </div>

          <div className="flex-1 max-w-full md:max-w-[300px] lg:max-w-[400px] h-full flex flex-col">
            <AwardsCard
              footerText=""
              headerText="Runner-Ups at ACM India Awards for Best Student Chapter 2020 Runnerup"
              bodyContent=""
              className="bg-gray-900 text-white rounded-lg shadow-lg flex flex-col h-full"
              imageSrc="/awards/2020_Runnerup_Gold.jpeg"
              imageClassName="h-[200px] w-full object-cover"
            />
          </div>

          <div className="flex-1 max-w-full md:max-w-[300px] lg:max-w-[400px] h-full flex flex-col">
            <AwardsCard
              footerText=""
              headerText="Runner-Ups at ACM India Awards for Best Student Chapter 2018 Runnerup"
              bodyContent=""
              className="bg-gray-900 text-white rounded-lg shadow-lg flex flex-col h-full"
              imageSrc="/awards/2018_Runnerup_Frame.jpeg"
              imageClassName="h-[200px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* <div style={{alignContent:"center"}}></div> */}

      {/* <div className="cont">
        <Card />
      </div> */}

      {/* <section className="events flex flex-col lg:flex-row space-y-4 lg:space-y-0 py-4">
        <div className="upcoming lg:w-2/3 flex flex-col items-center">
          <EventCard title="Upcoming Events" Image={banner} />
        </div>
        <div className="recent lg:grow flex justify-center items-center">
          <div className="border rounded-lg p-4 shadow">
            <h2 className="text-xl">Past Events</h2>
            <hr className="mb-2 w-full" />
            <button
              className="rounded w-full px-2 py-1 text-white"
              style={{
                backgroundColor: "#05609d",
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </section> */}

      {/* <section className="initiatives">
        <h2>Our Initiatives</h2>
      </section> */}

      {/* <div>
        <div className="text-center mt-5 mb-8">
          <span className="font-semibold text-center md:text-6xl mt-20 mb-0 text-3xl inline-block border-b-4 border-blue-400">
            CESA FACULTY ADVISORS
          </span>
        </div> */}

      {/* <section className="flex flex-col items-center py-16 bg-gradient-to-b from-black via-gray-800 to-black">
  <h2 className="text-4xl mt-5 font-bold mb-8 text-white tracking-wide uppercase drop-shadow-lg">
    Opportunities For Students
  </h2>
  <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 p-4">
    <OpportunitiesCard img={gsocLogo} title="Google Summer of Code" />
    <OpportunitiesCard img={icpcLogo} title="ACM ICPC" />
    <OpportunitiesCard img={acmwLogo} title="Lady ADA Coding" />
    <OpportunitiesCard img={nptelLogo} title="NPTEL" />
    <OpportunitiesCard img={sihLogo} title="Smart India Hackathon" />
    <OpportunitiesCard img={imadLogo} title="IMAD" />
    <OpportunitiesCard img={codechefLogo} title="CodeChef" />
    <OpportunitiesCard img={hackerrankLogo} title="HackerRank" />
    <OpportunitiesCard img={leetcodeLogo} title="LeetCode" />
    <OpportunitiesCard img={udacityLogo} title="Udacity" />
    <OpportunitiesCard img={courseraLogo} title="Coursera" />
    <OpportunitiesCard img={interviewbitLogo} title="InterviewBit" />
  </div>
</section> */}

      <div className="relative py-16 bg-gradient-to-b from-black via-gray-800 to-black text-white">
        <div className="text-center mt-5 mb-4">
          <span className="font-semibold md:text-6xl text-3xl inline-block border-b-4 border-blue-400">
            CESA FACULTY ADVISORS
          </span>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col justify-around items-center md:flex-row gap-4 p-3 -mx-2 overflow-x-auto">
            {[
              {
                name: "Prof. Dr. Sonali D Patil",
                title: "HOD Computer Department",
                img: "/images/hod.jpg",
                description:
                  "Dear Reader, greetings to you! The Vision of the Department is to be a Premier Hub in Computer Engineering. The faculties here exhibit good expertise in their respective domains to train the students according to the current market scenario and of course in the pandemic situations too!",
              },
              {
                name: "Prof. Rahul Pitale",
                title: "CESA Co-ordinator",
                img: "/images/rahul_pitale.jpg",
                description:
                  "Computer Engineering Student Association's shibboleth is “Association of students for students and by students” which amplifies students as major stakeholders wherein the student body contributes to the overall development of students personally and professionally.",
              },
              {
                name: "Prof. Kapil Tajane",
                title: "CESA Co-ordinator",
                img: "/images/kapil_tajane.jpg",
                description:
                  "Computer Engineering Student Association's shibboleth is “Association of students for students and by students” which amplifies students as major stakeholders wherein the student body contributes to the overall development of students personally and professionally.",
              },
            ].map((advisor, index) => (
              <div
                key={index}
                className="flex-none h-[500px] md:w-[450px] w-[80%] mx-2 "
              >
                <div className="p-4 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-95">
                  <div className="relative">
                    <Image
                      src={advisor.img}
                      alt=""
                      className="rounded-full border-4 border-white shadow-lg mx-auto"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold text-white">
                      {advisor.name}
                    </h2>
                    <h4 className="text-xl font-semibold text-gray-200">
                      {advisor.title}
                    </h4>
                    <p className="text-md mt-2 text-gray-300">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="opp-slider" className=" flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-2">
          Opportunities For Students
        </h2>
        {/* <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 p-4">
          <OpportunitiesCard img={gsocLogo} title="Google Summer of Code" />
          <OpportunitiesCard img={icpcLogo} title="ACM ICPC" />
          <OpportunitiesCard img={acmwLogo} title="Lady ADA Coding" />
          <OpportunitiesCard img={nptelLogo} title="NPTEL" />
          <OpportunitiesCard img={sihLogo} title="Smart India Hackathon" />
          <OpportunitiesCard img={imadLogo} title="IMAD" />
          <OpportunitiesCard img={codechefLogo} title="CodeChef" />
          <OpportunitiesCard img={hackerrankLogo} title="HackerRank" />
          <OpportunitiesCard img={leetcodeLogo} title="LeetCode" />
          <OpportunitiesCard img={udacityLogo} title="Udacity" />
          <OpportunitiesCard img={courseraLogo} title="Coursera" />
          <OpportunitiesCard img={interviewbitLogo} title="InterviewBit" />
        </div> */}
        <div className="opp-slider-anim mt-[2vw] translate-x-0 w-full flex gap-[3vw] px-[2vw]">
          {opportunities.map((item, index) => (
            <div
              className="opp-box px-[2vw] py-[1vw] flex flex-col items-center justify-center gap-[1vw]"
              key={index}
            >
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="Image description"
              />
              <h2 className="text-[1.2vw]">{item.title}</h2>
            </div>
          ))}
        </div>
      </section>
      {/* {/* <div></div> */}
      <hr />
    </div>
  );
}

// const OpportunitiesCard = ({
//   img,
//   title,
// }: {
//   img: StaticImageData;
//   title: string;
// }) => {
//   return (
// <div className="flex flex-col lg:flex-row items-center space-x-2 rounded-lg border border-blue-500 shadow p-3 lg:h-20 lg:w-72">
//       <Image src={img} alt="logo" width={48} height={48} className="rounded-lg" />
//       <h3 className="text-lg text-center lg:text-start text-blue-500">{title}</h3>
//     </div>
//   );
// };

const EventCard = ({
  title,
  img,
}: {
  title: string;
  img?: StaticImageData;
}) => {
  return (
    <div className="w-5/6 rounded-lg shadow p-4">
      <h2 className="text-3xl text-center">{title}</h2>
      <hr className="mb-2" />
      {img && <Image className="rounded-lg" src={img} alt="placeholderImg" />}
    </div>
  );
};
