import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import Home from './Home.jsx'
import Tvseries from './Tvseries.jsx'
import Movies from './Movies.jsx'
import Search from './Search.jsx'
import Metadata from './components/Metadata.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  
    children: [
      { index: true, element: <Home/> },
      { path: "movies", element: <Movies/> },
      { path: "tvseries", element: <Tvseries/> },
      { path: "search/:query", element: <Search/> },
      { path: "metadata/:type/:id", element: <Metadata/> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
