import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../CSS/SCSS/HomeWallpaper.scss';

const HomeWallpaper = ({ wallPaper }) => {
    return (
        <div className='wallpaper-main'>
            <div className='wallpaper-img'>
                <img className='w-100' src={wallPaper.img} alt='wallpaper' />
            </div>
            <div className='wallpaper-bottom'>
                <div>
                    <h4>{wallPaper.header}</h4>
                    <p>{wallPaper.text}</p>
                </div>
                <div className='w-25'>
                    <Link to={'/catalog'}>
                        <Button variant='primary'>All Goods</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeWallpaper;