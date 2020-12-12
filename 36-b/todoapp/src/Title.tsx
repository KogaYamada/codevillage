import React, { FC } from 'react';

type Props = {
  name: string;
};

const Title: FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Todo App</h1>
      <h2>ようこそ{name}さん</h2>
    </div>
  );
};

export default Title;
