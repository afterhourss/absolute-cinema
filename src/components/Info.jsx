import { motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import Label from "./Label"
import genres from "../assets/genres"
import { Link } from "react-router-dom"

function limitString(text, stringLength){
  if(text.length > stringLength){
    return text.substring(0, stringLength - 3) + '...'
  } else{
    return text
  }
}

function getGenre(ids){
    const foundGenre = genres.find(genre => genre.id === ids)
    return foundGenre ? foundGenre.name : undefined
}

function Info({type, id, title, language, posters, desc, rating, date, genre_id, isShow, setShow}) {
  
  const infoAnimation = {
    open: {opacity: 1, y: "-20rem", display: "block"},
    closed: {opacity: 0, y: 0, display: "none"},
    blankSideOpen: {opacity: 0.2},
    blankSideClose: {opacity: 0}
  }

  return (
    <>
    <motion.div className="info-wrapper" transition={{type: "tween"}} animate={isShow ? "open" : "closed"} variants={infoAnimation}>
      <div className="info-nav">
        <IoMdClose onClick={() => setShow(false)}/>
        <Label>
          Info
        </Label>
      </div>
      <div className="info-header">
        <div className="posters">
          <img src={posters} alt="" />
          <Link to={`/metadata/${type}/${id}`}><motion.div className="button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>Details</motion.div></Link>
        </div>
        <div className="header-content">
          <div className="title"><h2>{title}</h2><span>{date}</span></div>
          <p>{rating}/10⭐</p>
          <p>Language : {language}</p>
          {genre_id?.map(item => (
            <Label key={item}>{getGenre(item)}</Label>
          ))}
          <div className="info-content">
            <div className="desc">
              {desc === "" ? "No Overview" : limitString(String(desc), 300)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div className={`blank-info ${isShow ? '' : 'hidden'}` } animate={isShow ? "blankSideOpen" : "blankSideClose"} variants={infoAnimation} onClick={() => setShow(false)}></motion.div>
    </>
  )
  
}

export default Info