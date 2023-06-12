 function axios({url,method='get',data}){
	return new Promise((resolve,reject)=>{
		wx.showLoading({
			title:'加载中',
			icon:'success'
		})
		wx.request({
			url:'https://www.lexuemiao.com/api/app'+url,
			data,
			method,
			success: (res) => {
				resolve(res)
				wx.hideLoading()
			},fail: (err) => {
				reject(err)
				wx.hideLoading()
			}
		})
		
	})
}
export default axios