Page({
  data: {
    courses: []
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/liulu1012/index/a9d8f2f821740127cdc983d4b10cba2d33f240ca/index.json',
      success: function (res) {
        that.setData({ courses: res.data.published})
      },
      fail: function(){
        console.log('fail')
      }
    })
  }
})