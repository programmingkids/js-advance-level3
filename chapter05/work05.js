// await式とfetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

console.log( '1:処理の開始' );

// Promiseオブジェクトを返すAsync関数
async function getValue(url) {
    const response = await fetch(url);
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    return title;
}

// 関数を呼び出すが、戻り値はPromiseオブジェクト
getValue(url)
.then(data => {
    console.log( '3:データの取得' );
    console.log( data );
});

console.log( '2:プログラムの最後' );
