import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, Button, InputGroup, Form } from 'react-bootstrap';
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import CatalogModal from './modalComponents/CatalogModal';
import { FaSearch, FaHeart, FaUser, FaCartPlus } from 'react-icons/fa';
import '../CSS/SCSS/NavBar.scss';

const NavBar = () => {

  const categories = [
    {
      name: 'muj',
      img: './static/photos/photo_clothes.jpg'
    },
    {
      name: 'kids',
      img: './static/photos/kkids_clothes.jpg'
    },
    {
      name: 'jeans',
      img: './static/photos/jeans.jpg'
    },
    {
      name: 'muj',
      img: './static/photos/photo_clothes.jpg'
    },
    {
      name: 'kids',
      img: './static/photos/kkids_clothes.jpg'
    },
    {
      name: 'jeans',
      img: './static/photos/jeans.jpg'
    },
    {
      name: 'muj',
      img: './static/photos/photo_clothes.jpg'
    },
    {
      name: 'kids',
      img: './static/photos/kkids_clothes.jpg'
    },
    {
      name: 'jeans',
      img: './static/photos/jeans.jpg'
    },
  ]

  const { user } = useContext(Context)
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const logOut = () => {
    localStorage.setItem('token', '')
    user.setUser({})
    user.setIsAuth(false)
    history(HOME_ROUTE)
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">SHOPOZAVR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {user.isAuth ?
              <Nav className="me-auto">
                {/* <NavLink to={CART_ROUTE}>Cart</NavLink> */}
                <Button
                  className="mr-3"
                  variant={"outline-dark"}
                  onClick={() => history(ADMIN_ROUTE)}
                >
                  Admin Panel
                </Button>
                <Button
                  className="mr-3"
                  variant={"outline-dark"}
                  onClick={() => history(ADMIN_ROUTE + '/adding_page')}
                >
                  Adding Page
                </Button>
                <Button
                  variant={"outline-dark"}
                  onClick={() => logOut()}
                >
                  Logout
                </Button>
              </Nav>
              :
              <Nav className="main-nav me-auto">
                <Button className='btn-modal-catalog' variant='primary' onClick={handleShow}>Catalog</Button>
                <InputGroup>
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button id="button-addon2">
                    <FaSearch />
                  </Button>
                </InputGroup>
                <Button className='btn-nav-icons' variant='outline-dark'>
                  <FaUser />
                </Button>
                <Button className='btn-nav-icons' variant='outline-dark'>
                  <FaHeart />
                </Button>
                <Button className='btn-nav-icons' variant='outline-dark'>
                  <FaCartPlus />
                </Button>
                <span>0$</span>
                <Button className='btn-nav-login' onClick={() => history(LOGIN_ROUTE)} variant={"outline-danger"}>Login</Button>
              </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CatalogModal show={show} onHide={handleClose} categories={categories} />
    </>
  );
};

export default NavBar;