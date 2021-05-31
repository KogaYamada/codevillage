const fetchButton = document.getElementById('fetchButton');
const image = document.getElementById('image');
const getUserButton = document.getElementById('getUserButton');

// localhostからデータを取得する
getUserButton.addEventListener('click', () => {
  // query
  fetch('http://localhost:3000/user?id=123')
    .then((response) => {
      if (!response.ok) throw new Error('response failed');
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
});

// 犬の写真を取得する
fetchButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if (!response.ok) throw new Error('response failed');
      return response.json();
    })
    .then((data) => {
      image.setAttribute('src', data.message);
    })
    .catch((error) => {
      console.log('error:', error);
    });
});
