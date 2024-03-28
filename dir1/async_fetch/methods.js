import dataFromFile from './example.json' with { type: 'json' };
console.log(dataFromFile);
async function getSingleUserData() {
  let response = await fetch('https://reqres.in/api/users/2');
  let data = await response.json();
  console.log(data);
  // console.log(response) - log all data for response
}
getSingleUserData();

let nonUsed;
let nonUsed2;
let nonUsed3;

// const dataJSON = {
//     "name": "Koala",
//     "job": "worker"
// }
const dataJSObject = {
  name: 'Koala',
  job: 'worker',
};
async function createSingleUser() {
  const post_response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: dataFromFile,
  });
  let statusCode = post_response.status;
  console.log(statusCode);
  // let data_response = JSON.parse(post_response.data)
  // console.log(data_response)
}
createSingleUser();

let convertJSONInJS = JSON.stringify(dataJSObject);
console.log(convertJSONInJS);
