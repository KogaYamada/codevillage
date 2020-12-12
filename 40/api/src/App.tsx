import axios from 'axios';
import { FC, useState } from 'react';

const App: FC = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchData = () => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setImageUrl(response.data.message);
      })
      .catch((error) => {
        console.log('失敗', error);
      });
  };

  return (
    <>
      <img alt='dog' src={imageUrl} />
      <button onClick={fetchData}>取得</button>
    </>
  );
};

export default App;
