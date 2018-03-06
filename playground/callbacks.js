var getUser = (id, callback) => {
    var user = {
      id,
      name: 'J'
    };

    setTimeout(() => {
      callback(user);
    }, 3000);
};

getUser(5, (userObject) => {
  console.log(userObject);
});
