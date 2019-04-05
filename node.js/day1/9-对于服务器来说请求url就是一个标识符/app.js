
var http=require("http");
var path=require("path");
var fs=require("fs");
// var mime=require("mime");

http.createServer(function(req,res){
	if(req.url==="/index.do"||req.url==="/index.html"){
		fs.readFile(path.join(__dirname,"/public","index.html"),function(err,data){
			if(err){
				throw err;
			}
			res.end(data);
		});
	}
}).listen(3000,function(){
	console.log("http://localhost:3000");
});