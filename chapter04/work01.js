// fetchを利用した取得処理
// 最新版のnode-fetchではダイナミックインポートが必要
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

// fetchを利用してURLにアクセスしてデータ取得
const promise = fetch(url);

// fetchはPromiseオブジェクトを返す
promise
.then(response => {
    // URLからレスポンスを取得したら
    return response.text();
})
.then(data => {
    // レスポンスボディを取得したら
    console.log(data);
});
