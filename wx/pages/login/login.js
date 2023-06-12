// pages/login.js
import axios from '../../api/http'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		form: {
			captcha: '5555',
			user_pass: '',
			mobile: '',
			device_id: 1,
			device_type: 2,
			key: "$2y$10$Ydw.D1d0mvxysrSB0YpzUOPeatPTjPZGBAZV.7Nm4pxxfOFJu5bua"
		}
	},
	login() {
		axios({url:'/login',data:this.data.form,method:"post"}).then(res=>{
			console.log(res);
			wx.navigateTo({
				url: '../logs/logs',
			})
		})
	},
	mobile(e){
			console.log(e);
			this.data.form.mobile=e.detail.value
	},
	user_pass(e){
			console.log(e);
			this.data.form.user_pass=e.detail.value
	},
	captcha(e){
			console.log(e);
			this.data.form.captcha=e.detail.value
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		// http({url:'/webConfig'}).then(res=>{
		// 	console.log(res);
		// })
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