function Box({title, text, link, icon}) {
  return (
    <div className="box-wrapper">
        <div className="box-icon">
            {icon}
        </div>
        <div className="box-title">
            <h2>{title}</h2>
        </div>
        <div className="box-text">
            <p>{text}</p>
            <span>{link}</span>
        </div>
    </div>
  )
}

export default Box