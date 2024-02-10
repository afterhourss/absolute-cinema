import './styles/main.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Box from './components/Box'
import { FaSearch } from "react-icons/fa";
import Footer from './components/Footer'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading';
import options from "./api"
import { useState, useEffect } from 'react';

const Card = lazy(() => import('./components/Card'))

function App() {

  const [trending, setrending] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options)
      .then(response => response.json())
      .then(data => {
        setrending(data)
        console.log(data)
      })
        .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <div className="hero-boxes">
          <Box title="Search anything" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." icon={<FaSearch/>}/>
        </div>
        <div className='list-section'>
          <div className='section-header'>
            <h2>Trending movies</h2>
            <div className='header-icon'>
              <div>View All</div>
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

export default App