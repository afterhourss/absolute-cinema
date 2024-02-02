import { IoMdClose } from "react-icons/io";
import Label from "./Label";

function Sidebar({isHidden, setHidden}) {
  return (
    <>
    <div className={`sidebar-container ${isHidden ? 'hidden' : ''}`}>
        <div className="sidebar-links">
            <h1>Absc</h1>
            <Label>
                Happy new year folks!🎉
            </Label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Tv Series</a></li>
            </ul>
        </div>
        <div className="sidebar-icon-close" onClick={() => setHidden(!isHidden)}>
            <IoMdClose />
        </div>
    </div>
    <div className={`blank ${isHidden ? 'hidden' : ''}` } onClick={() => setHidden(!isHidden)}></div>
    </>
  )
}

export default Sidebar