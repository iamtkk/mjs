const https = require('https');
let url = 'https://fcm.iamtk-sb.pmang.cloud/index.html';

const handler = async function (event) {
  const promise = new Promise(function (resolve, reject) {
    https
      .get(url, (res) => {
        resolve(res.statusCode);
      })
      .on('error', (e) => {
        reject(Error(e));
      });
  });
  return promise;
};

handler().then((res) => console.log(res));
