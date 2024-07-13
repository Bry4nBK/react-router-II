import { Routes, Route } from 'react-router'

import Home from './views/Home'
import NotFound from './views/NotFound'
import Pokemones from './views/Pokemones'
import PokemonDetalles from './views/PokemonDetalles'

import NavBar from './components/NavBar'
import MiApi from './components/MiApi'

import './App.css'

function App() {

  const datosApi = MiApi()

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pokemones" element={<Pokemones data={datosApi}/>}/>
        <Route path="/Pokemones/:PokemonId" element={<PokemonDetalles data={datosApi}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App