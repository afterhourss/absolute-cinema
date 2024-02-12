function Pagination({ data, setPage, currPage }) {
  const totalPage = data.total_pages
  const currentPage = currPage

  const handlePageClick = (pageNumber) => {
    // You can implement logic to handle page changes
    // For example, you might want to fetch data for the new page.
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
    return pageNumbers.slice(1, 10)
  }

  return (
    <div>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </div>
  )
}

export default Pagination