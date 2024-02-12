import Card from "./components/Card"
import { useState, useEffect } from "react"
import options from "./api"
import Navbar from "./components/Navbar"

function Tvseries() {

  const [tvSeries, setTvSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        setTvSeries(data)
        console.log(data)
      })
        .catch(err => console.log(err))
  }, [])

  return (
    <>
    <Navbar/>
    <div className="container">
        <p>List by Tv Series</p>
        <Card movies={tvSeries}/>
    </div>
    </>
  )
}

export default Tvseries