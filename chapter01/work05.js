// 複数のコールバック処理
const fs = require('fs');

// 文字コード
const characterCode = 'utf8';

// ファイル読み込みの関数定義
function getFile( filename ) {
    // 非同期でファイルを読み込む
    fs.readFile(filename, characterCode, (error, data) => {
        // 何らかのエラーの場合
        if( error ) {
            // 例外発生
            throw error;
        }
        // ファイルデータの表示
        console.log( data );
    });
}

// ファイル読み込み関数の呼び出し
getFile( 'data5-1.txt' );
getFile( 'data5-2.txt' );
