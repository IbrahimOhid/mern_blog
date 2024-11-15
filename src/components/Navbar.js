import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-teal-500 top-0 text-center">
      <ul>
        <li>
        <Link to='/' className="pl-6">Home</Link>
        </li>
        <li>
        <Link to='/about' className="pl-6">About</Link>
        </li>
        <li>
        <Link to='/article' className="pl-6">Article</Link>
        </li>
        <li>
        <Link to='/articles' className="pl-6">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
