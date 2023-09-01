import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {

  //Acá las variables que quiero usar en el componente
  const {cart, clearCart, removeItem, precioTotal} = useContext(CartContext)

    if (cart.length === 0) {
      return (
        <div className="carritoVacio">
          <p className="tituloCarritoVacio">Aún no agrega productos a su carrito.</p>
          <Link to="/Teclados"> <button className="botonRedireccional">Catálogo completo</button></Link>
        </div>
      );
    }
  
    return (
      <div>
        {cart.map((producto) => (
          <div className="CartItemContainer" key={producto.id}>
              
              {/* <div className="primeraColCart">
                <img src={producto.imagen} alt="imagenProducto"/>
              </div>
              <div className="segundaColCart">
                <h2 className="ProductName"> {producto.nombre} </h2>
                <h4 className="ProductDetail">Cantidad: {producto.quantity} </h4> 
                <h4 className="ProductDetail">Precio Unitario ARS $  {producto.valor} </h4>
              </div>
              <div className="terceraColCart">
                <h4 className="ProductDetail">Precio Total ARS $ {(producto.valor * producto.quantity)}</h4>
                <button className="deleteItem" variant="" onClick={() => removeItem(producto.id)}>Eliminar producto</button>
              </div> */}

              <div className="primeraColCart">
                <h2 className="ProductName"> {producto.nombre} </h2>
              </div>
              <div className="segundaColCart">
                <h4 className="ProductDetail">Cantidad: {producto.quantity} </h4> 
              </div>
              <div className="terceraColCart">
                <h4 className="ProductDetail">Precio Unitario</h4>
                <h4 className="ProductDetail">ARS $  {producto.valor}</h4>
              </div>
              <div className="cuartaColCart">
                <h4 className="ProductDetail">Precio Total ARS $ {(producto.valor * producto.quantity)}</h4>
                <button className="deleteItem" variant="" onClick={() => removeItem(producto.id)}>Eliminar producto</button>
              </div>

          </div>
        ))}
        <div className="botonesCarrito">
          <div className="cajaVaciarCarrito">
          <button variant="" className="botonVaciarCarrito" onClick={clearCart}>
            Vaciar el carrito
          </button>
          </div>
          <div className="checkoutContainer">
            <h3 className="precioTotal">Total de Compra: ARS $  {precioTotal}</h3>
          </div>
          <div>
            <Link to="/FormularioCompra"> <button variant="" className="botonRedireccional">Finalizar Compra</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Cart