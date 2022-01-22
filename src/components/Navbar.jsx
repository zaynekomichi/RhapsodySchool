import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
const TopNavbar = ()=>{
    return(
       <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
           <Container>
               <Navbar.Brand>
                   <img src={logo} className='fluid logoNav' alt="" />
               </Navbar.Brand>
            </Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/learning">Learning</Nav.Link>
                        <Nav.Link href="/calendar">Calendar</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/covid">Covid</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
           
       </Navbar>
    );
}

export default TopNavbar;