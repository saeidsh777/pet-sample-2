import { useRoutes } from 'react-router-dom'
import { routes } from './router/routes'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {
  const router = useRoutes(routes)

  return (
    <>
    <Header/>
    {router} 
    <Footer/>
    </>
  )
}

export default App
