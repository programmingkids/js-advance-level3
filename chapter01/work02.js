// コールバック処理の実行順序
const fs = require('fs');

// 読み込むファイル名
const filename = 'data2.txt';
// 文字コード
const characterCode = 'utf8';

console.log( '1:処理開始' );

// ファイルを非同期で読み込む
fs.readFile(filename, characterCode, function(error, data) {
    // 何らかのエラーの場合
    if( error ) {
        throw error;
    }
    console.log( '3:ファイルの表示処理開始' );
    // ファイルデータの表示
    console.log( data );
    console.log( '4:処理終了' );
});

console.log( '2:プログラムの最後' );
