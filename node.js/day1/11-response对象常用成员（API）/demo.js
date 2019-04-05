var http=require("http");

http.createServer(function(req,res){
	// 3、设置http响应状态码
	// res.statusCode 设置http响应状态码
	// res.statusMessage设置http响应的状态码对应的消息
	// rew.statusCode=404;
	// res.statusMessage="Not Found";

	res.writeHead(404,"Not Found",{
		"Content-Type":"text/plain;charset=utf-8"
	});

	// 1、res.write();
	res.write("hello world! 你好世界！！！");

	// 2、通过res.setHeader()来设置响应报文头
	// res.setHeader()要放在res.write()和res.end()之前设置
	// 因为即使我们没有设置响应报文头，系统也会默认设置响应报文头，并且默认发送个浏览器，当已经发送过响应报文头后，就不能砸通过res.setHeader设置响应报文头了否则就会报错
	// res.setHeader("Content-Type","text/plain;charset=utf-8");
	res.setHeader("Content-Type","text/plain;charset=utf-8")

	
	// 4、res.writeHead();
	// 直接向客户端响应（写入）http 响应报文头
	// 建议在res.write()之前设置和res.end()



	// 5、每个请求都必须要调用的一个方法
	// 结束响应（请求）
	// 告诉服务器该响应的报文头、报文体等等全部已经响应完毕了，可以考虑本次响应结束
	// res.end()要响应数据的话，数据必须是String类型或者是Buffer类型
	res.end();

});