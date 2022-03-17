// コールバック処理でのエラー対応
const fs = require('fs');

// 読み込むファイル名
const filename = 'tekito.txt';
// 文字コード
const characterCode = 'utf8';

// 存在しないファイルを非同期で読み込むのでエラーが発生
fs.readFile(filename, characterCode, (error, data) => {
    // 存在しないファイルなので、エラー発生
    
    
    
});
