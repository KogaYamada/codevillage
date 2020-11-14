import React from 'react';

const Button = ({ onClick, title }) => {
  return (
    <button style={{ backgroundColor: 'red' }} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
