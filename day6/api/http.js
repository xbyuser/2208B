function http({url,data,method='get'}){
	return new Promise((resolve,reject)=>{
			wx.request({
				url: 'https://api-hmugo-web.itheima.net/api/public/v1/home'+url,
				data,
				method,
				success:(res)=>{
				resolve(res)
				},
				fail:(err)=>{
					reject(err)
				}
			})
	})
}
export default http