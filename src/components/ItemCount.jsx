import { useState } from 'react';

const ItemCount = ( {onAdd} ) => {

const [quantity, setQuantity] = useState(1)

const sumar =()=>{
   setQuantity(quantity+1)
}
const restar=()=>{
  if (quantity > 1){
    setQuantity(quantity-1)
  }
}


  return (
    <>
    <div className='cajaContador'>
      <div className='boxSumaResta'>
        <button onClick={restar} className='botonRestar'>-</button>
        <p className='espacioNumber'>{quantity}</p>
        <button onClick={sumar} className='botonSumar'>+</button>
      </div>
      <button variant="" className='agregarCarrito' onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
    </div>
    </>
  )
}

export default ItemCount