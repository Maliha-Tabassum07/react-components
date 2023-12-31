import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import EventPropagation from "./evenPropagation";

function BasicNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Hogwarts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link to="/">Home</Link>
            </div> */}
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link
              href="https://harrypotter.fandom.com/wiki/Hogwarts_School_of_Witchcraft_and_Wizardry"
              className="text-white"
            >
              More info
            </Nav.Link>
            <NavDropdown
              title="Settings"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <EventPropagation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavBar;
