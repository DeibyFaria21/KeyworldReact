import React from 'react'
/* import {useEffect, useState} from 'react' */
import productos from '../productos.json'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'



//Borrar antes de entregar (Ej JS para comparar)
/* fetch('productos.json')
.them(response => response.json()) */
/* console.log(data) */

//Borrar antes de entregar (Ej para data desde api-web)
/*   const getdata = async () => {
  const response = await fetch('productos.json')
    const data = await response.json()
    return
      data
  }  
  const [producto, setProductos] = useState([])  
  useEffect(() => {
    getdata().then((producto) => setProductos(producto))
  }, []) */


  const ItemListContainer = () => {

    const {category} = useParams()

    //Obtención de productos a través de Promesa
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
    <div className='cajaGreeting'>
      {<ItemList
      productos = {productos}
      />}
    </div>
  )
}

export default ItemListContainer