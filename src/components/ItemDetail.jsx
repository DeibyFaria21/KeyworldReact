/* import Item from './Item' */
import Card from 'react-bootstrap/Card'
/* import {useParams} from 'react-router-dom' */
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext, useState, useEffect} from 'react'
//Eliminado porque demora el GIF
/* import Loading from "./Loading" */


const ItemDetail = ({productos}) => {

  const [quantityAdded, setQuantityAdded] = useState(0)
  //Eliminado porque demora el GIF
  /*   const [loading, setLoading] = useState(true) */

  const {addItem} = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const { id, nombre, descripcion, valor } = productos;

    const item = {id, nombre, descripcion, valor}

    addItem(item, quantity)
  }

//Eliminado porque demora el GIF
  /* useEffect(() => {
    setTimeout(()=> {
    setLoading(false)
    },1500)
    }, [])
    if(loading){
      return <Loading/>
    } */

  return (
    <div className="itemDetail">
      <div key={productos.id} className="detalleProducto">
        <img src={productos.imagen} className="imagenDetalle" text="teclado"/>
        <div className="itemDetailCaja">
          <Card.Text className="tituloDetalle">
            {productos.nombre}
          </Card.Text>
          <Card.Text className='descripcionDetalle'>
            {productos.descripcion}
          </Card.Text>
          <Card.Text className="valorDetalle">
            ARS $ {productos.valor}
          </Card.Text>
          <div className='cajaSumaResta'>
            {quantityAdded > 0 ? (<Link to={"/Cart"}> <button className='botonAgregar'> Producto agregado! Ver en Carrito</button></Link>)
              : (<ItemCount initial={1} onAdd={handleOnAdd} />)}
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ItemDetail