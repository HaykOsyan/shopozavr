import React from 'react';
import '../../CSS/SCSS/commonComponents/OrderItem.scss';

const OrderItem = ({ item }) => {
  const { image, name, count, price } = item;

  return (
    <div className='order-item'>
      <div className='image'>
        <img src={image} alt={name} />
      </div>
        <div className='name'>{name}</div>
        <div className='count-price'>
          <span>{count} * ${price}</span>
        </div>
    </div>
  );
};

export default OrderItem;
