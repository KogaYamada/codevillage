import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:8000/item').then((response) => {
      console.log(response.data);
    });
  }, []);
  return <div>App Component</div>;
};
export default App;
