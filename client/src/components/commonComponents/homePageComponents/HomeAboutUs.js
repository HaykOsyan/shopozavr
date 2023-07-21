import React from 'react';

const HomeAboutUs = () => {
    return (
        <div>
            <h3>About Us</h3>
            <video height="500" style={{width:'100%'}} controls >
                <source src='./static/videos/videoplayback.mp4' type="video/mp4" />
            </video>
        </div>
    );
};

export default HomeAboutUs;