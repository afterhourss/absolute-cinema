import Hero from "./components/Hero"
import Box from "./components/Box"
import Footer from "./components/Footer"
import Banner from "./components/Banner.jsx"
import { FaSearch } from "react-icons/fa"
import { MdLocalMovies } from "react-icons/md";
import { PiPaintBucketBold } from "react-icons/pi";
import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import options from "./api"
import { Helmet, HelmetProvider } from "react-helmet-async"

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Card = lazy(() => delayMock(import('./components/Card.jsx')))

function Home() {

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
    <HelmetProvider>
    <Helmet>
      <title>Absolute Cinema.</title>
    </Helmet>
    <div className='container'>
        <Hero/>
        <div className="hero-boxes">
            <Box title="Search anything" text="Search what is overview of the movie?, what year they released?" icon={<FaSearch/>}/>
            <Box title="Complete Metadata" text="Provide suffice metadata" icon={<MdLocalMovies/>}/>
            <Box title="Nicer UI" text="Modern UI and darkmode support available" icon={<PiPaintBucketBold/>}/>
        </div>
        <div className="banner-wrapper">
          <Carousel autoPlay={true} interval={8000} infiniteLoop={true} showStatus={false} showThumbs={false}>
            <Banner imageUrl={"/banner1.jpg"} title={"Blade Runner"} text={"Literally me movie"}/>
            <Banner imageUrl={"/banner2.jpg"} title={"Kill Bill"} text={"Kino Certified"}/>
            <Banner imageUrl={"/banner3.png"} title={"The Batman"} text={"Im Vengeance"}/>
          </Carousel>
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
    </HelmetProvider>
  )
}

function delayMock(promise){
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    }).then(() => promise
    )
  }

export default Home