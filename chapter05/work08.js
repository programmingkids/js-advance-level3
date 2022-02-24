// sleepのアロー関数化
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// アクセスするURL
const sites = [
    'https://www.yahoo.co.jp/',
    'https://www.amazon.co.jp/',
    'https://www.rakuten.co.jp/',
    'https://www.youtube.com/',
];

console.log( '1:処理の開始' );

const sleep = (seconds) => new Promise((resolve, reject) => setTimeout(resolve, seconds));

// Promiseオブジェクトを返すAsync関数
async function getValue(seconds, url) {
    const response = await fetch(url);
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    await sleep(seconds);
    return title;
}

(async () => {
    for(const url of sites) {
        const title = await getValue(1000, url);
        console.log( url );
        console.log( title );
        console.log('-----');
    }
})();
