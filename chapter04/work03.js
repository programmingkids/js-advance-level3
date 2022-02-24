// テキストデータの取得
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

// fetchを利用してURLにアクセスしてデータ取得
fetch(url)
.then(response => {
    // URLからレスポンスを取得したら
    return response.text();
})
.then(data => {
    // レスポンスボディを取得したら
    console.log(data);
});
