import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Pagination({ data, setPage, currPage }) {

  const [sliceIndexStart, setSliceIndexStart] = useState(0)

  const totalPage = data.total_pages
  const currentPage = currPage
  const sliceIndexEnd = sliceIndexStart + 7

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
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageClick(i)}>{i}</button>
        </li>
      )
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
        {renderPageNumbers()}
        {(renderPageNumbers().length > 6) && <li>
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