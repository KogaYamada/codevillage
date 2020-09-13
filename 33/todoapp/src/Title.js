import React from 'react';

const Title = ({ name }) => {
  // 分割代入: jsの構文
  return (
    <>
      <h1>React！！</h1>
      <h2>コンポーネント思考</h2>
      <p>ようこそ、{name}さん</p>
    </>
  );
};

export default Title;
