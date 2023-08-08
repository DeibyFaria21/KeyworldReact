import React from 'react'
import Item from './Item'
/* import productos from '../productos.json' */


const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map((p) => {
        return (
          <Item
          id= {p.id}
          key= {p.id}
          categoria= {p.categoria}
          nombre= {p.nombre}
          descripcion= {p.descripcion}
          imagen= {p.imagen}
          />
          )
        })
      }
    </div>
  )
}

export default ItemList