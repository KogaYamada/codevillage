import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [image, setImage] = useState('');
  const fetchImage = () => {
    axios.get('http://localhost:8000').then((response) => {
      // setImage(response.data.message);
      console.log(response);
    });
  };
  return (
    <>
      <button onClick={fetchImage}>取得</button>
      <img alt='dog' src={image} />
    </>
  );
};

export default App;
