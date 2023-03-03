global.XMLHttpRequest = require('xhr2');

const url = 'https://jsonplaceholder.typicode.com';

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
        resolve(JSON.parse(xhr.response));
      } else {
        // 에러 처리를 위해 reject 함수를 호출한다.
        reject(new Error(xhr.status));
      }
    };
  });
};

// // promiseGet 함수는 프로미스를 반환한다.
// promiseGet('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))
//   .finally(() => console.log('Bye!'));

// id가 1인 post의 userId를 취득
promiseGet(`${url}/posts/1`)
  // 취득한 post의 userId로 user 정보를 취득
  .then(({ userId }) => promiseGet(`${url}/users/${userId}`))
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.error(err));