import { Fragment } from 'react';
import Title from './Title';
import Form from './Form';
import List from './List';

const App = () => {
  const name = 'こうが';
  return (
    <Fragment>
      <Title />
      <Form />
      <List />
    </Fragment>
  );
};
export default App;
