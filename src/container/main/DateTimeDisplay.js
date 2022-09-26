import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <span className='f-number'>{value}</span>
      <span className='f-txt'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;