import React from 'react';
import '../../CSS/SCSS/commonComponents/CartPageItem.scss';
import { FaHeart, FaRecycle } from 'react-icons/fa';

const CartPageItem = ({product}) => {
    return (
        <div className='cart-page-item'>
            <div className='cart-item-image'>
                <img src='https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666235211_15-mykaleidoscope-ru-p-uvlekayushchiisya-chelovek-oboi-19.jpg' alt='cherevac'/>
            </div>
            <div className='cart-item-details'>
                <div className='cart-item-information'>
                    <p className='cart-item-name'>gdgdhgd</p>
                    <p className='cart-item-price'>78945 $</p>
                </div>
                <div className='cart-item-btns'>
                    <div className='cart-item-delete'>
                        <button className='btn-favourite'><FaHeart/> favourite</button>
                        <button className='btn-delete'><FaRecycle/> delete</button>
                    </div>
                    <div className='cart-item-count'>
                        <button className='btn-count'>-</button>
                        <span>count</span>
                        <button className='btn-count'>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPageItem;