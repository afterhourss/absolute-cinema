import Card from "./components/Card"
import { useState, useEffect } from "react"
import options from "./api"
import Navbar from "./components/Navbar"

function Movies() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data)
        console.log(data)
      })
        .catch(err => console.log(err))
  }, [])

  return (
    <>
    <Navbar/>
    <div>
        <p>This all movies mate</p>
        <Card movies={movies}/>
    </div>
    </>
  )
}

export default Movies