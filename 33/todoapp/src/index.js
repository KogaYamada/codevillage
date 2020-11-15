import React from 'react'; // reactを使うよ
import ReactDOM from 'react-dom'; // reactをhtmlに表示したいよ

import axios from 'axios';

import App from './App'; // パス

// render関数は2つの引数をとる
// 1. 描写したいJSX(HTMLもどき)要素
// 2. 描写させたい場所

// コンポーネント思考(パーツ)

const Async = () => {
  const [image, setImage] = React.useState('');
  const onClick = async () => {
    try {
      const result = await axios.get(
        'https://dog.ceo/api/breeds/image/randosm'
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={onClick}>取得</button>
      <img src={image} />
    </>
  );
};

ReactDOM.render(<Async />, document.getElementById('root'));
