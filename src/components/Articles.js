import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>
            <div className="p-6">
              <Link to={`/article/${article.name}`}>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {article.title}
                </h1>
              </Link>
              <p className="leading-relaxed ">
                {article.content[0].substring(0, 100)}...
              </p>
            </div>
            <div className="px-10 py-3">
              <Link to={`/article/${article.name}`}>
                <button className="bg-teal-500 px-16 py-2 font-bold text-white">
                  Learn More...
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
