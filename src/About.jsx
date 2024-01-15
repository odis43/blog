import React from "react";
import Nav from "./Nav";
import blog from "./images/blogpage.png";
import chess from "./images/chess.png";
import old from "./images/oldport.png";
import cutscene from "./images/cut.jpeg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import resumeicon from "./images/resumeicon.png";
import { Link } from "react-router-dom";
import lazy from "./images/9.Laziness.png";
import uwaterloo from "./images/uwaterloo.png";

const About = () => {
  return (
    <div className="relative bg-white overflow-y-auto">
      <Nav />
      <div className="mt-18 sm:ml-24">
        <img className="w-60 sm:w-72" src={lazy} alt="" />
        <div className="font-poppins font-bold sm:text-8xl text-7xl ml-4">
          whomst!
        </div>
        <div className="ml-6 w-80 sm:mt-10 sm:w-1/2 text-base sm:text-lg font-medium mb-12">
          Hey! My name is Oditha Amarasinghe. I'm a third year student at the
          University of Waterloo studying Computer Science with a specialization
          is Business. I've loved minimalist design for as long as I can
          rememember and this blog was made with that vision in mind.
        </div>
        <div className="grid grid-cols-3 sm:w-72 sm:mt-3 mt-6 ml-4 mb-5">
          <Link target="_blank" to="https://github.com/odis43">
            <img
              className="h-10 w-10 hover:opacity-50"
              src={github}
              alt="GitHub"
            />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/oditha/">
            <img
              className="h-10 w-10 hover:opacity-50"
              src={linkedin}
              alt="Linkedin"
            />
          </Link>
          <Link to="" target="_blank">
            <img
              className="h-10 w-10 hover:opacity-50"
              src={resumeicon}
              alt="Resume"
            />
          </Link>
        </div>
        {/* {window.innerWidth < 640 ? (
          <div className="border-b-2 border-black mb-5"></div>
        ) : null} */}

        <div
          className={`font-extrabold text-6xl flex justify-center sm:justify-normal mt-10 mb-5 sm:mb-0`}
        >
          experiences
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical sm:mt-10 ml-3 sm:ml-0 w-[90%] sm:w-[100%]">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Jan 2024 - present</time>
            <div className="text-lg font-black">
              Interac - Technical Product Analyst
            </div>
            <div className="sm:w-96">Currently working here.</div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">May 2023 - Jan 2024</time>
            <div className="text-lg font-black">
              UW Blueprint - Fullstack Eng
            </div>
            <div className="sm:w-96">
              Developed a robust platform to facilitate streamlined operations
              for Algoma’s Children’s Aid Society, achieving enhanced efficiency
              through the migration of legacy spreadsheets and the
              implementation of advanced data organization features.
            </div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Jan 2023 - Apr 2023</time>
            <div className="text-lg font-black">
              HealthCare Systems R&A - ML Eng
            </div>
            <div className="sm:w-96">
              Engineered an interactive platform that utilizes a machine
              learning model trained to classify user movements. Various models
              were researched and tested with data derived from a brain computer
              interface.
            </div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Apr 2022 - Aug 2022</time>
            <div className="text-lg font-black">Manulife - Data Eng</div>
            <div className="sm:w-96">
              Effectively harnessed the Devo Platform to filter and refine
              extensive data logs, resulting in a notable 10% reduction in
              redundant metric alerts. Milestone project was the construction of
              an automation tool for seamless data transfer between AWS S3 and
              Azure Blob storage, ensuring the safety of thousands of archived
              data logs.
            </div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <div className={`sm:mt-10 sm:ml-24`}>
        <div
          className={`font-extrabold text-6xl flex justify-center sm:justify-normal sm:mt-10 mb-5 sm:mb-0`}
        >
          projects
        </div>
        <div className="carousel carousel-center max-w-[95%] p-4 space-x-4 bg-transparent rounded-box sm:mt-10 mb-10 shadow-none">
          <div className="carousel-item sm:w-100">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <img className="h-56 w-full" src={blog} alt="blog" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Personal Blog</h2>
                <p>
                  A minimalist site made to share my interests and goals. Makes
                  use of firebase realtime db to enable live updates to
                  album/film reviews (go to the "Reviews" page to check it out!)
                  without the need to re-publish the site into production.
                </p>
                <div className="grid grid-flow-col mb-4 mt-4">
                  <div class="badge badge-ghost">React js.</div>
                  <div class="badge badge-ghost">Tailwind</div>
                  <div class="badge badge-ghost">Firebase</div>
                </div>
                <div className="card-actions justify-end">
                  <Link target="_blank" to="https://github.com/odis43/blog">
                    <button className="btn btn-black">Check it out!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <img
                  className="h-56 w-full object-contain"
                  src={uwaterloo}
                  alt="blog"
                />
              </figure>
              <div className="card-body">
                <div className="columns-2">
                  <h2 className="card-title">UW NAV</h2>
                  <div class="badge badge bg-black text-white mt-[5px] text-xs">
                    in progress
                  </div>
                </div>
                <p>
                  An app that makes use of Dsjikstra's shortest path algorithm
                  to find the best route between classes on uWaterloo's campus
                </p>
                <div className="grid grid-flow-col mb-4 mt-4">
                  <div class="badge badge-ghost">Next js.</div>
                  <div class="badge badge-ghost">Tailwind</div>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    target="_blank"
                    to="https://github.com/odis43/CLI-chess"
                  >
                    <button className="btn btn-black">Check it out!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <img
                  className="h-56 w-full overflow-auto"
                  src={chess}
                  alt="blog"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CLI Chess</h2>
                <p>
                  Fully functional 2 player chess right in your terminal.
                  Employs relevent OOP practices and makes use of the
                  Observer/Notifier design pattern.
                </p>
                <div className="grid grid-flow-col mb-4 mt-4">
                  <div class="badge badge-ghost">C++</div>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    target="_blank"
                    to="https://github.com/odis43/CLI-chess"
                  >
                    <button className="btn btn-black">Check it out!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <img className="h-56 w-full" src={old} alt="blog" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Old portfolio</h2>
                <p>
                  An old design for my portfolio that was inspired by the
                  Spotify artist page and made use of Spotify's public API.
                </p>
                <div className="grid grid-flow-col mb-4 mt-4">
                  <div class="badge badge-ghost">React js</div>
                  <div class="badge badge-ghost">CSS</div>
                  <div class="badge badge-ghost">REST API</div>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    target="_blank"
                    to="https://odis43.github.io/Portfolio/"
                  >
                    <button className="btn btn-black">Check it out!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <img className="h-56 w-full" src={cutscene} alt="blog" />
              </figure>
              <div className="card-body">
                <div className="columns-2">
                  <h2 className="card-title">Cutscene</h2>
                  <div class="badge badge bg-black text-white mt-[5px] text-xs">
                    in progress
                  </div>
                </div>
                <p>
                  Built to be a true "Letterboxd" for gamers. The vision is for
                  the gaming community to rank, review and discuss their
                  favourite games.
                </p>
                <div className="grid grid-flow-col mb-4 mt-4">
                  <div class="badge badge-ghost">React js</div>
                  <div class="badge badge-ghost">Tailwind</div>
                  <div class="badge badge-ghost">Firebase</div>
                </div>
                <div className="card-actions justify-end">
                  <Link to="https://github.com/odis43/Cutscene" target="_blank">
                    <div className="card-actions justify-end">
                      <button className="btn btn-black">Check it out!</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
