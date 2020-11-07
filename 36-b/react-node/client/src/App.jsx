import axios from 'axios';

const App = () => {
  const fetchData = () => {
    axios.get('http://localhost:8000').then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <h1>Appです</h1>
      <button onClick={fetchData}>データ取得</button>
    </>
  );
};

export default App;
