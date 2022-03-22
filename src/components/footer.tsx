import logo from '../assets/logo.png';
import { Navbar, Container,Nav } from "react-bootstrap";

const Footer = ()=>{
    return(
    <Navbar collapseOnSelect fixed="bottom" expand='sm' bg='dark' variant='dark' >
        <Container>
            <Navbar.Brand>
               <h4>Rhapsody International Academy</h4>
            </Navbar.Brand>
        </Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                            <Nav.Link href="https://drive.google.com/file/d/14CT-aiFe1nXYouMiQvNoQ8tZA_HluPZf/view?usp=sharing" target="_blank">Health Policy</Nav.Link>
                            <Nav.Link href="/careers">Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
    </Navbar>
    );
}

export default Footer;