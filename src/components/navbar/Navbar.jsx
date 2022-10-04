import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Hamburger from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/Auth/authReducer';
import Signup from '../auth/Signup';
import styles from './navbar.module.css';
import stella from '../assets/stella-logo.png';

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //grab the username if logged in
  const username = useSelector((state) => state.auth.username);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  //modal handlers
  const [showLog, setShowLog] = React.useState(false);
  const handleCloseLog = () => setShowLog(false);
  const handleShowLog = () => setShowLog(true);

  // //login  handler
  // function handleLogin(e) {
  //   e.preventDefault();
  //   navigate('/signup');
  // }
  //logout  handler
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    setOpen(!isOpen);
    navigate('/');
  }

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {showLog && (
        <Signup
          closeNav={() => setOpen(!isOpen)}
          show={showLog}
          onHide={handleCloseLog}
        />
      )}
      <Navbar
        expanded={isOpen}
        className="d-flex justify-content-between"
        collapseOnSelect
        bg="light"
        expand="lg"
        fixed="top"
        onToggle={() => setOpen(!isOpen)}
      >
        <Container fluid>
          <NavLink to="/" className={styles.nav_title}>
            <img src={stella} width="70px" />
            Stella
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" onClick={() => setOpen(!isOpen)}>
                Home
              </Nav.Link>
              {username ? (
                <Nav.Link
                  as={NavLink}
                  to="/surveyPage"
                  onClick={() => setOpen(!isOpen)}
                >
                  Daily Survey
                </Nav.Link>
              ) : (
                ''
              )}
              {username ? (
                <Nav.Link
                  as={NavLink}
                  to="/userTrends"
                  onClick={() => setOpen(!isOpen)}
                >
                  My Trends
                </Nav.Link>
              ) : (
                ''
              )}
              {isAdmin ? (
                <Nav.Link
                  as={NavLink}
                  to="/admin"
                  onClick={() => setOpen(!isOpen)}
                >
                  Admin
                </Nav.Link>
              ) : (
                ''
              )}
            </Nav>
            {/* Signed in as */}
            <Nav className="mx-3">
              <Stack
                direction="horizontal"
                gap={3}
                className="d-flex justify-content-end"
              >
                {username && (
                  <Navbar.Text className="d-flex align-items-center">
                    Signed in as:{' '}
                    <Nav.Link
                      as={NavLink}
                      to={`/`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      {username || 'guest'}{' '}
                    </Nav.Link>
                  </Navbar.Text>
                )}

                {/* signin / sign out */}
                {!window.localStorage.getItem('isLoggedIn') && (
                  <Button variant="primary" size="sm" onClick={handleShowLog}>
                    Sign In
                  </Button>
                )}
                {window.localStorage.getItem('isLoggedIn') && (
                  <>
                    <div className="vr" />
                    <Button variant="info" size="sm" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </>
                )}
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
