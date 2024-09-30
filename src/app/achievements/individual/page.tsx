import Image from "next/image";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import student from "@/assets/student.jpg";

const AchievementsPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black text-white min-h-screen">
      {/* Achievements Section */}
      <section className="achievements  py-10" id="achievement">
        <section className="home bg-gradient-to-b from-indigo-600 to-blue-700 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="home-img md:w-1/3 w-full mb-6 md:mb-0">
            <Image src={student} alt="student" className="rounded-lg" />
          </div>
          <div className="home-content  md:w-2/3 w-full px-4">
          <h2 className="text-4xl font-bold mb-4">Students Achievements</h2>
            <p className="text-lg">
              The success of PCCOE ACM Student Chapter is a collective effort
              driven by a dynamic team dedicated to addressing present and future
              challenges. Our collaborative endeavors in organizing impactful
              workshops, insightful guest lectures, and engaging events have garnered
              recognition, marking our team&apos;s commitment to fostering a culture
              of technical proficiency and innovation within the community.
            </p>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Achievement Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="year mb-2 text-sm text-gray-400 flex items-center">
              <i className="bx bxs-calendar mr-2" />
              Year 2023
            </div>
            <Image src={img2} alt="Achievement" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Students Shine Bright: ACM Winter School Participants Secure Coveted Positions! 🌟
            </h3>
            <p>
              Congrats to students selected for <b>ACM Winter School 2023</b> at
              Ahmedabad University! Kudos to <b>Sakshi Kulkarni</b>, <b>Prajwal
              Lonari</b>, and others for their exceptional achievements.
            </p>
          </div>

          {/* Achievement Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="year mb-2 text-sm text-gray-400 flex items-center">
              <i className="bx bxs-calendar mr-2" />
              Year 2023
            </div>
            <Image src={img1} alt="Achievement" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              🚀 Jayanti Wajire Soars as Microsoft Learn Student Ambassador! 🌟
            </h3>
            <p>
              In a triumphant feat, <b>Jayanti Wajire</b> has been selected as a
              <b>Microsoft Learn Student Ambassador</b>, marking a thrilling milestone
              in their tech journey. Congratulations! 🎉👩‍💻
            </p>
          </div>

          {/* Achievement Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="year mb-2 text-sm text-gray-400 flex items-center">
              <i className="bx bxs-calendar mr-2" />
              Year 2023
            </div>
            <Image src={img6} alt="Achievement" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Triumph at ICPC Kanpur: Team 1 Code 3 Hangovers Soars!
            </h3>
            <p>
              Congratulations to <b>Team 1 Code 3 Hangovers</b> for securing a coveted
              spot at the ICPC Kanpur Regionals. Their dedication and teamwork are
              exemplary! 🏆👏
            </p>
          </div>

          {/* Achievement Card 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="year mb-2 text-sm text-gray-400 flex items-center">
              <i className="bx bxs-calendar mr-2" />
              Year 2023
            </div>
            <Image src={img3} alt="Achievement" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              IndoML 2023 Success: PCCOE Students Excel at IIT Bombay!
            </h3>
            <p>
              Congrats to <b>PCCOE students</b> for their selection in <b>IndoML 2023</b> at
              IIT Bombay. Best wishes for their journey! 🌟🎓
            </p>
          </div>

          {/* Achievement Card 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="year mb-2 text-sm text-gray-400 flex items-center">
              <i className="bx bxs-calendar mr-2" />
              Year 2023
            </div>
            <Image src={img5} alt="Achievement" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Team UPHAR: A Triumph in Smart India Hackathon 2023 Grand Finale
            </h3>
            <p>
              Congrats to <b>Team UPHAR</b> for reaching the <b>Smart India Hackathon 2023</b>
              Grand Finale. Their innovative problem-solving skills are commendable!
              🚀🎉
            </p>
          </div>

          {/* Achievement Card 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="year mb-2 text-sm text-gray-400 flex items-center">
              <i className="bx bxs-calendar mr-2" />
              Year 2023
            </div>
            <Image src={img4} alt="Achievement" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Innothon 2023 Grand Finale Illuminates KCG College of Technology
            </h3>
            <p>
              Grand success at <b>KCG College of Technology</b> for Innothon 2023.
              Congrats to standout participants for making it a memorable experience! 🌟🏆
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
