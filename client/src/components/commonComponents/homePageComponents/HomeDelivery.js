import React from 'react';
import { FaCoins, FaMapMarked, FaTractor } from 'react-icons/fa';
import '../../../CSS/SCSS/HomeDelivery.scss';

const HomeDelivery = () => {
    return (
        <div className='div-delivery'>
            <div>
                <FaTractor/>
                <p>Fast delivery</p>
            </div>
            <div>
                <FaCoins/>
                <p>Actions</p>
            </div>
            <div>
                <FaMapMarked/>
                <p>Place</p>
            </div>
        </div>
    );
};

export default HomeDelivery;