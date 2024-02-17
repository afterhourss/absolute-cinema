import { useState, useEffect } from "react"
import options from "./api"
import Pagination from "./components/Pagination"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading.jsx"
import { Helmet, HelmetProvider } from "react-helmet-async"


const Card = lazy(() => delayMock(import('./components/Card.jsx')))

function Movies() {
  
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, options)
      .then(response => response.json())
      .then(data => { 
        setMovies(data)
      })
        .catch(err => console.log(err))
  }, [currentPage])


  return (
    <HelmetProvider>
    <Helmet>
      <title>List of all movies</title>
    </Helmet>
      <div className="container">
          <p className="title-page">List by all Movies</p>
          <Suspense fallback={<Loading/>}>
            <Card movies={movies} type={"movie"}/>
          </Suspense>
          <Pagination data={movies} setPage={setCurrentPage} currPage={currentPage}/>
      </div>
    </HelmetProvider>
  )
}

function delayMock(promise){
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  }).then(() => promise
  )
}

export default Movies