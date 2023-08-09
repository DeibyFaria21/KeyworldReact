import React from 'react'
import Item from './Item'
import {useParams} from 'react-router-dom'
import CounterComponent from './CounterComponent'


const ItemDetail = ({productos}) => {

  const {id} = useParams()
  const productosFiltrados = productos.filter((producto) => producto.id == id)

  return (
    <div className='itemDetail'>
        <h2>Detalle de Producto</h2>
        {productosFiltrados.map((p) => {
          return (
            <div key={p.id} className=''>
              <Item
              key={p.id}
              categoria= {p.categoria}
              nombre= {p.nombre}
              descripcion= {p.descripcion}
              valor= {p.valor}
              /* imagen= {p.imagen} */
              />
              <CounterComponent/>
            </div>
          )
        })
        }
    </div>
  )
}

export default ItemDetail