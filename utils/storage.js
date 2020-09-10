function getStorage (k) {
	try{
		const val = uni.getStorageSync(k)
		return val
	}
	catch (e) {
		return false
	}
}

export default{
	getStorage
}