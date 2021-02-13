import { Fragment } from 'react';
// Titleコンポーネント
const Title = ({ username }) => {
  return (
    <Fragment>
      <h1>TODO App</h1>
      <h2>ようこそ、{username}さん</h2>
    </Fragment>
  );
};

export default Title;
