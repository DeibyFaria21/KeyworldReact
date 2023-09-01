import Banner from './components/Banner.jsx'
import NavbarDoc from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider} from './context/CartContext'
import FormularioCompra from './components/FormularioCompra.jsx'


const App = () => {
  
  return (

    <BrowserRouter>
        <div className='mainJsx'>
        <Banner/>
        <NavbarDoc/>

      <CartContextProvider>

      <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/Teclados" element={<ItemListContainer/>}/>
        <Route exact path="/Categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/Item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/FormularioCompra" element={<FormularioCompra/>} />

      </Routes>

      </CartContextProvider>

        </div>
    </BrowserRouter>
  )
}

export default App