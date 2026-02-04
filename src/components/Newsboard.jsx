import { useState } from "react";
import { useEffect } from "react";
import Newsitem from "./Newsitem";


const Newsboard = ({category}) => {
  const[articles,setArticles]=useState([]);
  useEffect(() => {

    fetch(`/api/news?category=${category}`)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles || []);
      })
      .catch(error => {
        console.error(error);
        setArticles([]);
      });
  }, [category]);
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
