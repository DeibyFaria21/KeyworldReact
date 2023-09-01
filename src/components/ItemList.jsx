import Item from './Item'


const ItemList = ({productos}) => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='row'>
        <h2 className='tituloCatalogo'>Nuestro Catálogo de Productos</h2>
        {productos.map((p) => {
          return (
            <div className='col-md-3 p-3'>
              
              <Item
              key= {p.id}
              id= {p.id}
              categoria= {p.categoria}
              nombre= {p.nombre}
              imagen= {p.imagen}
              />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default ItemList