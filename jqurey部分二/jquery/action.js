 // 页面加载事件
$(function(){
  // ----------------------------------
  	// 介绍栏
  // 点击头像显示与隐藏
  	$("#photo").click(function(){
  		if($("#userinfo_detailed_0").css("display")=="block"){
  			$("#userinfo_detailed_0").css("display","none");
  		}else{
  			$("#userinfo_detailed_0").css("display","block");
  		}
  		return false;
  	});
    

  // body点击事件
    $("body").click(function(){
      // 介绍部分头像的隐藏
      $("#userinfo_detailed_0").css("display","none");
      // 更多个人信息的隐藏
      $("#userinfo").css({"zIndex":"0","right":"0"});
      // 详细用户头像隐藏
      $("#userinfo_detailed").hide();
      // 大头像隐藏
      $("#big_img").hide();

      $(".center_text").children(".center_text1").hide();
    });

  // ------------------------------------
  // 信息栏/人物栏

     // 搜索框
    	$("#text").focus(function(){
    		$("#close").css("display","block");
    		$("#search").css("background-image","url(images/bgk6_1.png)");
    		$("#contacts").css("display","none");
    		$("#contact1").css("display","block");
    	}).blur(function(){
    		$("#close").css("display","none");
    		$("#search").css("background-image","url(images/bgk6.png)");
    		$("#contacts").css("display","block");
    		$("#contact1").css("display","none");
    		$(this).val("");

    	});
      // 设置对话框中间部分的高
      var talk_centerHeight=$("#talk_center").css("height",$("#talk").innerHeight()-207+"px");

    	// 通讯
      var imgobj=null;
    	$(".contacts_all").mouseenter(function(){
    		$(this).css("backgroundColor","rgb(219, 217, 217)")
    	}).mouseleave(function(){
    		$(this).css("backgroundColor","rgb(236, 234, 232)")
    	}).click(function(){

    		// 获取联系人的姓名
    		var spanobj=$(this).children(".contect").children("span").text();
        // 获取当前用户头像
        var imgobj=$(this).children(".img").children("img").attr("src");
    		// 默认样式
    		$(".contacts_all").css("background","");
    		// 点击后的样式
    		$(this).css("background","url(images/bgk12.png)");
    		// 时间样式
    		$(".time").css("color","#b9b9b9");
    		// 点击后时间的样式
    		$(this).children(".time").css("color","rgb(146, 145, 145)");
    		// 对话框的微信logo显示与隐藏
    		
    		$("#talk_img").css("display","none");
    		// 对话框标题部分显示
    		$("#talk_header").css("borderBottom","1px solid rgb(231, 231, 231)");
    		// 对话框标题的显示----根据点击联系人的不同显示不同的标题
    		$("#title").text(spanobj).css("display","inline-block");

        // 备注默认显示
        $("#detailed_span").show();
        // 输入框隐藏
        $("#modify").hide();
        // 详细用户头像下的标题对应当前点击对象名
        $("#userinfo_img .footer_font").text(spanobj);
        // 详细用户的头像对应当前用户的头像
        $("#userinfo_img").css({"background":"url("+imgobj+")","backgroundSize":"100% 100%"});
        // 详细用户信息用户名对应当前的用户名
        $("#name1").text(spanobj);
        // 详细用户备注对应当前的用户名
        $("#detailed_span").text(spanobj);
        // $("#modify").attr("value",spanobj);
        $("#modify").val(spanobj);
        // 详细用户信息用户头像对应当前的用户头像
        $("#detailed_img").css({"background":"url("+imgobj+")","backgroundSize":"100% 100%"});


    		// 更多按钮的显示
    		$("#talk_more").css("display","block");
    		// 输入内容框的显示
    		$(".talk_footer").css("display","block");

        // 切换清除对话框的内容
        $("#center_content").empty();
        // 事件清空
        $("#newTime").children("span").text("");
    	});


  // ------------------------------------
  // 对话框部分
  // 点击标题更多出现用户信息
    $("#talk_more").click(function(){
        // 判断信息框是否出现在外面
        if($("#userinfo").css("right")!="-250px"){
            // 判断主框距离浏览器的距离
            if($("#contain").offset().left>=250){

              $("#main").css("overflow","visible");
              // 用户详细信息部分样式设置
              $("#userinfo").css("zIndex","0").animate({right:'-250px'},"fast");
            }else{

              $("#main").css("overflow","hidden");
              // 用户详细信息部分样式设置和事件处理
              $("#userinfo").css({"zIndex":"2","right":"-250px"}).animate({right:'0'},"fast",function(){
                $("#main").css("overflow","visible");
              });
            }
        }else{
            $("#userinfo").css({"zIndex":"0","right":"0"});
        }
        return false;
    });

    $("#userinfo").click(function(){
      // 详细用户头像隐藏
      $("#userinfo_detailed").hide();
      // 大头像隐藏
      $("#big_img").hide();
      return false;
    });;

    // ------------------------------------------
    // 用户信息部分
    // 头像
    $("#userinfo_img").click(function(){
      // 详细用户信息部分显示
      if($("#userinfo_detailed").css("display")=="none"){
        $("#userinfo_detailed").show();
      }else{
        $("#userinfo_detailed").hide();
      }
      
      $("#big_img").hide();
      return false;
    });
    $("#userinfo_detailed").click(function(){
      return false;
    });
  // 点击大头像显示大图
  $("#detailed_img").click(function(){
     // $(this).parent().parent().hide();

    $("#big_img").show();
    // 设置大头像对应当前用户的头像
    $("#contacts .contacts_all").each(function(){
      if($(this).children(".time").css("color")=="rgb(146, 145, 145)"){
        imgobj1=$(this).children(".img").children("img").attr("src");
        $(".bigImg").css({"background":"url("+imgobj1+")","backgroundSize":"100% 100%"});
      }
    });
    // 详细用户头像隐藏
    $("#userinfo_detailed").hide();
    return false;
  });

  // 点击关闭隐藏大头像
  $("#close1").click(function(){
    $("#big_img").hide();
    return false;
  });
  // 点击大图各个部分
  $("#big_img").click(function(){
    return false;
  });

  // 点击备注更改用户名
  $("#detailed_span").dblclick(function(){
    $(this).hide();
    $("#modify").show().focus().blur(function(){
      // 获取备注的值
      var modifyobj=$("#modify").val();
      $("#contacts .contacts_all").each(function(){
        if($(this).children(".time").css("color")=="rgb(146, 145, 145)"){
          $(this).children(".contect").children("span").text(modifyobj);
        }
      });

      $("#title").text(modifyobj);
    });
    return false;
  });

  // 键盘点击事件
  $(document).keydown(function(e){
    if(e.keyCode==13){
      $("#modify").trigger("blur");
      $("#textarea").val($("#textarea").val().replace(/[\r\n]/g,""))
      console.log($("#textarea").is(":focus"));
      if($("#textarea").is(":focus")){
        $("#send").trigger("click");
      }
      
    }
    // if(e.keyCode==32){
    //   if($("#textarea").val().indexOf(" ")!=-1){
    //     $("#textarea").html("&nbsp;");
    //   }
      
    // }
    
  });

//注册鼠标拖拽事件
// 鼠标按下事件---问题
  // 大头像拖拽
  $("#handle").mousedown(function(e){
    // 获取鼠标距离页面的横坐标距离-图片框距离页面的横坐标距离
    var spaceX=e.clientX-$("#big_img").offset().left;
    var spaceY=e.clientY-$("#big_img").offset().top-100;
    var zoom = $("body").css("zoom");
    // 移动事件
    $(document).mousemove(function(e){
      var x=e.pageX/zoom-spaceX;
      var y=e.pageY/zoom-spaceY;
      $("#big_img").css("left",x+"px");
      $("#big_img").css("top",y+"px");
    });
  });

  // 框架拖拽
  

  $("#talk_header").mousedown(function(e){
    $("body").trigger("click");
    // 获取鼠标距离页面的横坐标距离-图片框距离页面的横坐标距离
    var spaceX=e.clientX-$("#contain").position().left;
    var spaceY=e.clientY-$("#contain").position().top;
    var zoom = $("body").css("zoom");
    // 移动事件
    $(document).mousemove(function(e){
      var x=e.pageX/zoom-spaceX;
      var y=e.pageY/zoom-spaceY;
      $("#contain").css("left",x+"px");
      $("#contain").css("top",y+"px");
    });
  });


  // 鼠标松开取消拖拽
  $(document).mouseup(function(){
    $(document).off("mousemove");
  });


// -------------------------------
  // 功能消息免打扰
  $(".userinfo_button").click(function(){
    if($(this).children(".userinfo_bgk").css("width")=="0px"){
      $(this).children(".userinfo_bgk").animate({"width":"40px"},"fast")
      $(this).children(".userinfo_circular").animate({"left":"25px"},"fast")
      $("#contacts .contacts_all").each(function(){
        if($(this).children(".time").css("color")=="rgb(146, 145, 145)"){
          $(this).children(".clock").show();
        }
      });
    }else{
      $(this).children(".userinfo_bgk").animate({"width":"0px"},"fast")
      $(this).children(".userinfo_circular").animate({"left":"5px"},"fast")
      $("#contacts .contacts_all").each(function(){
        if($(this).children(".time").css("color")=="rgb(146, 145, 145)"){
          $(this).children(".clock").hide();
        }
      });
    }
  });
// --------------------------------

// 内容显示区域禁止鼠标右键事件
$("#talk_center").contextmenu(function(){
  return false;
});


// 输入框发送
$("#send").on("click",function(e){
  // 判断是否空格
  if($.trim($("#textarea").val()) == ''){
      $("#textarea").val("");
      $("#send_tips").show(200);
      var time=setTimeout(function(){
        $("#send_tips").hide(200);
        clearTimeout(time);
      },2000)
    }
  //判断输入框是否有内容
  if($("#textarea").val().length!=0){
    

    var div4=$("<div></div>");
    div4.addClass("center_text1");
    var textword=["复制","撤回","转发","收藏","所选","引用","翻译","删除"];
    for(var i=0;i<8;i++){
      $("<div>"+textword[i]+"</div>").appendTo(div4);
    }

    // 发送
    var div1=$("<div></div>").addClass("center_txt").appendTo($("#center_content")).show();
    var div2=$("<div></div>").addClass("center_img").css("background","url(images/photo1.png) no-repeat").appendTo(div1);
    var div3=$("<div></div>").addClass("center_text").appendTo(div1).click(function(){
      return false;
    });
    var span=$("<span>"+$("#textarea").val()+"</span>").appendTo(div3);
    var img=$("<img></img>").attr("src","images/bgk14.png").appendTo(div3);
    div4.appendTo(div3);


    // 注册鼠标右键事件
    $(".center_text").contextmenu(function(){
      $(".center_text").children(".center_text1").hide();
      $(this).children(".center_text1").show();
      return false;
    }).click(function(){
      $(".center_text").children(".center_text1").hide();
    });
    // 发送后输入框清空内容
    $("#textarea").val("");
    // 获取当前时间并显示
    var date=new Date();
    if($(".center_text").css("display")=="block"){
      if(date.getMinutes()<10){
        $("#newTime").children("span").text(date.getHours() + ":0" + date.getMinutes())
      }else{
        $("#newTime").children("span").text(date.getHours() + ":" + date.getMinutes())
      }
    }

    //创建点击撤回后出现的div和内容
    var div5=$("<div></div>").addClass("tips").appendTo($("#center_content"));
    var span2=$("<span>你撤回了一条消息</span>").appendTo(div5);
    var a=$("<a href='javascript:'>重新编辑</a>").appendTo(div5).click(function(){
      $("#textarea").val(span.text());
    });
    // 撤销后
    div4.children().eq(1).click(function(){
      div5.show();
      div1.hide();
    });
    // 删除后
    div4.children().eq(7).click(function(){
      div1.hide();
    });

    // 自动回复
    // 获取变化图片
    var imgobj1=null;
    $("#contacts .contacts_all").each(function(){
      if($(this).children(".time").css("color")=="rgb(146, 145, 145)"){
        imgobj1=$(this).children(".img").children("img").attr("src");
        // $(".bigImg").css({"background":"url("+imgobj1+")","backgroundSize":"100% 100%"});
      }
    });
    var div1_1=$("<div></div>").addClass("center_txt_left").appendTo($("#center_content")).show();
    var div2_1=$("<div></div>").addClass("center_img").css("backgroundImage","url("+imgobj1+")").appendTo(div1_1);
    var div3_1=$("<div></div>").addClass("center_text").appendTo(div1_1).click(function(){
      return false;
    });
    var span1=$("<span>收到</span>").appendTo(div3_1);
    var img1=$("<img></img>").attr("src","images/bgk15.png").appendTo(div3_1);


    // ---------------------------------
    // 滚动条
    var box_Height = $("#talk_center").outerHeight();
    var target=$("#center_content");
    var content_Height = $("#center_content").outerHeight();
    var bar_Height = $(".silderBar").outerHeight();
    var barspan_Height = $(".silderBar span").outerHeight();
    if(content_Height>box_Height){
      $(".silderBar").show();
    }
    var isMouseDown = false;
    var distance = 0;
    //滚动条初始高度；
    var n = box_Height / content_Height * bar_Height;
    $(".silderBar span").css("height", n);
    $(".silderBar").mousedown(function(event){
      // 红色盒子距离 父亲 盒子顶部距离
      var t = event.pageY - $(".silderBar").position().top;

      $(document).mousemove(function(event){
        // 红色移动的距离
        var barTop = event.pageY - t ;
        barTop=barTop<0?0:barTop;
        barTop=barTop>bar_Height - barspan_Height?bar_Height - barspan_Height:barTop;
         //内容盒子要移动距离
        // （内容盒子高度 -  大盒子高度） /  (大盒子高度 - 红色盒子的高度)   * 红色盒子移动的数值
         // 内容盒子移动的距离
        var contentTop = (content_Height - box_Height) / (bar_Height - barspan_Height) *  barTop;
        $(".silderBar span").css("top",barTop);
        $("#center_content").css("top",-contentTop);        
        // 防止拖动滑块的时候， 选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
      });
    });



  }
});

// ---------------------------------------------------


});
