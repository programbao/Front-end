// 解决编码问题



// 1、加载HTTP模块

var http=require("http");
// 2、创建一个HTTP服务对象
var server=http.createServer();

// 3、监听用户的请求事件（request事件）

// request 对象包含了用户请求报文中所有的内容，通过request对象可以获取
// response 对象用来向用户响应一些数据，当服务器要向用户端响应数据的时候必须使用request对象
// 有了request和response对象，就既可以获取用户提交的数据，也可以向用户响应数据
server.on("request",function(req,res){


	// 解决乱码的思路：服务器通过设置http响应报文头，告诉浏览器使用相应的编码解析
	// res.setHeader(发的数据的类型,是什么类型(纯文本，HTML....);什么编码来解析);
	res.setHeader("Content-Type","text/plain; charset=utf-8");//响应报文头
	
	res.write("Hello World!!! 你好世界");

	// 对于每一个请求，服务器必须结束响应，否则客户端（浏览器）会一直等待服务器响应结束
	res.end();
});





// 4、启动服务

server.listen(3000,function(){
	console.log("服务器启动了，请访问：http://localhost:3000");
});