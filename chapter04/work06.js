// fetch関数のPromise対応
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

const myFetch = ( url ) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            return response.text();
        })
        .then(data => {
            const title = data.match('<title[^>]*>([^<]+)</title>')[1];
            console.log(title);
            resolve();
        });
    });
};

myFetch(url)
.then(() => {
    console.log( '1回目終了' );
    return myFetch(url);
})
.then(() => {
    console.log( '2回目終了' );
    return myFetch(url);
})
.then(() => {
    console.log( '3回目終了' );
});
