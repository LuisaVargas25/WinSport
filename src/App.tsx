import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import { useState } from 'react'
import './App.css'
import Home from './Home'
import Equipos from './Equipos'
import Favoritos from './Favoritos'
import Informativa from './Informativa'
import Original from './Original'
import Usuarios from './Usuarios'

function App() {
  const [count, setCount] = useState(0)

  return (

  <Router>

    <nav>
     <Link to="/"><img src="https://www.clipartmax.com/png/middle/201-2010871_home-icon-png-home-house-icon-website-home-logo.png"/><p>Home</p></Link>
     <Link to="/"><img src="https://www.vhv.rs/dpng/d/128-1281566_favorite-icon-png-image-free-download-searchpng-heart.png"/><p></p>Favoritos</Link>
     <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/3712/3712144.png"/><p>Original</p></Link>
     <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/263/263164.png"/><p>Informativa</p></Link>
     <Link to="/"><img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"/><p>Usuarios</p></Link>
     


    </nav>
    <Routes>
 <>
    <Route path="/" element={<Home />} />
    <Route path="/Equipos" element={<Equipos/>} />
    <Route path="/Favoritos" element={<Favoritos/>} />
    <Route path="/Informativa" element={<Informativa/>} />
    <Route path="/Original" element={<Original/>} />
    <Route path="/Usuarios" element={<Usuarios/>} />
    </>
     </Routes>
  </Router>
 
  )
}

export default App
