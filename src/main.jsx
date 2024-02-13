import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Movies from './Movies.jsx'
import Tvseries from './Tvseries.jsx'
import Metadata from './components/Metadata.jsx'
import Search from './Search.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/movies',
    element: <Movies/>,
  },
  {
    path: '/tvseries',
    element: <Tvseries/>,
  },
  {
    path: '/searched',
    element: <Search/>,
  },
  {
    path: '/metadata',
    element: <Metadata/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
