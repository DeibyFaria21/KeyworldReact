import React from 'react'
import productos from '../productos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const getdata = new Promise((resolve, reject) => {
        if (productos.length > 0) {
          setTimeout(() => {
            resolve(productos)
          }, 2000)
        }else{
          reject(new Error("No se encontraron productos para la venta"))
        }
      })

    getdata
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.warn(error)
      })

  return (
    <div>
        <ItemDetail
        productos={productos}
        />
    </div>
  )
}

export default ItemDetailContainer