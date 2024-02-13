import Card from "./components/Card"
import { useState, useEffect } from "react"
import options from "./api"
import Navbar from "./components/Navbar"
import Pagination from "./components/Pagination"

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
    <>
    <Navbar/>
    <div className="container">
        <p>List by Tv Series</p>
        <Card movies={tvSeries}/>
        <Pagination data={tvSeries} setPage={setCurrentPage} currPage={currentPage}/>
    </div>
    </>
  )
}

export default Tvseries