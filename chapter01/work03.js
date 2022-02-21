// コールバック処理でのエラー対応
const fs = require('fs');

// 読み込むファイル名
const filename = 'tekito.txt';
// 文字コード
const characterCode = 'utf8';

// ファイルを非同期で読み込む
fs.readFile(filename, characterCode, (error, data) => {
    // 何らかのエラーの場合
    try {
        if( error ) {
            // 例外発生
            throw error;
        }
        // ファイルデータの表示
        console.log( data );
    } catch ( error ) {
        // 例外をキャッチ
        console.log( 'エラーです' );
    }
});
