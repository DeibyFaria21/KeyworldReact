import React from 'react'
/* import  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; */
import {Card, Button} from 'react-bootstrap'


const Item = ({id, categoria, nombre, descripcion, imagen}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Categoría: {categoria}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item