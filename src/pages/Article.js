import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './Article-Content'

const Article = () => {
  const {name} = useParams();
  const article = articleContent.find((article)=> article.name === name)
  return (
    <div>
    <h1 className='bg-yellow-700  px-3 mb-5 text-white mt-10 py-4 font-semibold text-2xl'>{article.title}</h1>
    {
      article.content.map((paragraph, index)=>(
        <p className='text-base'>{paragraph}</p>
      ))
    }
    </div>
  )
}

export default Article