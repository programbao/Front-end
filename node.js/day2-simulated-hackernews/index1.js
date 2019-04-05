
// 当前项目（包）的入口文件

// 封装一个render()函数

// 1、加载http模块
var http = require("http");
var fs=require("fs");
var path=require("path");
var mime=require("mime");

// 2、创建服务
http.createServer(function(req,res){
	//要在这里写大量的代码


	// 设计路由
	// 当用户请求 / 或 /index 时，显示新闻列表 - get请求
	// 当用户请求 /item 时，显示新闻详情 -get请求
	// 当用户请求 /submit时，显示添加新闻页面 -get 请求
	// 当用户请求 /add时，将用户提交的新闻保存到data.json文件中 -get请求
	// 当用户请求 /add时，将用户提交的新闻保存到data.json文件中 -post请求

	// 先根据用户请求的路径（路由），将对应的和html页面显示出来

	// 将用户请求的url和method转换为小写字母

	req.url=req.url.toLowerCase();
	req.method=req.method.toLowerCase();
	if(req.url==="/"||req.url==="/index"&&req.method==="get"){
		// 1.读取index.html 并返回
		render(path.join(__dirname,"views","index.html"),res);
		
	}else if(req.url==="/submit"&&req.method==="get"){
		// 2、读取submit.html并返回
		render(path.join(__dirname,"views","submit.html"),res);
		
	}else if(req.url==="/item"&&req.method==="get"){
		// 获取details.html并返回
		render(path.join(__dirname,"views","details.html"),res);
	}else if(req.url==="/add"&&req.method==="get"){
		// 表示get方法提交一条新闻
	}else if(req.url==="/add"&&req.method==="post"){
		// 表示post方法提交一条新闻
	}else if(req.url.startsWith("/resources")&&req.method==="get"){
		// 如果用户请求是以/resources 开头，并且是get，就以为用户是要请求静态资源
		render(path.join(__dirname,req.url),res);
	}
	else{
		res.writeHead(404,"Not Found",{
			"Content-Type":"text/html;charset=urf-8"
		});
		res.end("404,Page Not Found.");
	}


	// var viewsname=path.join(__dirname,"views");
	// var filename=path.join(viewsname,req.url);
	// fs.readFile(filename,function(err,data){
	// 	if(err){
	// 		res.end("404 Not Found");
	// 	}else {
	// 		res.end(data);
	// 	}
	// });



}).listen(3000,function(){
	console.log("服务器已启动,请访问：http://localhost:3000");
});

// 封装一个render函数
function render(filename,res){


	fs.readFile(path.join(filename),function(err,data){
			if(err){
				// throw err;
				res.writeHead(404,"Not Found",{"Content-Type":"text/html;charset=utf-8"});
				res.end("404 ,NOt found.");
				return;
			}
			res.setHeader("Content-Type",mime.getType(filename));
			res.end(data);
		});
}