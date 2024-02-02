function Label({children}) {
  return (
    <div className="label-container">
        <div className="label-text">
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Label