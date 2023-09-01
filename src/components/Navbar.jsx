import CartWidget from './CartWidget'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarDoc = () => {
  return (
    <div>
      <Navbar expand="lg" className="navContainer">
        
          <Link className="bootLink" to={'/'}>
          <Navbar.Brand className='m-auto nav-link active text-succes'><h1>Keyworld</h1></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">

              <Nav.Link><Link className="bootLink text-reset" to={"/Teclados"}>Teclados All</Link></Nav.Link>
              <Nav.Link><Link className="bootLink text-reset" to={`/Categoria/${'Teclado60'}`}>Teclados 60%</Link></Nav.Link>
              <Nav.Link><Link className="bootLink text-reset" to={`/Categoria/${'Teclado65'}`}>Teclados 65%</Link></Nav.Link>
              <Nav.Link><Link className="bootLink text-reset" to={`/Categoria/${'Teclado75'}`}>Teclados 75%</Link></Nav.Link>
              <Nav.Link><Link className="bootLink text-reset" to={`/Categoria/${'TecladoFZ'}`}>Teclados FZ</Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        
      </Navbar>
    </div>
  );
}

export default NavbarDoc