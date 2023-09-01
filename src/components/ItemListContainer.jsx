import {useEffect, useState} from 'react'
//Importación de los productos en el json
/* import productos from '../productos.json' */
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import Loading from "./Loading"
import {collection, getDocs, getFirestore} from 'firebase/firestore'


const ItemListContainer = () => {
    const {categoria} = useParams()

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    
    
    //Obtención de datos de la db y simulación de retraso de 2 seg    
    useEffect(() => {
      setTimeout(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "teclados")
        getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
          setProductos(docs)
          setLoading(false)
        })
      }, 3000)
    }, [])

    
    //Activación del loading mientras se espera respuesta de la db
    if(loading){
      return <Loading/>
    }

    
    //filtrado de productos por categoría
    const productosFiltrados = productos.filter((productos) => productos.categoria === categoria)
    
    /* const productos{
      productos.map((producto) => (
        <div key={producto.id}>
          <h2>
            Producto: {producto.nombre}
          </h2>

        </div>
      ))
    } */

    //Suministro de props (productos filtrados o no) a ItemList con ternario
    return (
      <div className='itemListContainer'>


        { categoria ? <ItemList productos = {productosFiltrados}/> : <ItemList productos = {productos}/>}

      </div> 
    )
}

export default ItemListContainer






//Obtención de productos a través de Promesa
/* const getdata = new Promise((resolve, reject) => {
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
  }) */