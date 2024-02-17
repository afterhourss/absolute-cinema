

function Banner({imageUrl, title, text}) {

    const bgBanner = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
    }
  return (
    <>
    <div className="banner" style={bgBanner}>
        <div className="banner-content">
            <p>{text}</p>
            <h2>{title}</h2>
        </div>
    </div>
    </>
  )
}

export default Banner