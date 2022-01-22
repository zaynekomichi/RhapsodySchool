import logo from '../assets/logo.png';
import { Navbar, Container,Nav } from "react-bootstrap"
const Footer = ()=>{
    return(
    <Navbar collapseOnSelect fixed='bottom' expand='sm' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand>
               Rhapsody International Academy
            </Navbar.Brand>
        </Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Container>
                            <Nav.Link href="https://">Policy</Nav.Link>
                            <Nav.Link href="/about">Careers</Nav.Link>
                            <Nav.Link href="/learning"><i className="fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                        </Container>
                        
                    </Nav>
                </Navbar.Collapse>
    </Navbar>
    );
}

export default Footer;