// 创建以及简单的HTTP服务器程序

// 1、加载HTTP模块

var http=require("http");
// 2、创建一个HTTP服务对象
var server=http.createServer();

// 3、监听用户的请求事件（request事件）

// request 对象包含了用户请求报文中所有的内容，通过request对象可以获取
// response 对象用来向用户响应一些数据，当服务器要向用户端响应数据的时候必须使用request对象
// 有了request和response对象，就既可以获取用户提交的数据，也可以向用户响应数据
server.on("request",function(req,res){



	
	res.write("Hello World!!! 你好世界");

	// 对于每一个请求，服务器必须结束响应，否则客户端（浏览器）会一直等待服务器响应结束
	res.end();
});





// 4、启动服务

server.listen(3000,function(){
	console.log("服务器启动了，请访问：http://localhost:8080");
});

//运用这个案例简单讲解http
//引用模块
// var http = require("http");
// //创建一个服务器，回调函数表示接受到请求之后做的事情
// var server = http.createServer(function(req,res){
//     //req参数表示请求，res表示响应
//     console.log("服务器接受到了请求"+req.url);
//     //设置一个响应头
//     // res.writeHead(200,{"Content-Type":"text/plain;charset=UTF-8"});//纯文本
//     res.write("<h1>我是1标题</h1>");
//     res.write("<h2>我是2标题</h2>");
//     res.write("<h3>我是3标题</h3>");
//     res.write("<h4>我是4标题</h4>");
//     res.write("<h5>我是5标题</h5>");
//     res.write((1+2+3).toString());
//     res.end("<h1>我是一个主标题</h1>");
// });
//监听端口
// server.listen(3000,"127.0.0.1");
