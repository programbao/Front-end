// pages/order/order.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 页面的初始数据
   */
  data: {
    products:["锅底类","丸滑类","特色菜类","经典火锅菜","牛肉羊肉类","海鲜河鲜类","豆面制品"],
    morelist:-1,
    classname1:"op_fd",
    classname2:"op_fd1",
    arr1:'../../images/arrow1.png',
    arr2:'../../images/arrow2.png'
  },
  more:true,
  open:function(e){
    // more = true;
    let more=this.more;
    let morelist = this.data.morelist;
    if(more){
      this.setData({
        morelist:e.currentTarget.dataset.id
      })
    }else{
      this.setData({
        morelist:-1
      })
    };
    this.more=!more;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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