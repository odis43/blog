import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white p-4 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Oditha Amarasinghe</div>
        <ul className="flex space-x-4 font-bold text-black">
          <Link className="hover:text-gray-500 " to="/">
            home
          </Link>
          <Link className="hover:text-gray-500">life</Link>
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