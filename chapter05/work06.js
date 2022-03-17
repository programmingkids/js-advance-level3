// async/await/fetch/sleep
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

console.log( '1:処理の開始' );





// Promiseオブジェクトを返すAsync関数




// 関数を呼び出すが、戻り値はPromiseオブジェクト
getValue(1000, url)
.then(data => {
    console.log( '3:データの取得' );
    console.log( data );
    return getValue(1000, url);
})
.then(data => {
    console.log( '4:データの取得' );
    console.log( data );
    return getValue(1000, url);
})
.then(data => {
    console.log( '5:データの取得' );
    console.log( data );
    return getValue(1000, url);
})
.then(data => {
    console.log( '6:データの取得' );
    console.log( data );
});

console.log( '2:プログラムの最後' );
