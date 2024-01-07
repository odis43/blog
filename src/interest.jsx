import React from "react";
import searching from "./images/2.Searching.png";

import Nav from "./Nav";
const Interests = () => {
  return (
    <div className="relative bg-white overflow-y-auto">
      <Nav />
      <div className="mt-18 sm:ml-24">
        <img className="w-60 sm:w-72" src={searching} alt="" />
        <div className="font-poppins font-bold sm:text-8xl text-7xl ml-4">
          interests.
        </div>
        <div className="w-80 ml-4 sm:mt-10 sm:w-1/2 text-base sm:text-lg font-medium">
          After highschool ended and I exhausted my redundant list of
          "interests" that were mostly fluff for university applications, I
          found myself in a rut. Beside some occasional guitar and music
          production, I found myself unable to answer the question of "what was
          I actually interested in?" Now in third year, I'm hoping to tackle
          this issue head on by letting go of overthinking or "fitting a niche"
          and writing about some topics that I find cool.
        </div>

        <div className="ml-2 mt-8 mb-16 h-56 overflow-y-scroll ">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Articles below!
            </div>
            <ul
              tabIndex={0}
              className=" align-center dropdown-content z-[1] menu p-2 bg-black w-56 shadow rounded-box"
            >
              <li className="text-center font-poppins text-white">
                Now just need to write...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
