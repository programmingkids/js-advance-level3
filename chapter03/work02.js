// Promiseで失敗時
console.log( '1:処理の開始' );

// Promiseオブジェクトの作成
const promise = new Promise((resolve, reject) => {
    // 1秒後に失敗
    setTimeout(() => {
        
    }, 1000);
});

// 成功したときに動作する関数
const onResolve = (data) => {
    console.log( '3:成功した' );
    console.log( data );
};

// 失敗したときに動作する関数




// thenメソッドで成功時と失敗時に実行するコールバック関数を設定


console.log( '2:プログラムの最後' );
