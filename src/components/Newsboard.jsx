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
    <div className="container my-4">

    <h2 className="text-center mb-4">
      Latest <span className="badge bg-danger">News</span>
    </h2>

    <div className="row g-4">

      {articles.map((news, index) => (
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          key={index}
        >
          <Newsitem
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        </div>
      ))}

    </div>
  </div>
  )
}

export default Newsboard
