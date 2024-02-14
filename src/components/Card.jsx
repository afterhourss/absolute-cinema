import Info from "./Info"
import { useState } from "react"
import { motion } from "framer-motion"


function getPoster(path){
  if(path){
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`
  }
  return null
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
      return <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="card" key={item.id} onClick={() => handleClick(item)}>
          <div className="card-image">
              <img src={item.poster_path === null ? '/no_posters.png' : getPoster(item.poster_path)} alt="" />
          </div>
      </motion.div>
      })}
      <Info title={activeInfo.title || activeInfo.name} desc={activeInfo.overview} posters={getPoster(activeInfo.poster_path)} isShow={showInfo} setShow={setShowInfo} rating={activeInfo.vote_average?.toFixed(1)} date={activeInfo.release_date?.split('-')[0]} genre_id={activeInfo.genre_ids}/>
    </div>
  )
}

export default Card