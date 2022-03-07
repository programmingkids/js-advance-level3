// JSONデータの取得
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://cog-study.herokuapp.com/js_advance_level3/chapter04/work04/';

// fetchを利用してURLにアクセスしてデータ取得
fetch(url)
.then(response => {
    // URLからレスポンスを取得したら
    return response.json();
})
.then(json => {
    // JSONデータを取得したら
    console.log( json );
});
