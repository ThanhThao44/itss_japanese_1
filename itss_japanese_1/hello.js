#!/usr/bin/env node

'use strict';

// 文字列を変数に代入
/*const text = 'HelloWorld';
console.log(text);
console.log('HelloWorld'); // 標準出力
*/
/* 処理の計測 */
/*
console.time('timer'); // 計測開始
console.timeEnd('timer'); // 計測終了
*/

/*const str = "num";
const num = 123;
console.log(str + " = " + num);
console.log(`1 + 2 = ` + (1 + 2) + ` です。`);


console.log(`${str} = ${num}`);
console.log(`1 + 2 = ${1 + 2} です。`);

console.log("string text line 1 string text line 2");
// テンプレートリテラル
console.log(`string text line 1 
string text line 2`);

var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a +
b) + ".");

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);

console.log( 1 == '1' );
console.log( 1 !== true );
console.log( 1 === '1' );
console.log( 1 !== true );
console.log( 2 > 1 );
console.log( 1 >= 1 );
console.log( 2 < 1 );
console.log( 1 <= 1 );

let hoge = 10;
console.log( hoge );
hoge += 10; // => 20
console.log( hoge );
hoge -= 10; // => 10
console.log( hoge );
hoge *= 2; // => 20
console.log( hoge );
hoge /= 2;
console.log( hoge );
hoge %= 4; // => 2
console.log( hoge );
hoge++;
console.log( hoge );
hoge--;
console.log( hoge );


const age = 24;

let kin = age >= 20 ? 'adult' : 'kids';

console.log(kin);


const arr = [123, 456, 789]; // []で囲むと配列になる

console.log(arr[0]); // 最初の要素にアクセス

console.log(arr.length); // 配列の長さ

arr.push('abc'); // 配列に要素を追加

console.log(arr);

console.log(arr.reverse()); // 配列の順番を逆に



const arr = [123, 456, 789];
arr.reverse();
for (const value of arr) {
console.log(value);
}
// キーを取り出したい場合は keys() を使う
for (const key of arr.keys() ) {

console.log(key + " is " + arr[key]);
}
// キーと値の配列を取り出したい場合は entries() を使う
for (const entry of arr.entries()) {
console.log(entry);
}
*/
// 引数の配列の要素を順番に表示
for ( const arg of process.argv.slice(2)) {
    console.log(arg);
}
/*arr.reverse();
for (const key of arr.keys() ) {
    console.log((n-key) + "番目は" + arr[key] + "です");
    if((n-key)===1){
        break;
    }
    console.log();
}*/



