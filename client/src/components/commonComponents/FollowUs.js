import React from 'react';

const FollowUs = () => {
    return (
        <div className='follow-us mt-3'>
            <p>Follow Us</p>
            <div className="social-items">
                <a target="_blank" href="#" className="social-img-item">
                    <img src="https://static.insales-cdn.com/files/1/302/24346926/original/svg18.svg" alt="Иконка социальной сети" />
                </a>
                <a target="_blank" href="#" className="social-img-item">
                    <img src="https://static.insales-cdn.com/files/1/1816/24987416/original/svg19.svg" alt="Иконка социальной сети" />
                </a>
                <a target="_blank" href="#" className="social-img-item">
                    <img src="https://static.insales-cdn.com/files/1/304/24346928/original/svg16.svg" alt="Иконка социальной сети" />
                </a>
            </div>
        </div>
    );
};

export default FollowUs;