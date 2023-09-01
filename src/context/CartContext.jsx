import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  const[cart, setCart] = useState([])
  const [precioTotal, setPrecioTotal] = useState(0)

  useEffect(() => {
    //Actualizador de precio en el carrito
    const precioTotalRefresh = cart.reduce((total, product) => total+product.valor*product.quantity,0)
    setPrecioTotal(precioTotalRefresh)
  }, [cart])


  const addItem = (item, quantity) => {
    if(!isInCart(item.id)){
      setCart(prev => [...prev, {...item, quantity}])
    }else{
      console.error("El producto ya fue agregado")
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }

  const totalQuantity = cart.reduce((total, product) => total+product.quantity, 0)


  //Pasando valores en formato JS como props, resultantes de las operaciones a realizar
  return (
    
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, precioTotal}}>

        {children}    

    </CartContext.Provider>

  )
}

export default CartContextProvider