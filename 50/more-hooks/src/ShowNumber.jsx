import { memo } from 'react';

const ShowNumebr = ({ number }) => {
  console.log('shownumberコンポーネント');
  return <h1>番号:{number}</h1>;
};

export default memo(ShowNumebr);
