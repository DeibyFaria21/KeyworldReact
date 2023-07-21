import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, Button, MenuList, MenuItem} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import {Container, Nav, Navbar} from 'react-bootstrap'

const NavbarDoc = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container className='navContainer'>
          <Navbar.Brand href="#Greeting"><h1 className="nav-link active text-success" aria-current="page">Keyworld</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#Home">Quienes somos?</Nav.Link>
              <Nav.Link href="#Teclados60%">Teclados 60%</Nav.Link>
              <Nav.Link href="#Teclados65%">Teclados 65%</Nav.Link>
              <Nav.Link href="#Teclados75%">Teclados 75%</Nav.Link>
              <Nav.Link href="#TecladosTKL">Teclados TKL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarDoc