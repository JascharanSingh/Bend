const fs = require('fs');
// fs.writeFile("message.txt", "hello", (err)=>{
//     if(err) throw err;
//     console.log("the file has been")
// })

fs.readFile("./message.txt","UTF-8", (err,data)=>{
    if(err) throw err;
    console.log(data);
});