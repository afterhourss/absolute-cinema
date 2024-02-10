import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {

    const [hiddenBar, setHiddenBar] = useState(true);

  return (
    <>
    <div className="navbar-container">
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
        </div>
    </div>
    <Sidebar isHidden={hiddenBar} setHidden={setHiddenBar}/>
    </>
  )
}

export default Navbar