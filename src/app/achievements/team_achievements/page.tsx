import Image from "next/image";
import Link from "next/link";
import team from "@/assets/team.png"

const TeamAchievementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Achievements</title>

      {/* Achievements Section */}
      <section className="container bg-gradient-to-b from-black via-gray-800 to-black mx-auto px-4 py-16">
        {/* Home Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="home-img w-full lg:w-1/2">
            <Image
              src={team}
              alt="Team"
              className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
              width={600}
              height={400}
              // unoptimized={true}
            />
          </div>
          <div className="home-content text-center lg:text-left">
            <h2 className="text-5xl font-extrabold text-indigo-500 mb-6">
              Team Achievements
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              At PCCOE ACM Student Chapter, we take pride in the accomplishments
              of our students who continually strive for excellence. Our members
              have demonstrated exceptional technical proficiency through active
              participation in workshops, lectures, and events. Their
              achievements reflect the dedication and passion they bring to the
              field, setting a benchmark for continuous growth and success.
            </p>
          </div>
        </section>

        {/* Achievements Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column Achievements */}
          <div className="achievements-left space-y-8">
            {/* <div className="achievements-box p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Image
                src="https://via.placeholder.com/400x250"
                alt="Achievement 1"
                className="rounded-lg w-full h-72 object-cover mb-6"
                width={400}
                height={350}
              />
              <div className="year text-xl font-semibold text-indigo-500 mb-4 flex items-center">
                <i className="bx bxs-calendar text-indigo-500 mr-2" />
                Year 2023
              </div>
              <p className="text-gray-300">
                ACM India Student Chapter Earns Prestigious Award for
                Outstanding Activities!
              </p>
            </div> */}

            {/* <div className="achievements-box p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Image
                src="https://via.placeholder.com/400x250"
                alt="Achievement 2"
                className="rounded-lg w-full h-64 object-cover mb-6"
                width={400}
                height={250}
              />
              <div className="year text-xl font-semibold text-indigo-500 mb-4 flex items-center">
                <i className="bx bxs-calendar text-indigo-500 mr-2" />
                Year 2021
              </div>
              <p className="text-gray-300">
                Our ACM India Student Chapter takes center stage as Runner-Ups
                at the prestigious ACM India Awards for Best Student Chapter.
              </p>
            </div> */}

            <div className="achievements-box p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Image
                src={"/awards/2018_Runnerup_Frame.jpeg"}
                alt="Achievement 3"
                className="rounded-lg w-full h-64 object-cover mb-6"
                width={400}
                height={250}
              />
              <div className="year text-xl font-semibold text-indigo-500 mb-4 flex items-center">
                <i className="bx bxs-calendar text-indigo-500 mr-2" />
                Year 2018
              </div>
              <p className="text-gray-300">
                Runner-Ups at the prestigious ACM India Awards for Best Student
                Chapter.
              </p>
            </div>
          </div>

          {/* Right Column Achievements */}
          <div className="achievements-right space-y-8">
            <div className="achievements-box p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Image
                src={"/awards/Best_Community_Service.jpeg"}
                alt="Achievement 4"
                className="rounded-lg w-full h-80 object-cover mb-6"
                width={400}
                height={450}
              />
              <div className="year text-xl font-semibold text-indigo-500 mb-4 flex items-center">
                <i className="bx bxs-calendar text-indigo-500 mr-2" />
                Year 2022
              </div>
              <p className="text-gray-300">
                ACM India Student Chapter Honored with Award for Exceptional
                Community Service!
              </p>
            </div>

            <div className="achievements-box p-8 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Image
                src={"/awards/2020_Runnerup_Gold.jpeg"}
                alt="Achievement 5"
                className="rounded-lg w-full h-64 object-cover mb-6"
                width={400}
                height={250}
              />
              <div className="year text-xl font-semibold text-indigo-500 mb-4 flex items-center">
                <i className="bx bxs-calendar text-indigo-500 mr-2" />
                Year 2020
              </div>
              <p className="text-gray-300">
                ACM India Student Chapter: Runner-Up for Best Student Chapter
                and Excellence Award for Outstanding Community Service!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamAchievementsPage;
