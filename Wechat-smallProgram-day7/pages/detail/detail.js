let datas = require("../../datas/list-data.js");
// console.log(datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    index: null,
    isCollected:false,
    col1: "/images/icon/collection-anti.png",
    col2: "/images/icon/collection.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let listArr = this.data.listArr;
    let index = options.index;
    this.setData({
      listArr: datas.list_data[index],
      index
    })
    // console.log(options);

    // 根据本地缓存的数据判断用户是否收藏当前的文章
    let detailStorage = wx.getStorageSync("isCollected");
    console.log(detailStorage);

    if (!detailStorage) {
      // 在缓存中初始化空对象
      wx.setStorageSync("isCollected",{});
    }
    // 判断用户是否收藏
    if (detailStorage[index]) {//收藏过
      this.setData({
        isCollected:true
      })
    }
  },

  // 点击是否收藏
  collectClilck(){
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    })

    let title = isCollected?"收藏成功":"收藏取消";
    // 用户提示信息
    wx.showToast({
      title,
      icon: "success"
    })

    let index = this.data.index;
    // 获取本地数据
    wx.getStorage({
      key: 'isCollected',
      success: function (datas) {
        console.log(datas);
        let obj = datas.data;
        obj[index] = isCollected;
        console.log(obj);
        // 本地缓存数据
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success(data) {
            console.log("缓存成功");
          }
        })
      },
    })
    
    
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
