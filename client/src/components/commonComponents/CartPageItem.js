import React, { useState } from 'react';
import '../../CSS/SCSS/commonComponents/CartPageItem.scss';
import { FaHeart, FaRecycle } from 'react-icons/fa';
import { updateCartProduct } from '../../http/productAPI';
import { $authHost } from '../../http';

const CartPageItem = ({ product }) => {

    const [quantity, setQuantity] = useState(product.quantity);

    const handleChangeQuantity = async (id, newQuantity) => {
        const data = await updateCartProduct(id, newQuantity);
        setQuantity(newQuantity)
    }

    const handleIncreaseQuantity = () => {
        handleChangeQuantity(product.id, quantity + 1);
    }

    const handleDecreaseQuantity = () => {
        handleChangeQuantity(product.id, quantity - 1);
    }

    return (
        <div className='cart-page-item'>
            <div className='cart-item-image'>
            <img src={$authHost.defaults.baseURL + 'photos/' + product.productImg} alt='cherevac' />
            </div>
            <div className='cart-item-details'>
                <div className='cart-item-information'>
                    <p className='cart-item-name'>{product.productName}</p>
                    <p className='cart-item-name'>{product.productImg}</p>
                    <p className='cart-item-price'>{product.productPrice} $</p>
                </div>
                <div className='cart-item-btns'>
                    <div className='cart-item-delete'>
                        <button className='btn-favourite'><FaHeart /> favourite</button>
                        <button className='btn-delete'><FaRecycle /> delete</button>
                    </div>
                    <div className='cart-item-count'>
                        <button className='btn-count' onClick={handleDecreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className='btn-count' onClick={handleIncreaseQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPageItem;