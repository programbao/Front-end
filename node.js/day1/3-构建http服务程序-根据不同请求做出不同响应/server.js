// 3-构建http服务程序-根据不同请求做出不同响应


// 1、加载HTTP模块

var http=require("http");
// 2、加载http模块
http.createServer(function(req,res){

	// 请求报文
	res.setHeader("Content-Type","text/html","charset=utf-8");
	//获取用户请求路径req.url
	// console.log(req.url);
	// 结束响应
	// res.end();


	// 通过req.url 获取用户请求的路径，根据不同的请求路径服务器做出不同的响应
	if(req.url==="/"||req.url==="/index"){
		// res.write("Hello index");
		// res.end();

		res.end("Hello index");
	}else if(req.url==="/login"){
		res.end("Hello login");
	}else if(req.url==="/register"){
		res.end("Hello Register");
	}else{
		res.end("404,not Found。客户端错误！@");
	}


}).listen(3000,function(){
	console.log("服务已启动：请访问http://localhost:3000");
});