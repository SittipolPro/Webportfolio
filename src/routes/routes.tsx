// src/routes/routes.jsx
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/็Home/Home'
import About from '../pages/About/About'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> }, 
      { path: 'about', element: <About /> },
    ],
  },
])
