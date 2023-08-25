import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, InputGroup, Form } from 'react-bootstrap';
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import CatalogModal from './modalComponents/CatalogModal';
import { FaSearch, FaHeart, FaUser, FaCartPlus } from 'react-icons/fa';
import '../CSS/SCSS/NavBar.scss';
import { toJS } from 'mobx';
import jwtDecode from 'jwt-decode';
import { fetchCartProductsByCartId } from '../http/productAPI';

const NavBar = () => {
  const [cartProductsCount, setCartProductsCount] = useState(0);
  const [total, setTotal] = useState(0);

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

  const calculateQuantity = (products) => {
    return products.reduce((quantity, product) => quantity + product.quantity, 0);
  };
  const calculateTotal = (products) => {
    return products.reduce((sum, product) => sum + product.sum, 0);
};

  // useEffect(() => {
  //   const decodedToken = jwtDecode(localStorage.getItem('token'));
  //   const cartId = decodedToken.cartId;
  //   fetchOneCart(cartId)
  //     .then(response => {
  //       setCartProductsCount(calculateQuantity(response));
  //       setTotal(calculateTotal(response));
  //     })
  //     .catch(error => {
  //       console.error('Error fetching cart:', error);
  //     });
  // })
  useEffect(() => {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const cartId = decodedToken.cartId;
    fetchCartProductsByCartId(cartId)
      .then(response => {
        setCartProductsCount(calculateQuantity(response));
        setTotal(calculateTotal(response));
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  },[total])
console.log(cartProductsCount);
  const { user } = useContext(Context);
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const logOut = () => {
    localStorage.setItem('token', '')
    user.setUser({})
    user.setIsAuth(false)
    user.setIsAdmin(false)
    history(HOME_ROUTE)
  }
  // console.log(user.isAdmin)
  console.log(user.isAuth)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">SHOPOZAVR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Button className='btn-modal-catalog' variant='primary' onClick={handleShow}>Catalog</Button>
            {user.isAdmin ?
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
                {/* {user.isAuth && (
                  <>
                    <Button className='btn-nav-icons' variant='outline-dark'>
                      <FaUser />
                    </Button>
                    <Button className='btn-nav-icons' variant='outline-dark'>
                      <FaHeart />
                    </Button>
                    <Button
                      className='btn-nav-icons'
                      variant='outline-dark'
                      onClick={() => history(CART_ROUTE + '/' + userId)}
                    >
                      <FaCartPlus />
                    </Button>
                    <span>0$</span>
                  </>
                )} */}

                {user.isAuth ? (
                  // Show the elements when user is authenticated (isAuth is true)
                  <>
                    <Button className='btn-nav-icons' variant='outline-dark'>
                      <FaUser />
                    </Button>
                    <Button className='btn-nav-icons' variant='outline-dark'>
                      <FaHeart />
                    </Button>
                    <Button
                      id='btnCart'
                      className='btn-nav-icons'
                      variant='outline-dark'
                      onClick={() => history(CART_ROUTE + '/' + toJS(user.user.id))}
                    >
                      <FaCartPlus />
                      <span className='span-cart-product-count'>{cartProductsCount}</span>
                    </Button>

                    <span>{total} $</span>
                    <Button
                      variant={"outline-dark"}
                      onClick={() => logOut()}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  // Show the "Login" button when user is not authenticated (isAuth is false)
                  <Button
                    className='btn-nav-login'
                    onClick={() => history(LOGIN_ROUTE)}
                    variant={"outline-danger"}
                  >
                    Login
                  </Button>
                )}

                {/* <Button className='btn-nav-login' onClick={() => history(LOGIN_ROUTE)} variant={"outline-danger"}>Login</Button> */}
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