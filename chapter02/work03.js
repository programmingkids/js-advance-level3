// setTimeoutでアロー関数の利用
console.log( '1:処理の開始' );

// 1回限りの非同期処理の呼び出し
setTimeout(() => console.log( '3:こんにちは' ),3000);

console.log( '2:プログラムの最後' );
