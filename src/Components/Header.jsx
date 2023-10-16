import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
function Head(){
    return(
        <header style={{backgroundColor:"red",color:"black",height:"10vh",justifyContent:"center",display:"flex",alignItems:"center"}}>
            <Container>
            <h3 className="text-center" style={{fontFamily:"monospace",fontSize:30}}><Icon.BookmarkFill/> Task Manager
            </h3>
            </Container>
        </header>
    );
}
export default Head;