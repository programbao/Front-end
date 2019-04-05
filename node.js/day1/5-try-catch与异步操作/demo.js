// 异步操作，太容易-catch 无法捕获异常的
// 对于异步操作，要通过判断错误号（err.code）来进行出错处理

var fs=require("fs");

try{
	fs.write("./abc","你好，我要奋斗了","utf8",function(err){
		console.log("ok");
	});
}catch(e){
	console.log("出错了"+e);
}