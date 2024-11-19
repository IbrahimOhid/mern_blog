import React from "react";
import articleContent from "./Article-Content";

import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    <div classNameName="mt-5">
      <h1 className="bg-teal-800 py-3 text-center mt-3 text-white font">
        This is Article List Page
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Articles articles={articleContent} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesList;
