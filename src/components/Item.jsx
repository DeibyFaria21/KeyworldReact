import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({id,  categoria, nombre, descripcion, valor, imagen, comprar}) => {
  
  return (
    <Card>
      {/* <Card.Img variant="top" src={imagen}/> */}
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Categoría: {categoria}
        </Card.Text>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          {valor}
        </Card.Text>
        <Link to={`/Item/${id}`}>
        <Button variant="primary">Detalles</Button>
        </Link>
       
      </Card.Body>
    </Card>
  )
}

export default Item