import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({id,  categoria, nombre, descripcion, imagen}) => {
  
  return (
    <Card>
      <Card.Img variant="top" src={imagen} className='ImagenCard'/>
      <Card.Body>
        
        <Card.Title>
          {nombre}
        </Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          Categoría: {categoria}
        </Card.Text>
        <Link to={`/Item/${id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
       
      </Card.Body>
    </Card>
  )
}

export default Item