const fs =require('fs');
const path = require('path');

const writePath = path.join(__dirname,"datas","writeLorem.txt");
fs.writeFile(writePath,"data 쓰기",err=>
{console.log(err);


    console.log("1.write");
});

///읽어와서 쓰기 

const data = fs.readFile('./datas/lorem.txt','utf-8',(err,data)=>{
    console.log("2.",data)
})
//기존파일이 있으면 추가
// 없으면 만들어 추가 , error없음
fs.appendFile(writePath,data,err=>
{console.log(err);


    console.log("3.write");
});