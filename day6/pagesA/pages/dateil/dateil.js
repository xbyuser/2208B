// pages/dateil/dateil.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		con:0
	},
	add(){
		this.data.con++
		this.setData({
			con:this.data.con
		})
		this._tots()
	},
	_tots(){
		wx.showToast({
			title: 'con值为'+this.data.con,
			icon:"none"
		})
	
		},
		dwads(e){
			console.log(e);
		},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {
		console.log(123);
		this.setData({
			con:0
		})
		wx.stopPullDownRefresh()
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})