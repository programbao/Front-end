// 根据用户不同请求-读取不同HTML文件响应


// 1、加载HTTP模块

var http=require("http");

// 加载fs模块
var fs=require("fs");

// 加载path模块
var path=require("path");

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
		// 读取index.html文件

		fs.readFile(path.join(__dirname,"htmlls","index.html"),function(err,data){
			if(err){
				throw err;

			}
			// 把读取到的index.html 中的内容直接发送给浏览器
				res.end(data);
		});
	}else if(req.url==="/login"){
		fs.readFile(path.join(__dirname,"htmlls","login.html"),function(err,data){
			if(err){
				throw err;

			}
			// 把读取到的index.html 中的内容直接发送给浏览器
				res.end(data);
		});
	}else if(req.url==="/register"){
		fs.readFile(path.join(__dirname,"htmlls","register.html"),function(err,data){
			if(err){
				throw err;

			}
			// 把读取到的index.html 中的内容直接发送给浏览器
				res.end(data);
		});
	}else if(req.url==="/images/index.jpg"){
		fs.readFile(path.join(__dirname,"images","index.jpg"),function(err,data){
			if(err){
				throw err;
			}

			res.setHeader("Content-Type","image/jpeg");
			// 把读取到的index.html 中的内容直接发送给浏览器
			res.end(data);
		});
	}
	else{
		fs.readFile(path.join(__dirname,"htmlls","err.html"),function(err,data){
			if(err){
				throw err;

			}
			// 把读取到的index.html 中的内容直接发送给浏览器
				res.end(data);
		});
	}


}).listen(3000,function(){
	console.log("服务已启动：请访问http://localhost:3000");
});