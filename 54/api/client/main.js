const fetchButton = document.getElementById('fetchButton');
const image = document.getElementById('image');

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
