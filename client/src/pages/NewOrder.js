import React, { useState } from 'react';
import '../CSS/SCSS/pages/NewOrder.scss';
import OrderItem from '../components/commonComponents/OrderItem';

const NewOrder = () => {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle sending the data to the server or perform other logic for processing the order.
        // For example:
        const formData = {
            address,
            phone,
            name,
            comments,
            email,
            paymentMethod,
        };
        console.log(formData);
    };
    const itemData = {
        image: 'url-to-your-image.jpg',
        name: 'Sample Item',
        count: 2,
        price: 10.99,
    };

    return (
        <div className='new-order-main'>
            <div className='order-form'>
                <h2>Order Placement</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Address:</label>
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type='tel'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Comments:</label>
                        <textarea
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Payment Method:</label>
                        <div>
                            <input
                                type='radio'
                                id='cash'
                                value='cash'
                                checked={paymentMethod === 'cash'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            />
                            <label htmlFor='cash'>Cash</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='card'
                                value='card'
                                checked={paymentMethod === 'card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            />
                            <label htmlFor='card'>Card</label>
                        </div>
                    </div>
                    <button type='submit'>Place Order</button>
                </form>
            </div>
            <div className='order-items'>
                <OrderItem item={itemData} />
                <OrderItem item={itemData} />
                <div className='order-subtotals'>
                    <div className='order-subtotal'>
                        <p className='subtotal-text'>roduct Price</p>
                        <p className='subtotal-amount'>7555</p>
                    </div>
                    <div className='order-subtotal'>
                        <p className='subtotal-text'>delivery Price</p>
                        <p className='subtotal-amount'>100</p>
                    </div>
                </div>
                <div className='order-total'>
                        <p className='total-text'>Order Price</p>
                        <p className='total-amount'>7555</p>
                </div>
            </div>
        </div>
    );
};

export default NewOrder;
