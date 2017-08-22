// pages/course/course.js
Page({
  data: {
    link:'',
    detail: []
  },
  onLoad: function (options) {
    let that = this
    wx.request({
      url: `https://raw.githubusercontent.com/liulu1012/index/f3e35dcc6617c3d4eafb334f1f6bc2f83e9e97cd/${options.link}.json`,
      success: function (res) {
        that.setData({ detail: res.data, link: options.link })
      },
      fail: function () {
        console.log('fail')
      }
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