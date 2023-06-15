const fs = require('fs');

const path = require('path');


//  동기처리 ,비동기처리 async
//front : 파일읽기 =>fetch

const data = fs.readFile('./datas/lorem.txt','utf-8',(err,data)=>{
    if(err) console.error(err);

    console.log(data);
   
})

console.log('콘솔 제일 먼저 처리');
console.log(data);
