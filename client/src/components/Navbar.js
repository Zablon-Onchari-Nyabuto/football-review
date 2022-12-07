import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="homepage">Home</Nav.Link>
                    <Nav.Link href="forum">Forum</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                    <Nav.Link href="contactus">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;