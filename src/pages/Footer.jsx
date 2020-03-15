import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  MDBContainer, MDBFooter } from "mdbreact";


const Footer = () => {

  return(
  <div>
    <MDBFooter color="blue" className="font-small pt-4 mt-4 " id ="bottom">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://aca.am/en/"> Armenian Code Academy </a>
          </MDBContainer>
    </MDBFooter>
    
</div>)
};
export default Footer; 