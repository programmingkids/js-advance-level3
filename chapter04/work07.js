// fetch関数での待機処理
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';





myFetchAndSleep(url, 1000)
.then(() => {
    console.log( '1回目終了' );
    return myFetchAndSleep(url, 1000);
})
.then(() => {
    console.log( '2回目終了' );
    return myFetchAndSleep(url, 1000);
})
.then(() => {
    console.log( '3回目終了' );
});
