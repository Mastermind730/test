// Import necessary modules and components
"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./ss.css";
const profiles = [
  {
    imagePath: "/photo/uday_khedkar.jpg",
    name: "Dr. Uday Khedker",
    college: "IIT Bombay",
  },
  {
    imagePath: "/photo/jyoti_vedurda.png",
    name: "Dr. Jyoti Vedurada",
    college: "IIT Hyderabad",
  },
  {
    imagePath: "/photo/manas_thakur.jpeg",
    name: "Dr. Manas Thakur",
    college: "IIT Bombay",
  },
  {
    imagePath: "/photo/girish_bharambe.jpg",
    name: "Dr.Girish Bharambe",
    college: "NVIDIA",
  },
  {
    imagePath: "/photo/ramana.jpg",
    name: "Dr. Ramana Radhakrishnan",
    college: "NVIDIA",
  },
  {
    imagePath: "/photo/uday_reddy.jpg",
    name: "Dr. Uday Reddy",
    college: "IISC Banglore",
  },
  // {
  //   imagePath: "/",
  //   name: "Dr. Swati Jaiswal",
  //   college: "University of Example",
  // },
  
];
interface ProfileCardProps {
  imagePath: string;
  name: string;
  college: string;
}
interface OrganizersProfileCardProps {
  imagePath: string;
  name: string;
  department?: string;
  profession?: string;
  email?: string;
}
const ProfileCard: React.FC<ProfileCardProps> = ({
  imagePath,
  name,
  college,
}) => (
  <div className="flex flex-col card items-center w-[400px] p-4 border rounded-lg shadow-md bg-white m-2">
    <Image
      src={imagePath}
      alt={name}
      className=" rounded-full"
      width={150}
      height={150}
    />
    <h2 className="mt-2 text-xl font-semibold">{name}</h2>
    <p className="text-white">{college}</p>
    {/* <p className="text-gray-600">{email}</p> */}
  </div>
);
const OrganizersProfileCard: React.FC<OrganizersProfileCardProps> = ({
  imagePath,
  name,
  department,
  profession,
  email,
}) => (
  <div className="flex card flex-col w-[280px] items-center justify-center p-4 border rounded-lg shadow-md bg-white m-2 ">
    <Image
      src={imagePath}
      alt={name}
      className="w-[120px] h-[120px] rounded-full"
      width={150}
      height={150}
    />
    <h2 className="mt-2 text-xl font-semibold my-1">{name}</h2>
    <p className="text-white my-1">{profession}</p>
    <p className="text-white my-1">{department}</p>
    <p className="text-white my-1">{email}</p>
  </div>
);

const ProfileList = () => (
  <div className="flex flex-wrap justify-center">
    {profiles.map((profile, index) => (
      <ProfileCard
        key={index}
        imagePath={profile.imagePath}
        name={profile.name}
        college={profile.college}
      />
    ))}
  </div>
);
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleAccordion7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggleAccordion8 = () => {
    setIsOpen8(!isOpen8);
  };

  return (
    
    <div className="bg-gradient-to-b from-black via-gray-800 to-black text-white ">
    <div className="bg-gradient-to-b from-black via-gray-800 to-black text-white ">
      <div className="flex flex-col  items-center justify-center  ">
        <h1 className="text-center font-semibold my-3 text-4xl">
          ACM INDIA SUMMER SCHOOL
        </h1>
        <h1 className="text-center font-semibold my-3 text-4xl">ON</h1>
        <h1 className="text-center font-semibold my-3 text-4xl">
          COMPILERS FOR AI/ML PROGRAMS
        </h1>
        <h3 className="font-medium">(For Women Only)</h3>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          alt="pccoelogo"
          src={"/images/pccoelogo.jpeg"}
          className="w-[180px] rounded-2xl h-[180px]"
          width={150}
          height={150}
        />
        <span>Hosted by </span>{" "}
        <span className="font-bold">
          {" "}
          Pimpri Chinchwad College of Engineering (PCCoE)
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          alt="nvidia_logo"
          className="w-[280px] rounded-2xl h-[280px]"
          src={"/images/nvidia1.png"}
          width={150}
          height={150}
        />
        <div className="flex items-center justify-center">
          <span className="mx-2">Sponsored by </span>{" "}
          <span className="font-bold"> NVIDIA</span>
        </div>
        <h1 className="text-center font-semibold my-8 text-3xl">
          17th June 2024 to 28th June 2024
        </h1>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg">
          <button
            onClick={toggleAccordion1}
            className="w-full px-4 py-2 text-left bg-gray-600 rounded-t-lg focus:outline-none"
          >
            <span className="font-semibold  text-xl">
              About ACM India Summer School
            </span>
          </button>
          {isOpen && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3">
                About ACM India Summer School
              </h1>
              <div className="px-4 py-2  border-t">
                <p className="my-2 p-4 ">
                  ACM India summer schools offer self-motivated students
                  in-depth knowledge and exposure to research in current,
                  advanced technology areas. Each of the 6 schools in this
                  stellar line up covers academic and applied research in the
                  technology topic, and is taught by the best-in-class experts
                  from academia and industry.
                </p>
                <p className="my-2 p-4 ">
                  Each day comprises lectures as well as tutorial sessions with
                  hands-on problem solving experience. Toward the end of the
                  school, there will be a session focused on career options in
                  the area covered by the school. Top performing students in
                  these schools may earn opportunities for internship in
                  industry and will be invited to an all-expense-paid trip to
                  the ACM India ARCS Symposium and ACM India Annual Event in
                  February 2025.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg">
          <button
            onClick={toggleAccordion2}
            className="w-full px-4 py-2 text-left bg-gray-600 rounded-t-lg focus:outline-none"
          >
            <span className="font-semibold  text-xl">Description</span>
          </button>
          {isOpen2 && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3">
                Description
              </h1>
              <div className="px-4 py-2  border-t">
                <p className="my-2 p-4 ">
                  Compilers and systems software play a crucial role in computer
                  science by translating software between higher level languages
                  and the silicon that runs the applications. They play an
                  important role in exploiting the modern hardware for AI/ML
                  workloads. Our school aims to cover how compilers help unleash
                  the potential of hardware accelerating the applications of
                  today and the future.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg">
          <button
            onClick={toggleAccordion3}
            className="w-full px-4 py-2 text-left bg-gray-600 rounded-t-lg focus:outline-none"
          >
            <span className="font-semibold text-xl">List Of Subtopics</span>
          </button>
          {isOpen3 && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3">
                List Of Subtopics
              </h1>
              <div className="px-4 py-2  border-t">
                <ul className="list-disc pl-6">
                  <li className="">
                    Compiler Basics
                    <ul className="list-inside list-disc pl-4 ">
                      <li className="">
                        Scanning,Parsing,Semantic Analysis,Code Generation
                      </li>
                      <li className="">
                        Data flow analysis:Optimisations like dead code
                        elimination
                      </li>
                    </ul>
                  </li>
                  <li className="">
                  Managing Runtime
                    <ul className="list-inside list-disc pl-4">
                    <li className="">
                    Propogating compile time information to runtime</li>
                    </ul>
                  </li>
                  <li className="">
                  Optimizations in Compilers in AI/ML
                    <ul className="list-inside list-disc pl-4">
                    <li className="">
                    DSLs for AI/ML programs</li>
                    <li className="">
                    Optimizing techniques for AI/ML programs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg">
          <button
            onClick={toggleAccordion4}
            className="w-full px-4 py-2 text-left bg-gray-600 rounded-t-lg focus:outline-none"
          >
            <span className="font-semibold text-xl">List Of Speakers</span>
          </button>
          {isOpen4 && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3 text-white">
                List Of Speakers
              </h1>
              <div className="px-4 py-2  border-t">
                <ProfileList />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg">
          <button
            onClick={toggleAccordion5}
            className="w-full px-4 py-2 text-left bg-gray-600 rounded-t-lg focus:outline-none"
          >
            <span className="font-semibold  text-xl">Organizing Team</span>
          </button>
          {isOpen5 && (
            <>
              <h1 className="text-center font-semibold text-white  text-3xl my-3">
                Organizing Team
              </h1>
              <div className="px-4 py-2  border-t">
                <h1 className="text-center font-semibold text-3xl">
                  Academic Coordinators
                </h1>
                <div className="flex items-center justify-center">
                <OrganizersProfileCard
                  name="Dr. Uday Khetkar"
                  profession="Professor"
                  department="Department of Computer Science & Engineering,IIT Bombay"
                  imagePath="/photo/uday_khedkar.jpg"
                  email="uday@cse.iitb.ac.in"
                />
                </div>
                <div>
                  <h1 className="text-center font-semibold text-3xl my-2">
                    Local Coordinators
                  </h1>
                  <div className="flex items-center justify-center">
                    <OrganizersProfileCard
                      name="Dr. Rajeshwari Kannan"
                      profession="Dean of Academics,PCCOE"
                      department="Computer Engineering"
                      imagePath="/photo/rajeshwary_kanan.jpg"
                      email="kannan.rajewswari@pccoepune.org"
                    />
                    <OrganizersProfileCard
                      name="Prof. Rahul Pitale"
                      profession="PCCOE ACM  Faculty Sponsor"
                      department="Computer Engineering"
                      imagePath="/photo/rahul_pitale.jpg"
                      email="rahul.pitale@pccoepune.org"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-center font-semibold text-3xl my-2">
                    Overall Coordinators
                  </h1>
                  <div className="flex items-center justify-center">
                    <OrganizersProfileCard
                      name="Prof. Kapil Tajne"
                      profession=" Assistant Professor"
                      department="Computer Engineering,PCCOE"
                      imagePath="/photo/kapil_tajane.jpg"
                      email="kapil.tajane@pccoepune.org"
                    />
                    <OrganizersProfileCard
                      name="Dr. Aparna Joshi"
                      profession="Assistant Professor"
                      department="Computer Engineering,PCCOE"
                      imagePath="/photo/aprna_joshi.png"
                      email="aparna.joshi@pccoepune.org"
                    />
                  </div>
                  <div>
                    <h1 className="text-center font-semibold text-3xl my-2">
                      Student Coordinators
                    </h1>
                    <div className="flex items-center flex-wrap justify-evenly">
                      <OrganizersProfileCard
                        name="Prajwal Lonari"
                        imagePath="/photo/prajwal_lonari.jpg"
                        email="prajwal.lonari21@pccoepune.org"
                        
                      />
                      <OrganizersProfileCard
                         name="Lubdha Shirode"
                         imagePath="/photo/lubdha_shirode.jpg"
                         email="lubdha.shirode22@pccoepune.org"
                         
                      />
                      <OrganizersProfileCard
                         name="Sejal Rokade"
                         imagePath="/photo/sejal_rokade.jpg"
                         email="sejal.rokade22@pccoepune.org"
                         
                      />
                      <OrganizersProfileCard
                         name="Vishakha Lalwani"
                         imagePath="/photo/sourav_narvekar.png"
                         email="vishakha.lalwani22@pccoepune.org"
                         
                      />
                      <OrganizersProfileCard
                         name="Sourav Narvekar"
                         imagePath="/photo/sourav_narvekar.jpg"
                         email="sourav.narvekar22@pccoepune.org"
                         
                      />
                    
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg shadow-lg">
          <button
            onClick={toggleAccordion6}
            className="w-full px-4 py-2 text-left bg-gray-600 hover:bg-gray-500 rounded-t-lg focus:outline-none transition-colors duration-200"
          >
            <span className="font-semibold text-xl">Schedule</span>
          </button>
          {isOpen6 && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3">
                Schedule
              </h1>
              <div className="px-4 py-2  border-t">
  <div>
    <div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th rowSpan={2} className="border px-4 py-2 ">Date</th>
                <th rowSpan={2} className="border px-4 py-2 ">Day</th>
                <th colSpan={2} className="border px-4 py-2 ">
                  Morning Session
                  <br />
                  9:30 to 12:45 (with a break)
                </th>
                <th colSpan={2} className="border px-4 py-2 ">
                  Afternoon Session
                  <br />2 to 5:15 (with a break)
                </th>
              </tr>
              <tr>
                <th className="border px-4 py-2 ">Topics</th>
                <th className="border px-4 py-2 ">Speakers</th>
                <th className="border px-4 py-2 ">Topics</th>
                <th className="border px-4 py-2 ">To be handled by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">17 June 2024</td>
                <td className="border px-4 py-2">Monday</td>
                <td className="border px-4 py-2">
                  Introduction (of the school) and logistics,
                  Introduction to compilers, interpreters, IRs. Two
                  journeys: source to assembly and assembly to
                  execution
                </td>
                <td className="border px-4 py-2">
                  Uday Khedker, Abhijat Vichare
                </td>
                <td className="border px-4 py-2">
                  Demo of the base code, examining IRs. Introduction
                  to lex, lex script for the base code. Extending
                  the scanner of the base as per the plan suggested
                  in the language document.
                </td>
                <td className="border px-4 py-2">
                  Uday Khedker, TAs
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">18 June 2024</td>
                <td className="border px-4 py-2">Tuesday</td>
                <td className="border px-4 py-2">
                  Introduction to shift-reduce parsing and yacc,
                  explaining the base code
                </td>
                <td className="border px-4 py-2">Uday Khedker</td>
                <td className="border px-4 py-2">
                  Extending the base to the reference implementation
                  as per the plan suggested in the document
                </td>
                <td className="border px-4 py-2">
                  Uday Khedker, TAs
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">19 June 2024</td>
                <td className="border px-4 py-2">Wednesday</td>
                <td className="border px-4 py-2">
                  Scanning (tutorial as needed)
                </td>
                <td className="border px-4 py-2">Manas Thakur</td>
                <td className="border px-4 py-2">
                  Tutorials as needed, Extending the base to the
                  reference implementation as per the plan suggested
                  in the document
                </td>
                <td className="border px-4 py-2">TAs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">20 June 2024</td>
                <td className="border px-4 py-2">Thursday</td>
                <td className="border px-4 py-2">
                  Parsing (tutorial as needed)
                </td>
                <td className="border px-4 py-2">
                  Jyothi Vedurada
                </td>
                <td className="border px-4 py-2">
                  Tutorials as needed, Extending the base to the
                  reference implementation as per the plan suggested
                  in the document
                </td>
                <td className="border px-4 py-2">TAs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">21 June 2024</td>
                <td className="border px-4 py-2">Friday</td>
                <td className="border px-4 py-2">
                  Semantic analysis + IR AST generation
                </td>
                <td className="border px-4 py-2">
                  Jyothi Vedurada
                </td>
                <td className="border px-4 py-2">
                  Tutorials as needed, Extending the base to the
                  reference implementation as per the plan suggested
                  in the document. A demo of compiler explorer (30
                  minutes?)
                </td>
                <td className="border px-4 py-2">
                  TAs, Dhruv Chawla
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">22 June 2024</td>
                <td className="border px-4 py-2">Saturday</td>
                <td className="border px-4 py-2">
                  Translating Function calls, activation record
                  support
                </td>
                <td className="border px-4 py-2">Swati Jaiswal</td>
                <td className="border px-4 py-2">
                  Tutorials as needed, Examining IRs of GCC (30
                  minutes?). Examining LLVM IR (30 minutes?)
                </td>
                <td className="border px-4 py-2">
                  Prathmesh (GCC), Supriya (LLVM)
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">23 June 2024</td>
                <td className="border px-4 py-2" colSpan={4}>
                  Day off
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">24 June 2024</td>
                <td className="border px-4 py-2">Monday</td>
                <td className="border px-4 py-2">
                  Execution Environments
                </td>
                <td className="border px-4 py-2">
                  Girish Bharambe
                </td>
                <td className="border px-4 py-2">Labs</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">25 June 2024</td>
                <td className="border px-4 py-2">Tuesday</td>
                <td className="border px-4 py-2">
                  Execution Environments
                </td>
                <td className="border px-4 py-2">
                  Girish Bharambe
                </td>
                <td className="border px-4 py-2">Labs</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">26 June 2024</td>
                <td className="border px-4 py-2">Wednesday</td>
                <td className="border px-4 py-2">
                  Visit to NVIDIA
                </td>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">
                  Visit to NVIDIA / Catch up Time for assignments
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">27 June 2024</td>
                <td className="border px-4 py-2">Thursday</td>
                <td className="border px-4 py-2">
                  MLIR, Polyhedral Analysis and Optimizations
                </td>
                <td className="border px-4 py-2">Uday Reddy</td>
                <td className="border px-4 py-2">
                  MLIR, Polyhedral Analysis and Optimizations
                </td>
                <td className="border px-4 py-2">Uday Reddy</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">28 June 2024</td>
                <td className="border px-4 py-2">Friday</td>
                <td className="border px-4 py-2">
                  History of compilers, future challenges
                </td>
                <td className="border px-4 py-2">Uday Khedker</td>
                <td className="border px-4 py-2">
                  Closing Session, open house, feedback from
                  participants
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

            </>
          )}
        </div>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto my-3">
        <div className="border rounded-lg">
          <button
            onClick={toggleAccordion7}
            className="w-full px-4 py-2 text-left bg-gray-600 rounded-t-lg focus:outline-none"
          >
            <span className="font-semibold text-xl">
              FAQ&apos;s [Frequently Asked Questions]
            </span>
          </button>
          {isOpen7 && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3">
                FAQ&apos;s
              </h1>
              <div className="px-4 py-2  border-t">
                <ul className="list-disc pl-6">
                  <li>
                    <span className="font-bold">
                      Where will I be accommodated during the summer school?
                    </span>
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        Accomodation will be provided in campus girls hostel
                        rooms with three students sharing
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      What amenities will be provided in the hostel room?
                    </span>
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        Each room will be equipped with a bed,mattress,bucket
                        and mug
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      What should I bring for accomodation?
                    </span>
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        Please bring your own bedsheets,blankets,personal
                        hygiene items,and a small lock for the cupboard
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      Can you suggest some popular places to visit in Pune?
                    </span>
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        Sure! You can explore attractions listed on TripAdvisor
                        or visit famous places reccomended by Thrillophilia
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      What is the address of PCCoE campus?
                    </span>
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        Pimpri Chinchwad College Of Engineering is located at
                        Sector-26, Pradhikaran, Nigdi, near Akurdi Railway
                        Station, Pune - 411 044.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-4/5 md:w-2/3 mx-auto mt-3">
        <div className="border rounded-lg shadow-lg">
          <button
            onClick={toggleAccordion8}
            className="w-full px-4 py-2 text-left bg-gray-600 hover:bg-gray-500 rounded-t-lg focus:outline-none transition-colors duration-200"
          >
            <span className="font-semibold text-xl">Contact Us</span>
          </button>
          {isOpen8 && (
            <>
              <h1 className="text-center font-semibold text-3xl my-3">
                Contact Us
              </h1>
              <div className="px-6 py-4  border-t space-y-4">
                <p className="text-lg">
                  For any queries related to the summer school, feel free to
                  contact us at:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Prajwal Lonari:{" "}
                    <span className="text-blue-600 hover:underline">
                      9307175084
                    </span>
                  </li>
                  <li>
                    Lubdha Shirode:{" "}
                    <span className="text-blue-600 hover:underline">
                      8484936072
                    </span>
                  </li>
                  <li>
                    Sourav Narvekar:{" "}
                    <span className="text-blue-600 hover:underline">
                      9834144155
                    </span>
                  </li>
                </ol>
                <p className="text-lg">
                  Feel free to reach out if you have any further questions!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
