import './styles/main.scss'
import Navbar from './components/Navbar'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
    <div className={`theme ${dark ? "dark" : ""}`}>
      <Navbar darkTheme={dark} setDarkTheme={setDark}/>
      <Outlet/>
    </div>
    </>
  )
}

export default App