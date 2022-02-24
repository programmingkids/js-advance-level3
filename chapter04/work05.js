// fetchの関数化
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

const myFetch = ( url ) => {
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(data => {
        const title = data.match('<title[^>]*>([^<]+)</title>')[1];
        console.log(title);
    });
};

myFetch(url);
