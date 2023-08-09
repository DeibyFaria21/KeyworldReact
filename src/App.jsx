import React from 'react'
import NavbarDoc from './components/Navbar'
import Banner from './components/Banner.jsx'
import ItemListContainer from './components/ItemListContainer'
import CounterComponent from './components/CounterComponent'
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
        <div className='mainJsx'>
        <Banner/>
        <NavbarDoc/>

      <Routes>
        
        <Route exact path="/" element={<Home/>} />

        <Route exact path="/about" element={<About/>} />

{/*         <CounterComponent/>
        <ItemListContainer
        greeting1="Bienvenido a Keyworld"
        />
 */}
      </Routes>

        </div>
    </BrowserRouter>
  )
}

export default App