//Importación de productos desde archivo json
/* import productos from '../productos.json' */
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
      const db= getFirestore()
      const oneItem = doc(db, "teclados", `${id}`)
      getDoc(oneItem).then((snapshot) =>{
        if(snapshot.exists()) {
          const docs = snapshot.data();
          setProductos({id: snapshot.id, ...docs})
        }
      })
      }, [])


  return (
    <div>
        <ItemDetail
        productos={productos}
        />
    </div>
  )
}

export default ItemDetailContainer