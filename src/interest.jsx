import React from "react";
import { Link } from "react-router-dom";
import searching from "./images/2.Searching.png";

import Nav from "./Nav";
var Latex = require("react-latex");
const Interests = () => {
  return (
    <div className="relative bg-white overflow-y-auto">
      <Nav />
      <div className="mt-18 ml-24">
        <img className="w-72" src={searching} alt="" />
        <div className="font-poppins font-bold text-8xl ">cool stuff.</div>
        <div className="mt-10 w-1/2 font-medium text-lg">
          After highschool ended and I exhausted my redundant list of
          "interests" that were nothing but fluff for university applications, I
          found myself in a rut. Besides some occasional guitar and music
          production, I found myself unable to answer the question of "what was
          I actually interested in?" Now in third year, I'm hoping to tackle
          this issue head on by letting go of overthinking or "fitting a niche"
          and writing about some topics that I find cool.
        </div>
        <div className="mt-8 mb-16 h-56 overflow-y-scroll border-2 border-black rounded w-1/3">
          <ul className="list-none font-bold text-2xl ml-2">
            <Link className="hover:underline hover:decoration-blue-400 hover:text-opacity-50 mb-4">
              <li>the vulfpeck</li>
            </Link>
            <Link className="hover:underline hover:decoration-blue-400 hover:underline-opacity-50 mb-4">
              <li>i love house music</li>{" "}
            </Link>
            <Link className="hover:underline hover:decoration-blue-400 hover:underline-opacity-50 mb-4">
              <li>the endless void</li>{" "}
            </Link>
            <Link className="hover:underline hover:decoration-blue-400 hover:underline-opacity-50 ">
              <li>this site! (shameless i know)</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interests;
