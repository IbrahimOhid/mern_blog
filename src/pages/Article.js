import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleContent from './Article-Content'


const Article = () => {
  const {name} = useParams();
  const article = ArticleContent.find((article)=> article.name === name);
  if(!article) return <h1 className='text-center bg-red-600 text-white py-3 mt-10'>Article Not Found!</h1>
  return (
    <div>
      <h1 className='text-3xl mt-10 font-bold'>{article.title}</h1>
     {article.content.map((paragraph, index)=> (
      <p className='text-blue-600 mt-3' key={index}>{paragraph}</p>
     ))}
    </div>
  )
}

export default Article