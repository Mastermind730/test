"use client";
import './MainPageSlider.css'; // Assuming style.css contains your CSS
import "../app/globals.css";
import Head from 'next/head';
import Script from 'next/script';
import React, { useRef, useEffect } from "react";
import Image from 'next/image';
// import "./Slider.css";

const Slider: React.FC = () => {
  return (
    <>
    <Head>
    <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Image Slider</title>
  {/* <link rel="stylesheet" href="style.css" /> */}
    </Head>
  <div className="slider">
  <div className="list">
  <div className="item">
      <Image
        src={"/teamPhotos/team2.png"}
        alt=""
        width={900}
        height={600}
      />
      <div className="content">
      <div className="title">Welcome To</div>
      <div className="type">PCCOE ACM Student Chapter</div>
        
      </div>
    </div>
  <div className="item">
      <Image
        src={"/teamPhotos/team1.png"}
        alt=""
        width={900}
        height={600}
      />
      <div className="content">
      <div className="title">Welcome To</div>
      <div className="type">PCCOE ACM Student Chapter</div>
        
      </div>
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-1.webp"
        alt=""
        width={900}
        height={600}
      />
      <div className="content">
        <div className="title">Welcome To</div>
        <div className="type">PCCOE ACM Student Chapter</div>
        {/* <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          temporibus quis eum consequuntur voluptate quae doloribus distinctio.
          Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi, aut.
        </div>
        <div className="button">
          <button>SEE MORE</button>
        </div> */}
      </div>
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-3.webp"
        alt=""
        width={900}
        height={600}
      />
      <div className="content">
      <div className="title">Welcome To</div>
      <div className="type">PCCOE ACM Student Chapter</div>
        
      </div>
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-4.webp"
        alt=""
        width={900}
        height={600}
      />
      <div className="content">
      <div className="title">Welcome To</div>
      <div className="type">PCCOE ACM Student Chapter</div>
        {/* <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          temporibus quis eum consequuntur voluptate quae doloribus distinctio.
          Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi, aut.
        </div>
        <div className="button">
          <button>SEE MORE</button>
        </div> */}
      </div>
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-2.webp"
        alt=""
        width={900}
        height={600}
      />
      <div className="content">
      <div className="title">Welcome To</div>
      <div className="type">PCCOE ACM Student Chapter</div>
        {/* <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          temporibus quis eum consequuntur voluptate quae doloribus distinctio.
          Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi, aut.
        </div>
        <div className="button">
          <button>SEE MORE</button>
        </div> */}
      </div>
    </div>
  </div>
  <div className="thumbnail">
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-1.webp"
        alt=""
        width={900}
        height={600}
      />
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-3.webp"
        alt=""
        width={900}
        height={600}
      />
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-4.webp"
        alt=""
        width={900}
        height={600}
      />
    </div>
    <div className="item">
      <Image
        src="http://pcet.org.in/images/slider/pcet-institutes-2.webp"
        alt=""
        width={900}
        height={600}
      />
    </div>
  </div>
  <div className="nextPrevArrows">
    <button className="prev"> &lt; </button>
    <button className="next"> &gt; </button>
  </div>
</div>

<Script src="app.js"></Script>

</>

  );
};

export default Slider;
