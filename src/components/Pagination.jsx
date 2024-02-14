import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Pagination({ data, setPage, currPage }) {

  const [sliceIndexStart, setSliceIndexStart] = useState(0)

  const totalPage = data.total_pages
  const currentPage = currPage

  const sliced = 6
  const sliceIndexEnd = sliceIndexStart + sliced

  function handlePageClick(pageNumber){
    setPage(pageNumber)
  }
  function handleNextClick(){
    if(currentPage === sliceIndexEnd){
      setSliceIndexStart(sliceIndexStart + 1)
      setPage(currentPage + 1)
    }
    setPage(currentPage + 1)
  }
  function handleBackClick(){
    if(currentPage === (sliceIndexStart + 1)){
      setSliceIndexStart(sliceIndexStart - 1)
      setPage(currentPage - 1)
    }
    setPage(currentPage - 1)
  }

  function renderPageNumbers(){
    const pageNumbers = []
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i)
    }
    const slicedPageNumbers = pageNumbers.slice(sliceIndexStart, sliceIndexEnd)
    return slicedPageNumbers
  }

  return (
    <div>
      <ul className="pagination">
        {currentPage === 1 ? " " : <li onClick={() => handleBackClick()}>
          <button><IoIosArrowBack /></button>
        </li>}
        {renderPageNumbers().map(num => {
        return <li key={num} className={num === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageClick(num)}>{num}</button>
        </li>})}
        {(renderPageNumbers().length > 5) && <li>
          <button>...</button>
        </li>}
        <li onClick={() => handleNextClick()}>
          <button><IoIosArrowForward /></button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination