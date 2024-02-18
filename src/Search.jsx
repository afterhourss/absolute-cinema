import { useState, useEffect, lazy, Suspense } from "react"
import { useLocation, useParams } from "react-router-dom"
import options from "./api"
import Pagination from "./components/Pagination"
import Loading from "./components/Loading"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Card = lazy(() => delayMock(import("./components/Card")))

function Search() {

  
  const { query } = useParams()
  const [searched, setSearched] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${currentPage}`, options)
      .then(response => response.json())
      .then(data => {
        setSearched(data)
      })
        .catch(err => console.log(err))
  }, [currentPage, query])

  //kalo querynya berubah, set current pagenya jadi 1 lagi
  useEffect(() => {
    setCurrentPage(1)
  }, [query])

  //ngambil value dari parameter buat di display di title
  const paramText = decodeURI(query)

  return (
    <HelmetProvider>
    <Helmet>
      <title>Search {paramText}</title>
    </Helmet>
    <div className="container">
        <p className="title-page">Search by "{paramText}"</p>
        <Suspense fallback={<Loading/>}>
          <Card movies={searched}/>
        </Suspense>
        <Pagination data={searched} setPage={setCurrentPage} currPage={currentPage}/>
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

export default Search