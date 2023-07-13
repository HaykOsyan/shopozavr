import React from 'react';
import '../../CSS/SCSS/HomeKidsSection.scss';

const HomeKidsSection = () => {
    return (
        <div className='kids-section'>
            <div className='div-kids' style={{ backgroundImage: 'url("./static/photos/kids1.jpg")' }}>
                <h3>Choosing profession</h3>
                <p>Text about profession</p>
            </div>
            <div className='div-kids' style={{ backgroundImage: 'url("./static/photos/kids2.jpg")' }}>
                <h3>Choosing profession</h3>
                <p>Text about profession</p>
            </div>
        </div>
    );
};

export default HomeKidsSection;