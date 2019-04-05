
// 当前项目（包）的入口文件

// 封装一个render()函数
// 将render函数挂在到res对象上，可以通过res.render()来访问
// 实现get方式添加新闻
// -是现在原来list数组的基础上追加新闻，而不是覆盖
// 实现post提交新闻
// 实现首页显示新闻列表


// 1、加载http模块
var http = require("http");
var fs=require("fs");
var path=require("path");
var mime=require("mime");
var url=require("url");
var querystring=require("querystring");


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
	// 先根据用户请求的路径（路由），将对应的和html页面显示出来

	// 将用户请求的url和method转换为小写字母

	req.url=req.url.toLowerCase();
	req.method=req.method.toLowerCase();

	// 通过url模块，调用url.parse()方法解析用户请求来的url(req.url);
	var urlObj=url.parse(req.url,true);


	if(req.url==="/"||req.url==="/index"&&req.method==="get"){
		// 1、读取data.json文件中的数据，并将读取到的数据转换为list数组
		fs.readFile(path.join(__dirname,"data","data.json"),"utf8",function(err,data){
			if(err&&err.code!=="ENOENT"){
				throw err;
			}

			var list=JSON.parse(data||"[]");

			// 2、在服务器端使用模板引擎，将list中的数据和index.html文件中结合起来，返回给用户
			// 读取index.html 并返回
			res.render(path.join(__dirname,"views","index.html"));
		});
		

		


		
	}else if(req.url==="/submit"&&req.method==="get"){
		// 2、读取submit.html并返回
		res.render(path.join(__dirname,"views","submit.html"));
		
	}else if(req.url==="/item"&&req.method==="get"){
		// 获取details.html并返回
		res.render(path.join(__dirname,"views","details.html"));
	}else if(req.url.startsWith("/add")&&req.method==="get"){
		
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
		// 3、跳转到新闻列表页


	}else if(req.url.startsWith("/add")&&req.method==="post"){
		console.log("lasdjl");
		// 表示post方法提交一条新闻
		// 1、读取data.json文件中的数据
		fs.readFile(path.join(__dirname,"data","data.json"),"utf8",function(err,data){
			// 因为第一次访问网站，data.json文件本身就不纯在，所以肯定是有错误的
			// 但是这种错误，我们并不认为是网站出错了，所以不需要抛出异常
			if(err&&err.code!=="ENOENT"){
				throw err;
			}
			// 如果读取到数据了，那么就把读取到的数据datam转换为list数组
			// 如果没有读取到数据，那么就把"[]"转化为数组
			var list=JSON.parse(data||"[]");

			// 2、获取用户post提交的数据
			// 因为post提交数据的时候，数据量可能比较大索取会分多次进行提交，每次提交一部分数据
			// 此时要想在服务器中获取用户提交的所有数据，就必输监听request事件的data事件（因为每次浏览器提交一部分数据到服务器就会触发以一次data事件）
			// 那么，什么时候才表示浏览器吧所有数据到提交到了服务器了呢？就是request对象的end事件被触发的时候


			// 监听request的对象的data事件和end事件代码如下：
			// 声明一个数组，用来保存用户每次提交过来的数据
			var array=[];
			req.on("data",function(chunk){
				// 此处的chunk 参数，就是浏览器本次提交过来的一部分数据
				// chunk的数据类型是Buffer
				array.push(chunk);

			});

			// 监听request对象的end事件
			// 当end事件被触发的时候，表示上所有数据都已经提交完毕
			req.on("end",function(){
				// 在这个事件中只要把array中的所有数据奎总起来就好了
				// 把array中的每个buffer对象，集合起来转换为一个buffer对象

				var postBody=Buffer.concat(array);
				// console.log(postBody);
				// 把获取到的buffer对象转换为一个字符串
				postBody=postBody.toString("utf8");

				// 把post请求的查询字符串，转换为一个字符串
				postBody=querystring.parse(postBody);

				// 将用户提交的新闻push 到list中
				list.push(postBody);

				// 将新的list数组，在写入到data.json文件中
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
				

				// res.end("over");
			});
		
	});
		// 2、将读取到的数据转换为list数组

		// 3、向list数组中push一条新闻

		// 4、把list数组转换为字符串重新写入到data.json文件中

		// 5.重定向

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
