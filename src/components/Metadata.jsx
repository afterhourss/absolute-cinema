import Label from './Label'
import genres from '../assets/genres'
import options from '../api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Error from './Error'
import Loading from './Loading'

function getGenre(ids){
  const foundGenre = genres.find(genre => genre.id === ids)
  return foundGenre ? foundGenre.name : undefined
}

function getBackdrop(path){
  return `https://image.tmdb.org/t/p/w533_and_h300_bestv2${path}`
}

function getPoster(path){
  if(path){
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${path}`
  }else if(path === null){
    return '/no_posters.png'
  }
}

function Metadata() {

  const { id, type } = useParams()
  const [details, setDetails] = useState({})
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
    fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
    .then(res => {
      if(!res.ok){
        throw new Error("Server error")
      }
      return res.json()
    })
    .then(data => {
      setDetails(data)
      setLoading(false)
    })
    .catch(err => setError(err))
  }
  return () => ignore = true
  }, [])

  const bgBackdrop = {
    backgroundImage: `url('${getBackdrop(details.backdrop_path)}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover"
  }

  if (error) return <Error/>
  if (loading) return <Loading/>

  return (
    <>
    <div className='metadata-wrapper'>
        <div className='metadata-background' style={bgBackdrop}>
        </div>
        <div className='sub-wrapper'>
          <div className='metadata-poster'>
            <img src={getPoster(details.poster_path)} alt="" />
          </div>
          <div className='head-content'>
            <div className='head-left'>
              <h2>{details.title}</h2>
              <p className='tagline'>{details.tagline}</p>
              <p>{details.release_date}</p>
            </div>
            <div className='head-right'>
              <a href={`https://www.imdb.com/title/${details.imdb_id}/?ref_=hm_tpks_tt_i_4_pd_tp1_pbr_ic`} target='_blank'>
                <img src="/imdblogo.png" alt="" />
              </a>
            </div>
          </div>
          <p>{details.vote_average?.toFixed(1)}/10</p>
          {details.genres?.map(item => (
            <Label key={item.id}>{getGenre(item.id)}</Label>
          ))}
          <p className='overview'>{details.overview}</p>
        </div>
    </div>
    </>
  )
}

export default Metadata