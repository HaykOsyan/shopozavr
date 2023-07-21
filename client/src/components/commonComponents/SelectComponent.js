import React, { useState } from 'react';

const SelectComponent = ({ chooseText, items, showArrow }) => {
  const [arrowUp, setArrowUp] = useState(true);

  const handleSelectClick = () => {
    setArrowUp(!arrowUp);
  };

  const handleSelectBlur = () => {
    setArrowUp(true);
  };

  return (
    <select className='select-component' onClick={handleSelectClick} onBlur={handleSelectBlur}>
      {showArrow ? (arrowUp ?
        <option>
          {chooseText} &#5167;
        </option> :
        <option>
          {chooseText} &#5123;
        </option>
      ) :
        <option>
          {chooseText}
        </option>
      }

      {items.map((item, index) => {
        return <option key={index}>{item}</option>;
      })}
    </select>
  );
};

export default SelectComponent;
