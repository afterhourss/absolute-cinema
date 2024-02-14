import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar({darkTheme, setDarkTheme}) {

    const [hiddenBar, setHiddenBar] = useState(true);

  return (
    <>
    <div className={`navbar-container ${darkTheme ? "dark" : ""}`}>
        <div className="navbar-left">
            <div className="icon" onClick={() => setHiddenBar(!hiddenBar)}>
                <IoMdMenu />
            </div>
            <h1>Absc</h1>
        </div>
        <div className="navbar-right">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movie</Link></li>
                <li><Link to="/tvseries">Tv Series</Link></li>
            </ul>
            <Searchbar/>
            <FaGithub className="icon"/>
            <MdOutlineLightMode className="icon" onClick={() => setDarkTheme(!darkTheme)}/>
        </div>
    </div>
    <Sidebar isHidden={hiddenBar} setHidden={setHiddenBar}/>
    </>
  )
}

export default Navbar