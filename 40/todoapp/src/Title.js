import React from 'react';

const Title = ({ name }) => {
  return (
    <React.Fragment>
      <h1>Todo App!</h1>
      <h2 className="title">ようこそ{name}さん</h2>
    </React.Fragment>
  );
};

export default Title;
