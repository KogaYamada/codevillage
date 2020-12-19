import axios from 'axios';

const url = 'http://localhost:8000';

const App = () => {
  const fetchData = () => {
    // fetchの場合
    fetch(`${url}/user`, { headers: { apikey: 'abc' } }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
        });
      } else {
        console.log('通信失敗', response.statusText);
      }
    });
    // axiosの場合
    // axios
    //   .get(`${url}/user`, { headers: { apikey: 'abca' } })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log('通信失敗', error);
    //   });
  };
  return (
    <>
      <h1>取得したデータ</h1>
      <button onClick={fetchData}>取得</button>
    </>
  );
};

export default App;
