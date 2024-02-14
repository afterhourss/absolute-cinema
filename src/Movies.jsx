import { useState, useEffect } from "react"
import options from "./api"
import Pagination from "./components/Pagination"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading.jsx"

const Card = lazy(() => import('./components/Card.jsx'))

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
      <div className="container">
          <p>List by all Movies</p>
          <Suspense fallback={<Loading/>}>
            <Card movies={movies}/>
          </Suspense>
          <Pagination data={movies} setPage={setCurrentPage} currPage={currentPage}/>
      </div>
    </>
  )
}

export default Movies