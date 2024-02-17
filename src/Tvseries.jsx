import { useState, useEffect, lazy, Suspense } from "react"
import options from "./api"
import Pagination from "./components/Pagination"
import Loading from "./components/Loading"
import { Helmet, HelmetProvider } from "react-helmet-async"


const Card = lazy(() => delayMock(import('./components/Card')))

function Tvseries() {

  const [tvSeries, setTvSeries] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}`, options)
      .then(response => response.json())
      .then(data => {
        setTvSeries(data)
        console.log(data)
      })
        .catch(err => console.log(err))
  }, [currentPage])

  return (
    <HelmetProvider>
    <Helmet>
      <title>List of all tv series</title>
    </Helmet>
    <div className="container">
        <p className="title-tvseries-page">List by Tv Series</p>
        <Suspense fallback={<Loading/>}>
          <Card movies={tvSeries} type={"tv"}/>
        </Suspense>
        <Pagination data={tvSeries} setPage={setCurrentPage} currPage={currentPage}/>
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

export default Tvseries