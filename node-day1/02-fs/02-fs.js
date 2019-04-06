// 执行文件操作

// ---------------实现文件写入操作--------------
// 1、加载文件操作，fs模块
var fs=require("fs");

// 2、实现文件写入操作

var msg="Hello World ,你好世界！";

// 调用fs.writeFile() 进行文件写入
// fs.writeFile(file,data[,option],callback);
// fs.writeFile(创建文件,写入数据,编码格式,回调函数);
fs.writeFile("./hello.txt",msg,"utf8",function(err){
	// 如果err====null，表示写入文件成功，没有错误;
	// 只要err里面不是null,就表示写入文件失败了！
	if(err){
		console.log("写入文件出错！具体错误："+err);
	}else{
		console.log("ok");
	}
});









// ----------------实现文件读取操作-------------
// 1、加载方式模块
var fs=require("fs");

// 2、调用fs.readFile()方法来读取文件
// fs.readFile(file[,options],callback)
// fs.readFile(读取的文件,,);
// fs.readFile("./hello.txt",function(err,data){
// 	if(err){
// 		throw err;
// 	}

// 	// data 参数的数据类型是一个Buffer对象，里面保存的就是一个一个的字节（理解为字节数组）
// 	// 把Buffer对象转化为字符串对象买点药toString()方法
// 	// console.log(data.toString("utf8"));
// 	// 调用Buffer是对象的toString()方法的时候，不传utf-8默认也是utf-8
// 	console.log(data.toString());
// });


// 在读取文件的时候，如果传递了编码，那么回调函数中的data默认就会转换为字符串
fs.readFile("./hello.txt","utf8",function(err,data){
	if(err){
		throw err;
	}
	console.log(data);

	// data 参数的数据类型是一个Buffer对象，里面保存的就是一个一个的字节（理解为字节数组）
	// 把Buffer对象转化为字符串对象买点药toString()方法
	// console.log(data.toString("utf8"));
	// 调用Buffer是对象的toString()方法的时候，不传utf-8默认也是utf-8
	// console.log(data.toString());
});