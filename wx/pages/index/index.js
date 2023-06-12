Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		inputValue:'',
		string:'',
		type:1
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		
	},
	avbc(e){
		console.log(e);
		if (this.data.type==2) {
				this.data.type=1
		}else if (this.data.type==1) {
				this.data.type=2
		}
		this.setData({
			type:this.data.type
		})
	},
	inp:function(event) {
		
		this.setData({
			inputValue:event.detail.value.match(/\d+/g)?event.detail.value.match(/\d+/g).join(''):'',
			string :event.detail.value.match(/[a-zA-Z]+/g)?event.detail.value.match(/[a-zA-Z]+/g).join(''):''
		})
	}
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */

})
