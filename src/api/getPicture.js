const API_KEY = '36814624-a59c7cc317d847f43d1c32006';

axios.get('/users').then(res => {
  console.log(res.data);
});
