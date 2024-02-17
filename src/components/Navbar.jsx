import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion"

function Navbar({darkTheme, setDarkTheme}) {

    const [hiddenBar, setHiddenBar] = useState(true);
    

  return (
    <>
    <div className="navbar-container">
        <div className="navbar-left">
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="icon" onClick={() => setHiddenBar(!hiddenBar)}>
                <IoMdMenu />
            </motion.div>
            <Link to="/">
                <h1>Absc</h1>
            </Link>
        </div>
        <div className="navbar-right">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movie</Link></li>
                <li><Link to="/tvseries">Tv Series</Link></li>
            </ul>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                <Searchbar/>
            </motion.div>
            <a href="https://github.com/afterhourss/absolute-cinema" target="_blank">
                <FaGithub className="icon"/>
            </a>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? <MdOutlineLightMode className="icon" /> : <MdDarkMode className="icon"/>}
            </motion.div>
        </div>
    </div>
    <Sidebar isHidden={hiddenBar} setHidden={setHiddenBar} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </>
  )
}

export default Navbar