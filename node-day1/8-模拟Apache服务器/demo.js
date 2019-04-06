

var http=require("http");
var path=require("path");
var fs=require("fs");
var mime=require("mime");

http.createServer(function(req,res){

	//1、获取用户请求的路径
	// req.url
	// /css/index.css
	// /images/index.png

	// 2、获取public 目录的完整路径
	var publicDir=path.join(__dirname,"public");

	// 3、根据public的路径和用户请求的路径，最终计算出用户请求的静态资源路径
	var filename=path.join(publicDir,req.url);
	// console.log(filename);
	// res.end("over");


	// 4、根据文件的完整路径去读取该文件，如果读取到了就把文件返回给用户，如果读取不到就返回404
	fs.readFile(filename,function(err,data){
		if(err){
			res.end("404");
		}else{
			// 通过第三方模块mime,

			res.setHeader("Content-Type",mime.getType(filename));
			// 如果找到了用户要读取的文件，那么直接就把改文件返回给用户
			res.end(data);
		}

	});

}).listen(3000,function(err,data){
	if(err){
		console.log(err);
	}


	console.log("http://localhost:3000");
});