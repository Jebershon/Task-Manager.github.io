import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Contact(){
    return(
        <Container style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Navbar style={{backgroundColor:"red"}} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Contact us</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><Icon.Whatsapp style={{color:"white"}}/> 93426 29075&nbsp;&nbsp;</Nav.Link>
                            <Nav.Link href="https://instagram.com/jebxson?igshid=NzZlODBkYWE4Ng=="><Icon.Instagram style={{color:"white"}}/>  Jebxson&nbsp;&nbsp;</Nav.Link>
                            <Nav.Link href="https://github.com/Jebershon"><Icon.Github style={{color:"white"}}/>  Jebershon &nbsp;&nbsp;</Nav.Link>
                            <Nav.Link href="https://maps.app.goo.gl/3XZXAsz2SnyprNLs6"><Icon.GeoAltFill style={{color:"white"}}/>&nbsp;&nbsp;</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}
export default Contact;