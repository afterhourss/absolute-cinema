import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMdMenu } from "react-icons/io";

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
        <div className="navbar-right hidden">
            <ul>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Tv Series</a></li>
                <li><a href="#">Kino</a></li>
                <li><a href="#">Movie</a></li>
            </ul>
        </div>
    </div>
    <Sidebar isHidden={hiddenBar} setHidden={setHiddenBar}/>
    </>
  )
}

export default Navbar