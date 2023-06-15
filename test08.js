// 비동기 처리는 async
// try{}catch()finally{}

const fs =require('fs');
const fsPromises =require('fs').promises;
const path = require('path');


const fileOption = async ()=>{
    try{
        const data = await fsPromises.readFile('./datas/lorem.txt','utf-8')
        console.log("1.readFile :",data);
        console.log("2.console.log");
    }catch(err){
        console.log(err)
    }finally{
        //try코드에서 에러 없이도 반드시 
        //catch 구문이 실행되도 반드시 처리
        console.log("finally 반드시 실행");
        //db.close
    }
}
fileOption();