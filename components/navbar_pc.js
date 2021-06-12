import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import URL from "../hooks/url";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar_pc() {
  return (
    <div >
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:0}}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg></Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto"  style={{display:"flex",justifyContent:"space-around",alignItems:"center",flex:1}}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
      <Nav.Link href="#link">Functions</Nav.Link>
      <Nav.Link href="#link">Gallery</Nav.Link>
      <NavDropdown title="BCC/IEC" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Audio</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Video</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Print Publicity</NavDropdown.Item>
        {//<NavDropdown.Divider />
        }
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
