import image from '../assets/news.png'
const Newsitem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light h-100 shadow w-100" >
  <img 
  src={src?src:image} 
  style={{ height: "180px", objectFit: "cover" }} 
  className="card-img-top img-fluid" alt="..."/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
    <p className="card-text flex-grow-1">{description?description.slice(0,90):""}</p>
    <a href={url}
  target="_blank"
  rel="noreferrer"
  className="btn btn-primary mt-auto">Read More</a>
  </div>
</div>
  )
}

export default Newsitem