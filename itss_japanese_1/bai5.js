#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var a = 'xx00';
var re = /x/gi;
for(var i =0;i<10;i++) {
    var b = a.replace(re,i);
    console.log(b);
    console.log(Number(b)+1);
}
