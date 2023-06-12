
import http from '../../api/http'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		banner: [],
		list:[]
	},
	//跳转type页面
	Gotype(){
		wx.switchTab({
			url: '/pages/type/type',
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		//banner
		http({
			url: '/swiperdata'
		}).then(res => {
			// console.log(res);
			this.setData({
				banner: res.data.message
			})
		})
		//list
		http({
			url: '/catitems'
		}).then(res => {
			console.log(res);
			this.setData({
				list: res.data.message
			})
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
			console.log(132);
			wx.showToast({
				title: '加载中',
				icon:'loading'
			})
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})