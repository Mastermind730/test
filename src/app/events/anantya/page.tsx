"use client";
import { ParallaxScroll } from "@/components/parallax-scroll";

import Image from "next/image";
import { Tabs } from "@/components/tabs";
import React from "react";
import "./events.css";

const val_images = [
  "/images/DSCF1501.JPG",
  "/images/DSCF1511.JPG",
  "/images/DSCF1514.JPG",
  "/images/DSCF1516.JPG",
  "/images/DSCF1523.JPG",
  "/images/DSCF1561.JPG",
  "/images/DSCF1572.JPG",
  "/images/IMG_0509.JPG",
  "/images/IMG_0625.JPG",
  "/images/IMG_0632.JPG",
  "/images/IMG_0664.JPG",
  "/images/IMG_0675.JPG",
  "/images/IMG_0681.JPG",
  "/images/IMG_0682.JPG",
  "/images/IMG_0687.JPG",
  "/images/IMG_0702.JPG",
  "/images/IMG_0719.JPG",
  "/images/IMG_0721.JPG",
  "/images/IMG_0739.JPG",
  "/images/IMG_0760.JPG",
  "/images/IMG_0763.JPG",
  "/images/IMG_0777.JPG",
  "/images/IMG_0800.JPG",
  "/images/IMG20240321161513.jpg",
  "/images/IMG20240321164214.jpg",
];

const in_images = [
  "/photo/Screenshot 2024-06-24 120115.png",
  "/photo/Screenshot 2024-06-24 111057.png",
  "/photo/Screenshot 2024-06-24 110313.png",
  "/photo/Screenshot 2024-06-24 110545.png",
  "/photo/Screenshot 2024-06-24 110753.png",
  "/photo/Screenshot 2024-06-24 111135.png",
  "/photo/Screenshot 2024-06-24 111204.png",
  "/photo/Screenshot 2024-06-24 112300.png",
  "/photo/Screenshot 2024-06-24 120129.png",
  "/photo/Screenshot 2024-06-24 120141.png",
  "/photo/Screenshot 2024-06-24 120152.png",
  "/photo/Screenshot 2024-06-24 120245.png",
  "/photo/Screenshot 2024-06-24 120236.png",
  "/photo/Screenshot 2024-06-24 120226.png",
  "/photo/Screenshot 2024-06-24 120203.png",
  "/photo/Screenshot 2024-06-24 120152.png",
];

const event_images = [
  // "/photo/DSC_0047.JPG",
  "/photo/DSCF0715.JPG",
  "/photo/DSCF1261.JPG",
  "/photo/DSCF1273.JPG",
  "/photo/DSCF1275.JPG",
  "/photo/DSCF1281.JPG",
  "/photo/DSCF1289.JPG",
  "/photo/DSCF1335.JPG",
  "/photo/DSCF1426.JPG",
  "/photo/DSCF1431.JPG",
  "/photo/IMG_5174.JPG",
  "/photo/IMG_5183.JPG",
  "/photo/IMG_5223.JPG",
  "/photo/IMG_5259.JPG",
  "/photo/IMG_5401.JPG",
  "/photo/IMG_5407.JPG",
  "/photo/IMG_5412.JPG",
  "/photo/IMG_5415.JPG",
  "/photo/IMG_5606.JPG",
  "/photo/IMG_5615.JPG",
  "/photo/IMG_9819.JPG",
  "/photo/IMG_9828.JPG",
  "/photo/IMG_9878.JPG",
  "/photo/IMG_9918.JPG",
];

const tabs = [
  {
    title: "Inaugration",
    value: "Inaugration",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold shadow-xl shadow-blue-600 text-white bg-gradient-to-r from-blue-300 to-blue-600">
        <p className="text-black">Inaugration</p>
        <ParallaxScroll images={in_images} />
      </div>
    ),
  },
  {
    title: "Event",
    value: "Event",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl shadow-xl shadow-blue-600 font-bold text-white bg-gradient-to-r from-blue-300 to-blue-600">
        <p className="text-black">Event</p>
        <ParallaxScroll images={event_images} />
      </div>
    ),
  },
  {
    title: "Validactory",
    value: "Validactory",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl shadow-xl shadow-blue-600 font-bold text-white bg-gradient-to-r from-blue-300 to-blue-600">
        <p className="text-black">Validactory</p>
        <ParallaxScroll images={val_images} />
      </div>
    ),
  },
];

const EventsPage = () => {
  return (
    <>
      <div className="w-full md:h-[300px] bg-gradient-to-r rounded-sm from-blue-600 to-blue-200 shadow-lg shadow-blue-500 flex flex-col md:flex-row justify-between items-center p-4">
        <div className="text-white text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mt-15">Glimpses Of Anantya</h1>
          <p className="text-base md:text-lg p-2 md:p-5 my-2">
          &quot;Anantya&quot; is a flagship event of Computer Engineering department at PCCOE. 
          </p>
          <p className="text-base md:text-lg p-2 md:p-5 my-2">
            Discover the events that PCCOE ACM conducts and get to know our
            members that make the community&apos;s technical and creative growth
            possible.
          </p>
        </div>
        <div className="w-full md:w-[350px] h-[200px] md:h-[275px] flex items-center justify-center mt-5 md:mt-0">
          <Image
            src="/images/amc-pccoe-logo.png"
            alt="ACM PCCOE Logo"
            width={350}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="h-[50rem] md:h-[70rem] [perspective:1000px] relative b flex flex-col max-w-[85vw] mx-auto w-full items-start justify-start my-5">
        <h1 className="text-4xl text-left font-bold border-b-blue-500 my-6">Flashback of Anantya 2024</h1>
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default EventsPage;
