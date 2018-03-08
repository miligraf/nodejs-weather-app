var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a === 'number' && typeof b === 'number') {
          resolve(a + b);
        } else {
          reject('Arguments must be numbers.');
        }
      }, 1500);
  });
};

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('===');
//     reject('!==');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Promise:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });

asyncAdd(1, 2).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 1);
}).then((res) => {
  console.log('New result: ', res);
}).catch(() => {
  console.log('Arguments must be numbers.');
});
