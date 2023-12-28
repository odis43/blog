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
        <img className="w-64" src={searching} alt="" />
        <div className="font-poppins font-bold text-8xl ">my interests.</div>
        <div className="mt-10 w-1/2 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur?
        </div>
        <div className="mt-10">
          <ul className="list-none font-bold text-xl">
            <Link className="hover:underline hover:decoration-blue-400 hover:text-opacity-50">
              <li>Music!</li>
            </Link>
            <Link className="hover:underline hover:decoration-blue-400 hover:underline-opacity-50">
              <li>Science</li>{" "}
            </Link>
            <Link className="hover:underline hover:decoration-blue-400 hover:underline-opacity-50">
              <li>Math</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interests;
