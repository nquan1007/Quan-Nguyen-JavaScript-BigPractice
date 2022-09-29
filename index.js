var testApi = 'https://nquan-sneakers-api.herokuapp.com/users';

fetch(testApi)
  .then(response => {
    return response.json();
  })
  .then(users => {
    console.log(users);
  })