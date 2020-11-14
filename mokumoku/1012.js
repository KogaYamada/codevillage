const tags = {
  1: 'Javascript',
  2: 'PHP',
  3: 'CSS',
  4: 'HTML',
  5: 'Ruby',
  6: 'Java',
  8: 'Laravel',
};

// if (tagId == !null) {
Object.keys(tags).forEach(function (key) {
  if (key == tagId) {
    console.log(tags[key]);
    // document.getElementById('tags').value = tags[key];
  }
});
// }
