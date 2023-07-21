import React, { useState } from 'react';
import '../../CSS/SCSS/RangeInput.scss';

const RangeInput = ({min,max}) => {
    const [lowerValue, setLowerValue] = useState(0);
    const [upperValue, setUpperValue] = useState(100);

    const handleLowerChange = (event) => {
        if (lowerValue < upperValue) {
            const value = parseInt(event.target.value);
            setLowerValue(value - 1);
        }
        else {
            setUpperValue(lowerValue + 1)
        }
    };

    const handleUpperChange = (event) => {
        if (upperValue > lowerValue) {
            const value = parseInt(event.target.value);
            setUpperValue(value);

        }
        else {

            setLowerValue(upperValue - 1)
        }
    };

    return (
        <div className="range-inputs">
            <input type="range" min="0" max="100" value={lowerValue} id="lowerRange" onChange={handleLowerChange} />
            <input type="range" min="0" max="100" value={upperValue} id="upperRange" onChange={handleUpperChange} />
            <div className="values">
                <span id="lowerValue">From {lowerValue} </span>
                <span id="upperValue"> to {upperValue}</span>
            </div>
        </div>
    );
};

export default RangeInput;
