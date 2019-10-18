import React from 'react'
import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
import { LinkContainer }  from 'react-router-bootstrap'

const Home = () => {
    return (
        <><Navbar bg="primary" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
<LinkContainer to="/" exact activeClassName="active">
  <Nav.Link>Home</Nav.Link>
  </LinkContainer>
  <LinkContainer to="/news" exact  activeClassName="active">
   <Nav.Link>News</Nav.Link>
  </LinkContainer>
  <LinkContainer to="/contact" exact  activeClassName="active">
  <Nav.Link>Contact</Nav.Link>
  </LinkContainer>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-light">Search</Button>
</Form>
</Navbar></>
    )
}

export default Home
