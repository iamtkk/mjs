global.XMLHttpRequest = require('xhr2');

const getPromise = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 서버의 응답을 콘솔에 출력한다.
        resolve(JSON.parse(xhr.response));
      } else {
        reject(`${xhr.status} ${xhr.statusText}`);
      }
    };
  });
};

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
/*
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere ...",
    "body": "quia et suscipit ..."
  }
  */
