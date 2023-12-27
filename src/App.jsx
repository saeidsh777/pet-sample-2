import { useRoutes } from 'react-router-dom'
import { routes } from './router/routes'
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {
  const router = useRoutes(routes)

  return (
    <>
    {router} 
    <Footer/>
    </>
  )
}

export default App
