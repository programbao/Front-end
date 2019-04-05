
// 当前项目（包）的入口文件

// 封装一个render()函数
// 将render函数挂在到res对象上，可以通过res.render()来访问
// 实现get方式添加新闻
// -是现在原来list数组的基础上追加新闻，而不是覆盖

// 1、加载http模块
var http = require("http");
var fs=require("fs");
var path=require("path");
var mime=require("mime");
var url=require("url");


// 2、创建服务
http.createServer(function(req,res){
	//要在这里写大量的代码

	// 为res添加一个render()函数，方便后续使用
	res.render=function(filename){
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

	// 通过url模块，调用url.parse()方法解析用户请求来的url(req.url);
	var urlObj=url.parse(req.url,true);
	// console.log(urlObj);

	if(req.url==="/"||req.url==="/index"&&req.method==="get"){
		// 1.读取index.html 并返回
		res.render(path.join(__dirname,"views","index.html"));
		
	}else if(req.url==="/submit"&&req.method==="get"){
		// 2、读取submit.html并返回
		res.render(path.join(__dirname,"views","submit.html"));
		
	}else if(req.url==="/item"&&req.method==="get"){
		// 获取details.html并返回
		res.render(path.join(__dirname,"views","details.html"));
	}else if(req.url.startsWith("/add")&&req.method==="get"){
		// 表示get方法提交一条新闻
		// 要获取用户get提交过来的数据，用需要到url模块（这个模块是node.js内置的模块，不是第三方模块）
		// 既然是get提交数据，所以通过req.url皆可以直接获取这些数据，但是这样使用起来不方便（得自己起截取字符串，然后获取想要的数据）
		// 通过url模块，可以将用户get提交的数据解析成一个json对象，使用起来方便

		// console.log(req.url);
		// res.end("over");
		// 1、获取用户get提交过来的新闻数据
		// urlObj.query.title
		// urlObj.query.url
		// urlObj.query.text

		// 1.1读取data.json文件中的数据，并将读取到的数据装换为一个数组
		// 此处，读取文件的时候可以直接写一个utf8编码，这样的话，回调函数中的data就是一个字符串了
		fs.readFile(path.join(__dirname,"data","data.json"),"utf8",function(err,data){
			// 因为第一次访问网站，data.json文件本身就不纯在，所以肯定是有错误的
			// 但是这种错误，我们并不认为是网站出错了，所以不需要抛出异常
			if(err&&err.code!=="ENOENT"){
				throw err;
			}
			// 如果读取到数据了，那么就把读取到的数据datam转换为list数组
			// 如果没有读取到数据，那么就把"[]"转化为数组
			var list=JSON.parse(data||"[]");
			// 把list数组中的数据写入到data.json文件中
			list.push(urlObj.query);

			// 吧list数组中的数据写入到data.json文件中
			fs.writeFile(path.join(__dirname,"data","data.json"),JSON.stringify(list),function(err){
				if(err){
					throw err;
				}
				console.log("ok");
				// 设置响应报文头，通过响应报文头告诉浏览器执行一次跳转

				// 3、跳转到新闻列表页
				//重定向
				res.statusCode=302;
				res.statusMessage="Found";
				res.setHeader("Location","/");
				res.end();
			});
		});

		// var list =[];
		


		// 2、把用户提交的新闻数据保存到data.json文件中
		// 33、跳转到新闻列表页


	}else if(req.url==="/add"&&req.method==="post"){
		// 表示post方法提交一条新闻
	}else if(req.url.startsWith("/resources")&&req.method==="get"){
		// 如果用户请求是以/resources 开头，并且是get，就以为用户是要请求静态资源
		res.render(path.join(__dirname,req.url));
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
