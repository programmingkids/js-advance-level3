// fetchをチェーンでつないだ通信処理
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

// fetchを利用してURLにアクセスしてデータ取得


