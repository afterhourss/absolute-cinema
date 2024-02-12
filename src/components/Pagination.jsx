import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Pagination({ data, setPage, currPage }) {

  const [sliceIndex, setSliceIndex] = useState(0)

  function handleSliceIndex(){
    setSliceIndex(sliceIndex + 7)
  }
  function handleSliceIndexBack(){
    setSliceIndex(sliceIndex - 7)
  }

  const totalPage = data.total_pages
  const currentPage = currPage

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageClick(i)}>{i}</button>
        </li>
      )
    }
    return pageNumbers.slice(sliceIndex, sliceIndex + 7)
  }

  console.log(sliceIndex)

  return (
    <div>
      <ul className="pagination">
        {sliceIndex === 0 ? " " : <li onClick={() => handleSliceIndexBack()}>
          <button><IoIosArrowBack /></button>
        </li>}
        {renderPageNumbers()}
        <li>
          <button>...</button>
        </li>
        <li onClick={() => handleSliceIndex()}>
          <button><IoIosArrowForward /></button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination