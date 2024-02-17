import Info from "./Info"
import { useState } from "react"
import { motion } from "framer-motion"


function getPoster(path){
  if(path){
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`
  }else if(path === null){
    return '/no_posters.png'
  }
}

function Card({movies, type}) {

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
              <img src={getPoster(item.poster_path)} alt="" />
          </div>
      </motion.div>
      })}
      <Info id={activeInfo.id} type={activeInfo.media_type || type} title={activeInfo.title || activeInfo.name} desc={activeInfo.overview} posters={getPoster(activeInfo.poster_path)} isShow={showInfo} setShow={setShowInfo} rating={activeInfo.vote_average?.toFixed(1)} date={activeInfo.release_date?.split('-')[0]} genre_id={activeInfo.genre_ids} language={activeInfo.original_language}/>
    </div>
  )
}

export default Card