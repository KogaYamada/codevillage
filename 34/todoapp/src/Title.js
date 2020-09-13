import React from 'react';

const Title = ({ name }) => {
  // 分割代入:javascript
  return (
    <React.Fragment>
      <h1>Hello, React!!</h1>
      <h3>ようこそ、{name}さん</h3>
    </React.Fragment>
  );
};

export default Title;
