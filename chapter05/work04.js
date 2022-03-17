// await式
console.log( '1:処理の開始' );

// Promiseオブジェクトを返すAsync関数




// 関数を呼び出すが、戻り値はPromiseオブジェクト
getValue(1000, '3:こんにちは')
.then(data => {
    console.log( data );
    return getValue(1000, '4:こんにちは');
})
.then(data => {
    console.log( data );
    return getValue(1000, '5:こんにちは');
})
.then(data => {
    console.log( data );
    return getValue(1000, '6:こんにちは');
})
.then(data => {
    console.log( data );
});

console.log( '2:プログラムの最後' );
