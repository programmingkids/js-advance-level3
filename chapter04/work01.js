// fetchを利用した取得処理
// 最新版のnode-fetchではダイナミックインポートが必要
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://www.yahoo.co.jp/';

// fetchを利用してURLにアクセスしてデータ取得


