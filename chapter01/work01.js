// ファイルの表示とコールバック処理
const fs = require('fs');

// 読み込むファイル名
const filename = 'data1.txt';
// 文字コード
const characterCode = 'utf8';

// ファイルを非同期で読み込む
fs.readFile(filename, characterCode, function(error, data) {
    // 何らかのエラーの場合
    if( error ) {
        throw error;
    }
    // ファイルデータの表示
    console.log( data );
});
