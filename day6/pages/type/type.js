// pages/type/type.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
	
		arr:[],
	
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
			// this.anycolor()
	},
	anycolor(){
	
				var aaa=Math.floor(Math.random()*256)
				var bbb=Math.floor(Math.random()*256)
				var ccc=Math.floor(Math.random()*256)
				let obj={
					a:aaa,
					b:bbb,
					c:ccc
				}
				this.data.arr.push(obj)
				this.setData({
					arr:this.data.arr
				})
				console.log(this.data.arr);
			if (this.data.arr.length<10) {
				this.anycolor()
			}
		
	},	
	
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {
		this.anycolor()
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
		var date=this.data.arr.slice(0,10)
		console.log(date);
		this.setData({
			arr:date
		})
		wx.stopPullDownRefresh()
		
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {
		this.anycolor()
			wx.showToast({
				title: '加载中',
				icon:'loading'
			})
			setTimeout(()=>{
					wx.hideToast()
			},1000)
	
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})