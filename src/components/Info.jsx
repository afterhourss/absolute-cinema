import { motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import Label from "./Label"
import genres from "../assets/genres"

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


function Info({title, posters, desc, rating, date, genre_id, isShow, setShow}) {
  const infoAnimation = {
    open: {opacity: 1, y: "-20rem"},
    closed: {opacity: 0, y: 0},
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
        <img src={posters} alt="" />
        <div className="header-content">
          <div className="title"><h2>{title}</h2><span>{date}</span></div>
          <p>{rating}/10⭐</p>
          {genre_id?.map(item => (
            <Label key={item}>{getGenre(item)}</Label>
          ))}
          <div className="info-content">
            <div className="desc">
              {desc === "" ? "No Overview" : limitString(String(desc), 200)}
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="info-button">
        <div className="btn-seemore">See More</div>
      </div> */}
    </motion.div>
    </>
  )
  
}

export default Info