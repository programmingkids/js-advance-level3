// コールバック処理でのエラー対応
const fs = require('fs');

// 読み込むファイル名
const filename = 'tekito.txt';
// 文字コード
const characterCode = 'utf8';

// 存在しないファイルを非同期で読み込むのでエラーが発生
fs.readFile(filename, characterCode, (error, data) => {
    // 存在しないファイルなので、エラー発生
    try {
        // 引数「error」はエラー情報を保持するオブジェクト
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
