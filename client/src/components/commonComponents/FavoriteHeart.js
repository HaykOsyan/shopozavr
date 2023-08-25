import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { addFavorite, isFavorite, removeFavorite } from '../../http/productAPI';
import '../../CSS/SCSS/commonComponents/FavoriteHeart.scss';

const FavoriteHeart = ({userId, productId}) => {

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        isFavorite(userId, productId)
            .then(response => setFavorite(response.isFavorite))
            .catch(error => console.error('Error checking favorite status:', error));
    }, [userId, productId]); 
    
    const handleFavoriteClick = async () => {
        try {
            if (favorite) {
                await removeFavorite(userId,productId);
                console.log('Removed from favorites');
            } else {
                await addFavorite(userId, productId);
                console.log('Added to favorites');
            }
            setFavorite(!favorite); // Toggle the favorite state
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button className={`favorite-heart ${favorite ? 'active-heart' : ''}`} onClick={handleFavoriteClick}>
            <FaHeart/>
        </button>
    );
};

export default FavoriteHeart;