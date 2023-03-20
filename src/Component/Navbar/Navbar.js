import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Navbar.css"
import { useSetRecoilState } from 'recoil';
import { SearchAtom } from '../../atoms';
import { useNavigate } from 'react-router-dom';
function Header() {
  const Search=useSetRecoilState(SearchAtom)
  const tonav=useNavigate()
  return (
    <>
      <Navbar bg="dark" variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand to="/">Blog App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={()=>tonav("/")}>Home</Nav.Link>
            <Nav.Link onClick={()=>tonav("/newblog")} >New Blog</Nav.Link>
         
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
