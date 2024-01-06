import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white p-4 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="font-bold text-xl">
            {window.innerWidth < 640 ? "OA" : "Oditha Amarasinghe"}
          </div>
        </Link>
        <ul className="flex space-x-4 font-bold text-black">
          <Link className="hover:text-gray-500 " to="/">
            home
          </Link>
          <Link to="/about" className="hover:text-gray-500">
            about
          </Link>
          <Link to="/reviews" className="hover:text-gray-500">
            reviews
          </Link>
          <Link to="/interests" className="hover:text-gray-500">
            interests
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
