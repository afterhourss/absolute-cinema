import './styles/main.scss'
import Navbar from './components/Navbar'
import options from "./api"
import { useState, useEffect } from 'react';
import Home from './Home';
import Movies from './Movies.jsx'
import Tvseries from './Tvseries.jsx'
import Metadata from './components/Metadata.jsx'
import Search from './Search.jsx'
import { Outlet } from 'react-router-dom';


function App() {
  const [dark, setDark] = useState(false);
  const [trending, setrending] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options)
      .then(response => response.json())
      .then(data => {
        setrending(data)
      })
        .catch(err => console.log(err))
  }, [])

  return (
    <>
    <div className={`theme ${dark ? "dark" : ""}`}>
      <Navbar darkTheme={dark} setDarkTheme={setDark}/>
  
      <Outlet/>
    </div>
    </>
  )
}

export default App