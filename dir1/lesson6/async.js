function hi() {
  console.log('hi');
}

function checkELement() {
  console.log('searching for UI EL');
}

setTimeout(hi, 1000); // timeout: 1000 => 1 sec

function hiWithParam(name) {
  console.log(`hi ${name}`);
}

// const timeoutId = setTimeout(hiWithParam, 1000, 'Koala')
// clearTimeout(timeoutId)

hiWithParam('Koala2');

// const intervalId = setInterval(checkELement, 500)

// let timeoutId2 = setTimeout(function check() {
//     console.log('Checking the UI header element') // automation for UI
//     timeoutId2 = setTimeout(check, 500)
// }, 1000)

// promise
// new Promise(
//     function(resolve, reject) {
//       ···
//       if (···) {
//           resolve(value); // success
//       } else {
//           reject(reason); // failure
//       }
//   }
// );

let myOwnPromise = new Promise(function (resolve, reject) {
  resolve('resultf of function based on promise - good');
  reject(new Error('bad results of promise'));
});

myOwnPromise.then(
  (result) => console.log(result),
  (error) => console.log(error),
);

let myOwnPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Good Result'), 1000);
});
myOwnPromise2.then(
  (result) => console.log(result),
  (error) => console.log(error),
);
let myOwnPromise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject('!Errorka!'), 1000);
});

// myOwnPromise3.catch(() => 'some value').then(console.log)
myOwnPromise3
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log('finall message of promise');
  });

// new Promise((resolve)) => resolve(value)
Promise.resolve(200).then((data) => {
  console.log(data);
});

// Promise.all([myOwnPromise, myOwnPromise2, myOwnPromise3]) // is one from array promise failed - all will be failed
// Promise.allSettled([myOwnPromise, myOwnPromise2, myOwnPromise3])
// is onde from array failed - we recieive result of all promises
// [
//     {
//       status: 'fulfilled',
//       value: 'Done',
//     },
//     {
//       status: 'rejected',
//       reason: '!Errorka!',
//     },
//     {
//       status: 'fulfilled',
//       value: 'GooD Result',
//     },
//   ];

async function hello() {
  return 'Hello';
}

/*console.log(hello()) => */ hello().then(console.log);

const urlFetch = 'https://api.github.com/users/github';

async function getDataApi(url_param) {
  const response = await fetch(url_param);
  const data = await response.json();
  return data;
}

getDataApi(urlFetch).then(console.log);

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json()
// console.log(data)

// async function postDataApi(url_param) {
//     const post_response = await fetch({
//         method: "POST",
//         url: url_param,
//         body: JSON.stringify({name: "Jane Doe"}),
//         headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer 21423ngij9230ui432'}
//     })
//     const post_r_data = await post_response.json()
//     return post_r_data
// }

// postDataApi('https://api.github.com/users/github').then(console.log)

// async function postDataApi2(url_param) {
//     try {
//         const post_response = await fetch({
//             method: "POST",
//             url: url_param,
//             body: JSON.stringify({name: "Jane Doe"}),
//             headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer 21423ngij9230ui432'}
//         })
//         const post_r_data = await post_response.json()
//         return post_r_data
//     } catch (error) {
//         console.log(error)
//     }
// }
