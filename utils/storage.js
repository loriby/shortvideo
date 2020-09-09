function getStorage (k) {
	try{
		const val = uni.getStorageSync(k)
		return JSON.parse(val)
	}
	catch (e) {
		return {}
	}
}

export default{
	getStorage
}