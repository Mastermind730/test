import React from "react";
import Image from "next/image";
import { LayoutGrid } from "@/components/Grid";
import { LayoutGrid1 } from "@/components/grid1";


const Cards = [
    {
        event: " Alumni Interaction",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image104.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image105.png",
            },
        
            {
                id: 3,
        
                thumbnail: "/photo/image106.png",
            },
        ]
    },
    {
        event: " CESA Podcast 2.0",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image103.png",
            },
        
        ]
    },
    {
        event: " Eminent Speaker Program: Generative AI: Dr. Rahul Kulkarni",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image101.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image102.png",
            },
        
        ]
    }, 
    {
        event: " Web Development Workshop",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image97.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image98.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image99.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image100.png",
            },
        ]
    }, {
        event: "AI/ML Workshop",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image93.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image94.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image95.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image96.png",
            },
        ]
    }, {
        event: "  CESA Induction 2.0",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image89.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image90.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image91.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image92.png",
            },
        ]
    }, {
        event: " Eminent Speaker Program : DR. Sachin Lodha",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image83.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image84.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image85.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image86.png",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image87.png",
            },
            {
                id: 6,
        
                thumbnail: "/photo/image88.png",
            },
        ]
    }, {
        event: "  Query Quest",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image79.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image80.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image81.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image82.png",
            },
        ]
    }, {
        event: "  Marathi Rajbhasha Din",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image71.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image72.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image73.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image74.png",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image75.png",
            },
            {
                id: 6,
        
                thumbnail: "/photo/image76.png",
            },
            {
                id: 7,
        
                thumbnail: "/photo/image77.png",
            },
            {
                id: 8,
        
                thumbnail: "/photo/image78.png",
            },
        ]
    }, {
        event: " Semiconductor Chips:viksit Bharat Session",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image67.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image68.png",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image69.png",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image70.png",
            },
        ]
    }, {
        event: "Collinators",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image65.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image66.png",
            },
        ]
    }, {
        event: "  Eminent Speaker Program : DR. Prashant Nair",
        photos:[
            {
                id: 1,
                thumbnail: "/photo/DSCF0337.JPG",
            },
            {
                id: 2,
        
                thumbnail: "/photo/DSCF0360.JPG",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/DSCF0376.JPG",
            },
            {
                id: 4,
        
                thumbnail: "/photo/DSCF0345.JPG",
            },
            {
                id: 5,
        
                thumbnail: "/photo/DSCF0346.png",
            },
        ]
    }, {
        event: "  PCCOE Champions",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image1.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image2.jpg",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/image3.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image4.jpg",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image5.jpg",
            },
        ]
    }, {
        event: "  Hour of Code",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image6.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image7.jpg",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/image8.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image9.jpg",
            },
        
        ]
    }, {
        event: "  World Environment Day",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image10.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image11.jpg",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/image12.jpg",
            },
        ]
    }, {
        event: "  Hactoberfest",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image13.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image14.jpg",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/image15.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image16.jpg",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image17.jpg",
            },
            {
                id: 6,
        
                thumbnail: "/photo/image18.jpg",
            },
            {
                id: 7,
        
                thumbnail: "/photo/image19.jpg",
            },
        ]
    }, {
        event: "     ROADMAP TO GSOC 2024 BY MR.RAHUL KULKARNI",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image20.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image21.jpg",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/image22.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image23.jpg",
            },
        ]
    }, {
        event: " ICPC Awareness Sessions",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image24.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image25.jpg",
            },
            {
                id: 3,
        
        
                thumbnail: "/photo/image26.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image27.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image28.jpg",
            },
        ]
    }, {
        event: " Coders Royale",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image29.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image30.jpg",
            },
        ]
    }, {
        event: "Technical Tuesday",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image31.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image32.jpg",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image33.jpg",
            },
        
        ]
    }, {
        event: " ACM Turing Award Winners Biography Session",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image34.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image35.jpg",
            },
            {
                id: 1,
        
                thumbnail: "/photo/image36.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image37.jpg",
            },
        ]
    },

    {
        event: "        SY Recruitment",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image38.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image39.jpg",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image40.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image41.jpg",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image42.jpg",
            },
            {
                id: 6,
        
                thumbnail: "/photo/image43.jpg",
            },
        
        ]
    },{
        event: " Eminent Speaker Program : DR. Navin Kabra",
        photos: [
            {
                id: 1,
        
                thumbnail: "/photo/image44.png",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image45.jpg",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image46.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image47.jpg",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image48.jpg",
            },
        ]
    },
    {
        event: " EXPERT SESSION BY - PROF. SUKHENDU DAS",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image49.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image50.jpg",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image51.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image52.jpg",
            },
        
        ]
    },{
        event: " CESA Induction",
        photos:[
            {
                id: 1,
        
                thumbnail: "/photo/image54.jpg",
            },
            {
                id: 2,
        
                thumbnail: "/photo/image55.jpg",
            },
            {
                id: 3,
        
                thumbnail: "/photo/image56.jpg",
            },
            {
                id: 4,
        
                thumbnail: "/photo/image57.png",
            },
            {
                id: 5,
        
                thumbnail: "/photo/image58.jpg",
            },
            {
                id: 6,
        
                thumbnail: "/photo/image59.jpg",
            },
            {
                id: 7,
        
                thumbnail: "/photo/image60.jpg",
            },
            {
                id: 8,
        
                thumbnail: "/photo/image61.jpg",
            },
            {
                id: 9,
        
                thumbnail: "/photo/image62.jpg",
            },
            {
                id: 10,
        
                thumbnail: "/photo/image63.jpg",
            },
            {
                id: 11,
        
                thumbnail: "/photo/image64.jpg",
            },
        
        ]
    },


]
    



const card = {
    event: "Alumni Interaction",
    photos: [
      {
        id: 1,
        thumbnail: "/photo/image104.png",
      },
      {
        id: 2,
        thumbnail: "/photo/image105.png",
      },
      {
        id: 3,
        thumbnail: "/photo/image106.png",
      },
    //   {
    //     id: 4,

    //     thumbnail: "/photo/image63.jpg",
    // }
    
    ],
  };




const Page = () => {
    return (
        <>
            <div className="w-full md:h-[300px] bg-gradient-to-r rounded-sm from-blue-600 to-blue-200 shadow-lg shadow-blue-500 flex flex-col md:flex-row justify-between items-center p-4">
                <div className="text-white text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-semibold mt-15">Glimpses Of PCCOE ACM Student Chapter Activities</h1>
                    {/* <h1 className="text-4xl md:text-6xl font-bold"></h1> */}
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
                        height={350}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div>
                <h1 className="text-center font-bold text-5xl my-10 text-black">
                    Events
                </h1>


                
    

                {/* Map through the Cards array and render LayoutGrid for each card */}
        <div className="grid gap-10 p-5">
          {/* {Cards.map((card, index) => (
            <LayoutGrid1 key={index} card={card} />
          ))} */}
          <LayoutGrid1 card={card}/>
        </div>

            




              


            </div>
        </>
    );
};

export default Page;
