import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";


function Pagination({ data, setPage, currPage }) {


  const [sliceIndexStart, setSliceIndexStart] = useState(0)
  
  const totalPage = data.total_pages

  const dataLimit = 6
  const sliceIndexEnd = sliceIndexStart + dataLimit

  function handlePageClick(pageNumber){
    setPage(pageNumber)
  }
  function handleNextClick(){
    if(currPage === sliceIndexEnd){
      setSliceIndexStart(sliceIndexStart + 1)
      setPage(currPage + 1)
    }
    setPage(currPage + 1)
  }
  function handleBackClick(){
    if(currPage === (sliceIndexStart + 1)){
      setSliceIndexStart(sliceIndexStart - 1)
      setPage(currPage - 1)
    }
    setPage(currPage - 1)
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
        {currPage === 1 ? " " : <li onClick={() => handleBackClick()}>
          <button><IoIosArrowBack /></button>
        </li>}
        {renderPageNumbers().map(num => {
        return <li key={num} className={num === currPage ? 'active' : ''}>
          <button onClick={() => handlePageClick(num)}>{num}</button>
        </li>})}
        {(renderPageNumbers().length > 5) && <li>
          <button>...</button>
        </li>}
        {currPage >= totalPage ? " " : <li onClick={() => handleNextClick()}>
          <button><IoIosArrowForward /></button>
        </li>}
      </ul>
    </div>
  )
}

export default Pagination