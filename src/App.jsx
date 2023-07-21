import React from 'react'
import NavbarDoc from './components/Navbar'
import Banner from './components/Banner.jsx'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
    <Banner/>
    <NavbarDoc/>
    <ItemListContainer
    greeting1="Bienvenido a Keyworld"
    greeting2="Disponible para compras proximamente"
    />
    </div>
  )
}

export default App