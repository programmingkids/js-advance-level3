// JSONデータの取得
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const url = 'https://cog-study.herokuapp.com/js_advance_level3/chapter04/work04/';

// fetchを利用してURLにアクセスしてデータ取得


