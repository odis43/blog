import React from "react";
import Card from "./card";
import lazy from "./images/9.Laziness.png";
import search from "./images/2.Searching.png";
import news from "./images/1.Newspaper.png";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className=" sm:mt-[5rem] mt-6 ml-9 sm:mt-24 sm:ml-24">
        <div className="text-6xl font-poppins font-bold sm:text-8xl ">
          Hello!
        </div>
        <div className="font-poppins font-bold text-blue-600 text-opacity-50 sm:text-8xl text-6xl">
          welcome to my space.
        </div>
      </div>
      <div className="flex justify-center grid grid-rows-3 grid-flow-col gap-12 mt-12 mb-12 sm:ml-2 sm:mt-18 sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-20">
        <Link to="/">
          <Card title={"life"} img={lazy} />
        </Link>
        <Link to="/reviews">
          <Card title={"reviews"} img={news} />
        </Link>
        <Link to="/interests">
          {" "}
          <Card title={"interests"} img={search} />
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
