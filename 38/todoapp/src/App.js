import React, { useState } from 'react';

import Title from './Title';
import List from './List';
import Form from './Form';

const App = () => {
  const name = 'koga';
  // props
  return (
    <React.Fragment>
      <Title name={name} />
      <List />
      <Form />
    </React.Fragment>
  );
};

export default App;
