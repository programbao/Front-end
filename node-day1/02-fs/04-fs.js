var fs=require("fs");


// 1、创建"01-我"目录
fs.mkdir("./我",function(err){
	if(err){
		throw err;
	}

	// 2、创建"02-是"目录
	fs.mkdir("./我/02-是",function(){
		
	});

	// 2、创建"03-谁"目录

	fs.mkdir("./我/03-谁",function(){

	});
	
});

