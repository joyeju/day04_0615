const fs = require('fs');
//front : 파일읽기 =>fetch

if(!fs.existsSync('myfolder'))
fs.mkdir('myfolder',(err)=>console.log(err))

if(fs.existsSync('myfolder')){
    fs.rmdir('myfolder',err=>console.log(err))
}