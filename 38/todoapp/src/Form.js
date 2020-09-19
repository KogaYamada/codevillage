import React from 'react';

const Form = ({ changeName }) => {
  return (
    <form onSubmit={changeName}>
      <input />
      <button>送信</button>
    </form>
  );
};

export default Form;
