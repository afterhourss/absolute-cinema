import Card from "./components/Card"
import { useState, useEffect } from "react"
import options from "./api"
import Navbar from "./components/Navbar"
import Pagination from "./components/Pagination"

function Movies() {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options)
      .then(response => response.json())
      .then(data => {
        setMovies(data)
      })
        .catch(err => console.log(err))
  }, [currentPage])


  return (
    <>
    <Navbar/>
    <div className="container">
        <p>List by all Movies</p>
        <Card movies={movies}/>
        <Pagination data={movies} setPage={setCurrentPage} currPage={currentPage}/>
    </div>
    </>
  )
}

export default Movies