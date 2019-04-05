// 读取文件路径的问题

var fs = require("fs");


// 解决在文件读取中 ./相对路径的问题
// 而不是相对于正在执行的这个js文件来查找hello.txt
// fs.readFile("./hello.text","utf8",function(err,data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// });


// 解决在文件读取中 ./相对路径的问题
// 解决：__dirname __filename
// __dirname:表示，当前正在执行的js文件所在的目录
// __filename:表示，当前正在执行的js文件的完整路径
// console.log(__dirname);
// console.log(__filename);




//  var filename=__dirname + "\\" + "hello.txt";

// 加载path模块
var path= require("path");

var filename=path.join(__dirname,"hello.txt");
console.log(filename);


fs.readFile(filename,"utf8",function(err,data){
	if(err){
		throw err;
	}
	console.log(data);
});






