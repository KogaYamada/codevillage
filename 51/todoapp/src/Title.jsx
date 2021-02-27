import { Fragment } from 'react';

const Title = ({ username }) => {
  return (
    <Fragment>
      <h1>TODOアプリ</h1>
      <h2>ようこそ、{username}さん</h2>
    </Fragment>
  );
};

export default Title;
