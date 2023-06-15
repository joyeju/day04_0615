const fs =require('fs');
const path = require('path');

const writePath = path.join(__dirname,"datas","writeLorem.txt");
fs.writeFile(writePath,"data 쓰기",err=>
{console.log(err);


    console.log("1.write");
});

///읽어와서 쓰기 