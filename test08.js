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

        await fsPromises.writeFile("./datas/newWrite.txt",data);
        console.log('3.write complete');

        await fsPromises.appendFile("./datas/newWrite.txt","append text");
        console.log('4.appendFile')

        await fsPromises.rename("./datas/newWrite.txt","./datas/rename.txt",err =>console.log(err));
        console.log('5. rename')

        if(!fs.existsSync("./model")){
            await fsPromises.mkdir('./model',err=>{if(err) throw err});
        }
        console.log("6. mkdir");
        // fs.readdir('./',(err,filelist)=>{

        // })
        await fsPromises.readdir('./',err => console.log(err));
        console.log("",fi)
        
    }catch(err){
        console.log(err)

        //err =>{if(err)throw err}
        //에러를 처리한다
    }finally{
        //try코드에서 에러 없이도 반드시 
        //catch 구문이 실행되도 반드시 처리
        console.log("finally 반드시 실행");
        //db.close
    }
}
fileOption();

lorem;