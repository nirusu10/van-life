import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'

import './server'

export default function App() {
  return (
    <BrowserRouter>
      <header className='container'>
        <Link className='site-logo' to='/'>
          #VANLIFE
        </Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}
