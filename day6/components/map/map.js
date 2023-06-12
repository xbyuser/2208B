// componment/map/map.js
const behaovr=require('../../api/behaovr')
Component({
	/**
	 * 组件的属性列表
	 */
	behaviors:[behaovr],
	options:{
		multipleSlots:true,
		
	},
	properties: {
		
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		longitude:39.9042,
		latitude:69.9042,
		// con:0
		n1:0,
		n2:0,
		sum:0,
		from:{
			name:'张三',
			age:18,
			sex:'男'
		}
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		n1jia(){
			this.setData({
				n1:++this.data.n1
			})
			console.log(this.data);
			this.triggerEvent('abc' ,this.data.latitude)
		},
		n2jia(){
			this.setData({
				n2:++this.data.n2
			})
		},

	},
	observers:{
		'n1,n2 ':function(n1,n2){
				console.log(n1,n2);
				this.setData({
					sum:n1+n2
				})
		}
}

})
