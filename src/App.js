import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <header><div className="header-content">
      <Navbar bg="light" expand="lg">
      <Container>
      <img src="/assets/pizzalogo.png"/>
        <Navbar.Brand href="#home">Vic's Pizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Food</Nav.Link>
            <Nav.Link href="#link">Drinks</Nav.Link>
            <Nav.Link href="#link">Dessert</Nav.Link>
            <Nav.Link href="#link">Order Online</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </header>
   

  );
}

export default App;
