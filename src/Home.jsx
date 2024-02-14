import Hero from "./components/Hero"
import Box from "./components/Box"
import Footer from "./components/Footer"
import { FaSearch } from "react-icons/fa"
import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import options from "./api"

const Card = lazy(() => import('./components/Card'))

function Home() {

const [trending, setrending] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options)
      .then(response => response.json())
      .then(data => {
        setrending(data)
      })
        .catch(err => console.log(err))
  }, [])

  return (
    <>
    <div className='container dark'>
        <Hero/>
        <div className="hero-boxes">
            <Box title="Search anything" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." icon={<FaSearch/>}/>
        </div>
        <div className='list-section'>
            <div className='section-header'>
                <h2>Trending movies</h2>
                <div className='header-icon'>
                    <div><Link to="/movies">View All</Link></div>
                </div>
            </div>
            <Suspense fallback={<Loading/>}>
                <Card movies={trending}/>
            </Suspense>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home