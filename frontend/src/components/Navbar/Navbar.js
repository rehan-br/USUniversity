import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
export default function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };
  return (
    <div>
      <Navbar>
        <Container className="nav-container">
          <Navbar.Brand className="logo">Logo</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link className="nav-link">
              <Link className="link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/service">
                Service
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/country">
                Country
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
            <Link className="link" to="/reg">
              <Button className="applyOnline">Apply Online</Button>
            </Link>
            <Button className="login" onClick={handleLogin}>
              <Link
                className="link"
                to="/login"
                style={{ textDecoration: 'none' }}
              >
                Login
              </Link>
            </Button>
            <p>Arb | Eng</p>
          </Nav>
        </Container>
      </Navbar>

      {showLogin && (
        <div className="login-div">
          <div className="login-container"></div>
        </div>
      )}
    </div>
  );
}
