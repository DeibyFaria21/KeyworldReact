import React from 'react'
import NavbarDoc from './components/Navbar'
import Banner from './components/Banner.jsx'
import ItemListContainer from './components/ItemListContainer'
import CounterComponent from './components/CounterComponent'

const App = () => {
  return (
    <div className='mainJsx'>
    <Banner/>
    <NavbarDoc/>
    <CounterComponent/>
    <ItemListContainer
    greeting1="Bienvenido a Keyworld"
    greeting2="Disponible para compras proximamente"
    />
    </div>
  )
}

export default App