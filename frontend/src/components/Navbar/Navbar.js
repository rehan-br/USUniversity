import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import loginimg from '../../assets/Login/loginimg.png';
import close from '../../assets/Login/Close.png';
import email from '../../assets/Login/email.png';
import pass from '../../assets/Login/pass.png';
import user from '../../assets/Login/user.png';
import navbarlogo from '../../assets/About/navbarlogo.png';
export default function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleSignup = () => {
    setShowSignup(!showSignup);
  };

  if (showLogin) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  if (showSignup) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div>
      <Navbar>
        <Container className="nav-container">
          <img className='navlogo' src={navbarlogo}></img>
          <Nav className="nav-links">
            <Nav.Link className="nav-link">
              <Link className="link" to="/home">
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
            <Nav.Link className="nav-link">
              <Link className="link" to="/profile1">
                Book
              </Link>
            </Nav.Link>
            <Link className="link" to="/reg">
              <Button className="applyOnline">Apply Online</Button>
            </Link>
            <Button className="login" onClick={handleLogin}>
              <Link className="link" to="/home" style={{ textDecoration: 'none' }}>
                Login
              </Link>
            </Button>
            <p>Arb | Eng</p>
          </Nav>
        </Container>
      </Navbar>

      {showLogin && (
        <div className="login-div">
          <div className="login-container">
            <div className="leftimg">
              <img src={loginimg}></img>
              <div className="center">Welcome</div>
            </div>
            <div className="lf">
              <form>
                <img
                  className="closetag"
                  src={close}
                  onClick={handleLogin}
                ></img>

                <h1>Login</h1>

                <input
                  className="inpemail"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="inpemail"
                  type="password"
                  placeholder="Password"
                />
                <p className="fp">Forgot Password?</p>
                <button className="lobtn">Login</button>
                <p className="">
                  Don't have an account yet?{' '}
                  <span className="scolor" onClick={handleSignup}>
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="login-div">
          <div className="login-container">
            <div className="leftimg">
              <img src={loginimg}></img>
              <div className="center">Welcome</div>
            </div>
            <div className="lf">
              <form>
                <img
                  className="closetag"
                  src={close}
                  onClick={handleSignup}
                ></img>

                <h1>Sign Up</h1>
                <p className="pline">Create an Account</p>
                <input
                  className="inpemailsign"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="inpemailsign"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="inpemailsign"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="inpemailsign"
                  type="password"
                  placeholder="Password"
                />

                <button className="signbtn">Create Account</button>
                <p className="lline">
                  Already have an account?{' '}
                  <span className="scolor" onClick={handleLogin}>
                    Login
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
