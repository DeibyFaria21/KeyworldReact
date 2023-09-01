import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const totalQuantity = useContext(CartContext)

  return (
    <div className='flexSide ms-4'>
      <Link className='text-white' to={"/Cart"}>
      <i className="bi bi-cart3 fs-1 carrito"></i>
      </Link>
      <h5>{totalQuantity}</h5>
    </div>
  )
}

export default CartWidget