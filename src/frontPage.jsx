import React from "react";
import Card from "./card";
import lazy from "./images/9.Laziness.png";
import search from "./images/2.Searching.png";
import news from "./images/1.Newspaper.png";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="relative bg-white">
      <div className="mt-24 ml-24">
        <div className="font-poppins font-bold text-8xl ">Hello!</div>
        <div className="font-poppins font-bold text-blue-600 text-opacity-50 text-8xl">
          welcome to my space.
        </div>
      </div>
      <div className="ml-28 mt-20 lg:columns-3 lg:gap-x-0 md:columns-2 sm:columns-1">
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
