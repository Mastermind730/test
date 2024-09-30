"use client";
import "./team.css";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import DemoTeam from '../../../../public/images/DemoTeam.jpg';
import { teampeople } from "@/constants/page";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { CgMail } from "react-icons/cg";

const TeamPage = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-800 to-black relative">
      <div className="w-full h-[36vw] overflow-hidden relative rounded-br-[2vw] rounded-bl-[2vw]">
        <Image src={"/teamPhotos/team2.png"} alt="Team Background" layout="fill" objectFit="cover" style={{opacity:0.80 }}  />
        <div className="text-gray-200 opacity-95 absolute top-[2vw] left-[2vw]">
          <h1 className="uppercase text-[3vw] font-extrabold ">meet our team</h1>
          <h2 className="text-[1.3vw]">Together We Achieve More: A Collective Force Behind Every Success</h2>
        </div>
      </div>

      <div className="w-full items-center justify-center flex my-[2vw]">
        <h1 className="text-white text-[4vw]">Our Team</h1>
      </div>
      <div className="w-full h-full flex flex-wrap gap-[4vw] justify-evenly px-[1vw] pb-[2vw]">
        {teampeople.map((item, index) => {
          return (
            <div
              className="card-profile w-[20vw] h-[25vw] flex-col items-center gap-[1vw] justify-center flex rounded-xl bg-[#111827] cursor-pointer hover:border-[0.1vw] duration-[0.2s] py-[1vw]"
              key={index}
              onMouseEnter={() => { setHoverIndex(index) }}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="cardImg w-[12vw] h-[12vw] flex justify-center items-center overflow-hidden bg-blue-500 rounded-full">
                <Image alt="team_image" src={item.image} width={250} height={250} objectFit="center" draggable="false" style={{ transform: `scale(${1.2})`,pointerEvents:"none" }}></Image>
              </div>
              <div className="info w-full flex items-center justify-center flex-col">
                <h1 className="text-white text-[1.25vw] font-semibold py-[0.5vw] uppercase">{item.name}</h1>
                <h2 className="text-white text-[1.1vw] py-[0.5vw]">{item.position}</h2>
              </div>
              {hoverIndex === index ? (
                <div className="flex text-white text-[2vw] gap-[1vw] overflow-hidden">
                  <a href={`mailto:${item.gmail}22@pccoepune.org`} target="main" rel="noopener noreferrer" className="links">
                    <div className="border-[0.1vw] rounded-full p-[0.2vw]">
                      <CgMail />
                    </div>
                  </a>
                  <a href={item.proflink} target="main" rel="noopener noreferrer" className="links text-[1.7vw]">
                    <div className="border-[0.1vw] rounded-full p-[0.3vw]">
                      <FaLinkedin />
                    </div>
                  </a>
                </div>
              ) : (<div className="flex text-transparent text-[2vw] gap-[1vw] overflow-hidden">
                <a href="" target="main" rel="noopener noreferrer" className="links">
                  <div className="border-[0.1vw] border-transparent rounded-full p-[0.2vw]">
                    <CgMail />
                  </div>
                </a>
                <a href="" target="main" rel="noopener noreferrer" className="links text-[1.7vw]">
                  <div className="border-[0.1vw] border-transparent rounded-full p-[0.3vw]">
                    <FaLinkedin />
                  </div>
                </a>
              </div>)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
