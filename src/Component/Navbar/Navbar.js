import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Navbar.css"
import { useSetRecoilState } from 'recoil';
import { SearchAtom } from '../../atoms';
function Header() {
  const Search=useSetRecoilState(SearchAtom)
  return (
    <>
      <Navbar bg="dark" variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand to="/">Blog App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">New Blog</Nav.Link>
         
          </Nav>
           <span className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>Search(e.target.value)}
            />
            
            <Button variant="outline-success">Search</Button>
            </span>
        </Container>
      </Navbar>
      </>
  );
}

export default Header;
