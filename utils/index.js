// const baseUrl = 'http://8.210.169.146:8010'
const baseUrl = '/user';

function sendRequest(params) {
	const url = baseUrl + params.url || ''
	const method = params.method || 'post'
	let data = params.data || {}
	const isloading = params.isloading || true
	const callback = params.callback || ''
	const islogin = params.islogin || false
	// const info = this.$storage.getStorage('info')
	// const gmsfzhm = info.user ? info.user.gmsfzhm : ''
	let token = ''
	
	if (!islogin) {
		token = uni.getStorageSync('token')
		
		if (!token) {
			uni.showToast({
				icon: 'none',
				title: 'token失效,请重新登录'
			})
			setTimeout(function () {
				uni.redirectTo({
					url:'/pages/login/index'
				})
			}, 2000)
			return
		}
	}
	
	let header = (params.header && params.header == 'json') ? {
			'Authorization': '',
			'Content-Type': 'application/json'
		} : {
			'Authorization': '',
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		};
	
	islogin ? '' : header.Authorization = 'Bearer' + token;

	isloading ? uni.showLoading({
		title: '加载中',
		mask: true
	}) : ''

	uni.request({
		url: url,
		data: data,
		method: method,
		timeout: 30000,
		header: header,
		success(res) {
			if (res.data && (res.data.code === 41000 || res.data.code === 401)) {
				uni.removeStorageSync('info')
				uni.removeStorageSync('token')
				uni.showToast({
					icon: 'none',
					title:res.data.msg
				})
				setTimeout(function() {
					uni.redirectTo({
						url:'/pages/login/index'
					})
				}, 2000)
				this.$store.commit('settabIndex',index)
			} else {
				callback && callback(res.data || {})
			}
		},
		fail() {
			uni.showToast({
				icon: 'none',
				title: '请求失败请重试...'
			})
		},
		complete() {
			uni.hideLoading()
		}
	})
}

export default {
	sendRequest
}