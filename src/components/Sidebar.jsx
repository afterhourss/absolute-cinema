import { IoMdClose } from "react-icons/io"
import Label from "./Label"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"

const sidebarAnimation = {
    open: {opacity: 1, x: "17rem"},
    closed: {opacity: 0, x: 0},
    blankSideOpen: {opacity: 0.2},
    blankSideClose: {opacity: 0}
}

function Sidebar({isHidden, setHidden}) {
  return (
    <>
    <motion.div transition={{type: "tween"}} animate={isHidden ? "closed" : "open"} variants={sidebarAnimation} className="sidebar-container">
        <div className="sidebar-links">
            <h1>Absc</h1>
            <Label>
                Happy new year folks!🎉
            </Label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movie</Link></li>
                <li><Link to="/tvseries">Tv Series</Link></li>
            </ul>
        </div>
        <div className="sidebar-icon-close" onClick={() => setHidden(!isHidden)}>
            <IoMdClose />
        </div>
    </motion.div>
    <motion.div animate={isHidden ? "blankSideClose" : "blankSideOpen"} variants={sidebarAnimation} className={`blank ${isHidden ? 'hidden' : ''}` } onClick={() => setHidden(!isHidden)}></motion.div>
    </>
  )
}

export default Sidebar