import React from "react";
import Card from "./card";
import lazy from "./images/9.Laziness.png";
import search from "./images/2.Searching.png";
import news from "./images/1.Newspaper.png";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="mt-10 relative bg-white overflow-hidden flex flex-col sm:items-center">
      <div className="sm:mt-[5rem] mt-6 sm:mt-24 sm:ml-2 items-center ml-8">
        <div className="text-5xl font-poppins font-bold sm:text-8xl">
          Hello!
        </div>
        <div className="sm:w-[100%] w-80 font-poppins font-bold text-blue-600 text-opacity-50 sm:text-8xl text-5xl">
          Welcome to my space.
        </div>
      </div>
      <div className="sm:ml-24 flex justify-center grid grid-rows-3 grid-flow-col gap-24 mt-12 mb-12 sm:mt-18 sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-20">
        <Link to="/about">
          <Card title={"about me"} img={lazy} className="sm:ml-0" />
        </Link>
        <Link to="/reviews">
          <Card title={"reviews"} img={news} />
        </Link>
        <Link to="/interests">
          <Card title={"interests"} img={search} />
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
