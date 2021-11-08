import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" >
          <Container>
          <Navbar.Brand href="#home">Web Castillo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#about">Sobre nosotros</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default NavBar
