import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-teal-500 top-0 text-center py-4">
      <ul>
        <li className="inline-block text-white mr-5 font-bold">
        <Link to='/' className="pl-6">Home</Link>
        </li>
        <li className="inline-block text-white mr-5 font-bold">
        <Link to='/about' className="pl-6">About</Link>
        </li>
        <li className="inline-block text-white mr-5 font-bold">
        <Link to='/article' className="pl-6">Article</Link>
        </li>
        <li className="inline-block text-white mr-5 font-bold">
        <Link to='/articleList' className="pl-6">ArticleList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
