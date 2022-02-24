// JSONデータの取得
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

// fetchを利用してURLにアクセスしてデータ取得
fetch(url)
.then(response => {
    // URLからレスポンスを取得したら
    return response.json();
})
.then(json => {
    // JSONデータを取得したら
    json.map(value => {
        console.log(value);
    });
});
