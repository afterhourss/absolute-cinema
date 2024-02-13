import Card from "./components/Card"
import { useState, useEffect } from "react"
import options from "./api"
import Navbar from "./components/Navbar"
import Pagination from "./components/Pagination"

function Search({searchText}) {

  const [searched, setSearched] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?query=Fight%20club&include_adult=false&language=en-US&page=${currentPage}`, options)
      .then(response => response.json())
      .then(data => {
        setSearched(data)
      })
        .catch(err => console.log(err))
  }, [currentPage])


  return (
    <>
    <Navbar/>
    <div className="container">
        <p>List by all Search</p>
        <Card movies={searched}/>
        <Pagination data={searched} setPage={setSearched} currPage={currentPage}/>
    </div>
    </>
  )
}

export default Search