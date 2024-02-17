import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Searchbar() {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    navigate(`/search/${searchValue}`)
  }

  return (
    <div className="searchbar">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={searchValue} placeholder="Fight Club" onChange={(event) => setSearchValue(event.target.value)}/>
        </form>
    </div>
  )
}

export default Searchbar