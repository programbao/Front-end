let winWidth = wx.getSystemInfoSync().windowWidth;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open:false,
    leftdst:0,
    startmark:0,
    newmark:0,
    status:1,
    transform:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  
  

  // 点击盒子移动
  moreClick () {
    let status = this.data.status;
    let open = this.data.open;
    let transform = this.data.transform;
    // 判断盒子是否打开
    if (open) {
        this.setData({
          transform: "transform: translateX(0rpx)",
          open: false,
          status: 1
        })
    }else{
      this.setData({
        transform: "transform: translateX("+winWidth*0.75+"px)",
        open: true,
        status: 2
      })
      
    }
  },

  // 开始移动时的状态
  tc_start(e) {
    console.log(e);
    if(this.data.status === 1){
      // 在最左边的时候
      this.data.startmark = e.changedTouches[0].clientX;
    }else{
      // 在最右边的时候
      this.data.startmark = e.changedTouches[0].clientX;
    }
    
  },

  //点击触摸移动
  conMove(e){
    let starmark = this.data.startmark;
    let newmark = e.changedTouches[0].clientX;
    let transform = this.data.transform;

    

      // 右边向左边
      if (starmark > newmark) {
        if (this.data.status === 1){
          this.setData({
            transform: "transform: translateX(0px)"
          })
        }else{
          this.setData({
            transform: "transform: translateX(" + (winWidth * 0.75 - (starmark - newmark)) + "px)"
          })
        }
       
      }
      // 左边到右边
      if (starmark < newmark) {

        if (this.data.status === 1) {
          if (winWidth * 0.75 > newmark - starmark) {
            this.setData({
              transform: "transform: translateX(" + (newmark - starmark) + "px)"
            })
          }
        }else{
          this.setData({
            transform: "transform: translateX(" + winWidth * 0.75 + "px)"
          })
        }

      }

    
    

    
      
    

   
    
    
  },

  // 结束触摸
  tc_end(e){
    console.log(e);
    let starmark = this.data.startmark;
    let newmark = e.changedTouches[0].clientX;
    let status = this.data.status;
    if (status === 1){
      if(Math.abs(newmark - starmark) < winWidth*0.2){
        this.setData({
          transform: "transform: translateX(0px)"
        })
      }else{
        this.setData({
          transform: "transform: translateX(" + winWidth * 0.75 + "px)"
        })
      }
      this.setData({
        status: 2
      })
    }else{
      if (Math.abs(newmark - starmark) < winWidth * 0.2){
        this.setData({
          transform: "transform: translateX(" + winWidth * 0.75 + "px)"
        })
      }else{
        this.setData({
          transform: "transform: translateX(0px)"
        })
      }
      this.setData({
        status: 1
      })
    }
  },

  // scroll: function(res){
  //   console.log(res);
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})