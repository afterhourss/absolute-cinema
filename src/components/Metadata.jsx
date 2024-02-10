import React from 'react'

function Metadata() {

  return (
    <>
    <div className='metadata-background' style={{background: "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 90%), url('/img_posters/3.png') no-repeat"}}></div>
    <div className='container'>
        <div className='metadata-poster'>
          <img src="/img_posters/4.png" alt="" />
        </div>
        <div className='metadata-content'>
          <h2>The Batman</h2>
          <p>2022</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor sequi iste assumenda nulla a deserunt reiciendis voluptas nobis nemo?</p>
        </div>
    </div>
    </>
  )
}

export default Metadata