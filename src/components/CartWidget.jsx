import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className='flexSide ms-4'>
      <Link className='text-white' to={`/Cart`}>
      <i className="bi bi-cart3 fs-1 carrito"></i>
      </Link>
      <h5>4</h5>
    </div>
  )
}

export default CartWidget