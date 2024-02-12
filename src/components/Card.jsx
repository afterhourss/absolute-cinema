import Info from "./Info"
import { useState } from "react"


function getPoster(path){
  if(path){
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`
  }
  return undefined
}

function Card({movies}) {

  const [activeInfo, setActiveInfo] = useState({})
  const [showInfo, setShowInfo] = useState(false)

  const handleClick = (card) => {
    setActiveInfo(card)
    setShowInfo(true)
  } 

  return (
    <div className='card-wrapper'>
      {movies.results?.map(item => {
      return <div className="card" key={item.id} onClick={() => handleClick(item)}>
          <div className="card-image">  
              <img src={getPoster(item.poster_path)} alt="" />
          </div>
      </div>
      })}
      <Info title={activeInfo.title || activeInfo.name} desc={activeInfo.overview} posters={getPoster(activeInfo.poster_path)} isShow={showInfo} setShow={setShowInfo} rating={activeInfo.vote_average?.toFixed(1)} date={activeInfo.release_date?.split('-')[0]} genre_id={activeInfo.genre_ids}/>
    </div>
  )
}

export default Card