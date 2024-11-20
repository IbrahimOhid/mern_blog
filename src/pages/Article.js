import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./Article-Content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article)
    return (
      <NotFound />
    );
    const otherArticle = articleContent.filter(article => article.name !== name)
  return (
    <>
      <h1 className="bg-yellow-700  px-3 mb-5 text-white mt-10 py-4 font-semibold text-2xl">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="text-base" key={index}>
          {paragraph}
        </p>
      ))}
      <div>
        <h1 className="text-2xl font-bold py-3">Other Articles</h1>
      </div>
      <div>
        <Articles articles={otherArticle}/>
      </div>
    </>
  );
};

export default Article;
