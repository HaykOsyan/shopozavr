import React, { useContext, useEffect, useState } from 'react';
import CartPageItem from '../components/commonComponents/CartPageItem';
import '../CSS/SCSS/pages/Cart.scss';
import { NEWORDER_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { fetchOneCart } from '../http/productAPI';
import jwtDecode from 'jwt-decode';

const Cart = () => {

    const history = useNavigate();
    const { user } = useContext(Context);
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const calculateTotal = (products) => {
        return products.reduce((sum, product) => sum + product.sum, 0);
    };

    const calculateQuantity = (products) => {
        return products.reduce((quantity, product) => quantity + product.quantity, 0);
    };
    useEffect(() => {
        if (user.isAuth) {
            const decodedToken = jwtDecode(localStorage.getItem('token'));
            const cartId = decodedToken.cartId;
            fetchOneCart(cartId)
                .then(response => {
                    setCartProducts(response); // Assuming the products are under response
                    setTotal(calculateTotal(response)); // Calculate total sum
                    setQuantity(calculateQuantity(response));
                })
                .catch(error => {
                    console.error('Error fetching cart:', error);
                });
        } else {
            console.log('not auth')
        }
    }, []);
// }, [cartProducts]);

    return (
        <div className='cart-main'>
            <div className='cart-items'>
                {cartProducts.map((product, index) => {
                    return (
                        <CartPageItem key={index} product={product}/>
                    )
                })}
            </div>
            <div className='cart-information'>
                <h3>In the cart</h3>
                <p className='cart-count'>Products <span>{quantity}</span></p>
                <button className='btn-promo-code'>Enter Promo please</button>
                <p className='cart-total'>{total} $</p>
                <button className='bnt-order' onClick={() => history(NEWORDER_ROUTE)}>Order</button>
            </div>
        </div>
    );
};

export default Cart;