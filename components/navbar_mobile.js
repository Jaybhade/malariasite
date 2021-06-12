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
export default function Navbar_mobile() {
  return (
    <div >
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"  style={{display:"flex",justifyContent:"space-around"}}>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
      <Nav.Link href="#link">Functions</Nav.Link>
      <Nav.Link href="#link">Gallery</Nav.Link>
      <NavDropdown title="BCC/IEC" id="basic-nav-dropdown">
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
