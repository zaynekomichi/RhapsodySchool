import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link,Router} from 'react-router-dom';
import logo from '../assets/logo.webp';
const TopNavbar = ()=>{
    return(
        <div>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
           <Container>
               <Navbar.Brand>
                   <img src={logo} className='logoNav' alt="" />
               </Navbar.Brand>
            </Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="learning">Learning</Nav.Link>
                        <Nav.Link href="gallery">Gallery</Nav.Link>
                        <Nav.Link href="calendar">Calendar</Nav.Link>
                        <Nav.Link href="blog">Blog</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
       </Navbar>
       
        </div>
       
    );
}

export default TopNavbar;