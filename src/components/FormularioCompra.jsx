import {Button, Col, Form, Row} from 'react-bootstrap';
import { useState } from 'react';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';



const FormularioCompra = () => {
  const { cart, clearCart } = useContext(CartContext)
  
  const [orderId, setOrderId] = useState(null)
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  
  const [formVisible, setFormVisible] = useState(true)
  
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [metodoPago, setMetodoPago] = useState("Tarjeta de Credito")


  const db = getFirestore()


  const handleSubmit = (e) => {
    e.preventDefault();

  //Validacion de los campos del formulario
  if (nombre === "" ||
      apellido === "" ||
      email === "" ||
      metodoPago === "") {
    alert("Por favor, verifique que no ha quedado ningún campo sin completar.");
    return;
  }

    addDoc(orderCollection, order).then(({ id }) =>
      setOrderId(id),
      setOrderSubmitted(true),
      setFormVisible(false))

    sendOrder()
    clearCart()


  }

  const order = {
    nombre,
    apellido,
    email,
    metodoPago
  }

  const orderCollection = collection(db, "orden")

  const sendOrder = () => {
    const order = {
      comprador: { nombre: { nombre }, apellido: { apellido }, email: { email }, metodoPago: { metodoPago } },
      productos: { cart },
      total: {},
    }
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then(({ id }) => setOrderId(id))
  }

  return (
    <div className='cajaFormulario'>
      {formVisible && (
        <Form onSubmit={handleSubmit} className='FormContainer'>
          <Row className="col-lg-6 m-auto">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label className='FormLabel'>Nombre</Form.Label>
              <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="col-lg-6 m-auto">
            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label className='FormLabel'>Last name</Form.Label>
              <Form.Control type="text" onChange={(e) => setApellido(e.target.value)} />
            </Form.Group>
          </Row>
          
          <Row className="col-lg-6 m-auto">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className='FormLabel'>Email</Form.Label>
              <Form.Control type="email" placeholder="usuario@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="col-lg-6 m-auto">
            <Form.Group as={Col} controlId="formGridPay">
            <Form.Label className='FormLabel'>Metodo de Pago</Form.Label>
            <Form.Select aria-label="Default select example" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
              <option value="Tarjeta de Credito">Tarjeta de Credito</option>
              <option value="Tarajeta de Debito">Tarjeta de Debito</option>
              <option value="MercadoPago">MercadoPago</option>
            </Form.Select>
            </Form.Group>
          </Row>
          
          <div className='botonFinalizarCompra'>
          <button variant="" className="CounterButton SubmitButton" type="submit">
            Finalizar Orden de Compra
          </button>
          </div>
        </Form>
        
      )}

      {orderSubmitted && (
        <div className='cajaPedidoFinalizado'>
          <h5 className='ItemTitle'>Pedido Finalizado!</h5>
          <p className='ItemTitle'>Tu número de pedido es: {orderId}</p>
          <Link to={"/Teclados"}> <button variant="" className="CounterButton"> Catálogo Completo</button> </Link>
        </div>
      )}
    </div>
  );
}

export default FormularioCompra