// let express = require("express")
let request = require("request")
// let app = express()
let i =0
setInterval(()=>{
    
    request('https://blog.csdn.net/console__/article/details/81517392', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(i++) // 请求成功的处理逻辑
        }
    });
},1000*60)
// app.listen(8880)

