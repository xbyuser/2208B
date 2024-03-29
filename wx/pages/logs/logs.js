import axios from '../../api/http'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
			tablist:[],
			banner:[],
			title:[],
			datalist:[]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		axios({
			url:'/home/getSecondClassify/undefined'
		}).then(res=>{
			// console.log(res);
			this.setData({
				tablist:res.data.data
			})
		}),
		axios({url:'/home/banner/1/4'}).then(res=>{
			// console.log(res);
			this.setData({
				banner:res.data.data
			})
		}),
		axios({url:'/home/liveToday/undefined '}).then(res=>{
				// console.log(res);
				this.setData({
					title:res.data.data
				})
		}),
		axios({
			url:'/home/classifyCourse/1?page=1&limit=150&classify_id=1',
			data:{
				page:1,
				limit:100,
				classify_id:1
			}
	}).then(res=>{
		console.log(res);
		this.setData({
			datalist:res.data.data,
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
		
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		
	}
})