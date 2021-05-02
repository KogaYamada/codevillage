import { memo } from 'react';

// memo:
// propsの値を比較しているだけ
// 返すJSXが変わっていてもpropsが変わらなければ常に同じJSXを返す

const ShowNumebr = ({ number, onClick }) => {
  console.log('shownumberコンポーネント');
  return (
    <h1>
      番号:{number} <button onClick={onClick}>Click ME!</button>
    </h1>
  );
};

export default memo(ShowNumebr);
