const fs = require('fs');

const path = require('path');


//  동기처리 ,비동기처리 async
//front : 파일읽기 =>fetch

// fs.readFile('./datas/lorem.txt',(err,data)=>{
//     if(err) console.error(err);

//     console.log(data);
//     console.log(data.toString());
// })

// fs.readFile('./datas/lorem.txt','utf-8',(err,data)=>{
//     if(err) console.log(err);
    
//     console.log(data)
// })

// const readPath = path.join(__dirname + 'datas' + 'lorem.txt');
// console.log(readPath);

// fs.readFile(readPath,'utf-8',(err,data)=>{
//     if(err) console.log(err);
    
//     console.log(data)
// })

// const readJson = path.join(__dirname + 'datas' + 'user.json');

// fs.readFile(readJson,(err,data)=>{
//     if(err) console.log(err);
    
//     console.log(data); //Buffer
//     console.log(data.toString); //문자열 그대로 읽기

//     const user = JSON.parse(data);
//     console.log(JSON.parse(data)) //js object
//     o
    
//     const {first_name,last_name} = Json.parse(data);
//     console.log(first_name,last_nae)

  
// })

const myUser = require('./datas/user.json')
console.log(myUser);

// node.js : 코드 순서대로 처리된다는 보장이 없다.
// 싱글쓰레드 : 한버네 하나의 코드만 실행됨
// 처리 => 처리 : 느려요 
// 처리 순서가 달라지고, data를 읽기 완료 전 처리하면 문제 발생
// 비동기 처리 : 순차처리 되도록 해주고 완료시키고 , 다음처리를 