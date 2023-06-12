module.exports=Behavior({
	//接收外部穿来的值
	properties:{

	},
	//定义私有属性
	data:{
		a:'44',
		b:'66',
		c:'88'
	},
	
	methods:{
		anycolor(){
			this.data.a=Math.floor(Math.random()*256)
			this.data.b=Math.floor(Math.random()*256)
			this.data.c=Math.floor(Math.random()*256)
			this.setData({
				a:this.data.a,
				b:this.data.b,
				c:this.data.c
			})
		}
	}
})