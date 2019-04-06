// request和response对象的介绍

// -request :服务器解析用户提交的HTTP请求报文，将结果解析到request对象中。凡是要获取和用户请求相关的数据都可以通过request对象获取

// -response：在服务器端用来向用户做出响应的对象。凡是需要向用户（客户端）响应的操作，都需要通过response对象来进行。

var http=require("http");

http.createServer(function(req,res){
	// 1、获取所有请求报文头
	// req.headers返回的是一个对象，这个对象中包含了所有的请求报文头
	// console.log(req.headers);


	// 2、req.rawHeaders返回的是一个数组，数组中保存的都是请求报文头的字符串
	// console.log(req.rawHeaders);

	// 3、httpVersion获取请求客户端所使用的HTTP版本
	// console.log(req.httpVersion);


	// 4、method获取客户端请求使用的方法（post、get....）
	console.log(req.method);

	// 5、url获取这次请求的路径（获取请求报文中的请求路径，不包含主机名称、端口号、协议）
	console.log(req.url);
	res.end("over");
}).listen(3000,function(){
	console.log("http://localhost:3000");
});;