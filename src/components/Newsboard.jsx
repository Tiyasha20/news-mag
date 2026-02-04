import { useState } from "react";
import { useEffect } from "react";
import Newsitem from "./Newsitem";


const Newsboard = ({category}) => {
  const[articles,setArticles]=useState([]);
  useEffect(()=>{
    let url=`https://gnews.io/api/v4/search?q=${category}&lang=en&max=5&apikey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
  },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.image} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
