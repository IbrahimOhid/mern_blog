import React from "react";
import articleContent from "./Article-Content";

import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    <div classNameName="mt-5">
      <h1 className="bg-teal-800 py-3 text-center mt-3 text-white font">
        This is Article List Page
      </h1>
            <Articles articles={articleContent} />
    </div>
  );
};

export default ArticlesList;
