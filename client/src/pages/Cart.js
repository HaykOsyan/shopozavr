import React from 'react';
import CartPageItem from '../components/commonComponents/CartPageItem';
import '../CSS/SCSS/pages/Cart.scss';
import { NEWORDER_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const history = useNavigate();

    return (
        <div className='cart-main'>
            <div className='cart-items'>
                <CartPageItem/>
            </div>
            <div className='cart-information'>
                <h3>In the cart</h3>
                <p className='cart-count'>Products <span>5</span></p>
                <button className='btn-promo-code'>Enter Promo please</button>
                <p className='cart-total'>5550 $</p>
                <button className='bnt-order' onClick={() => history(NEWORDER_ROUTE)}>Order</button>
            </div>
        </div>
    );
};

export default Cart;