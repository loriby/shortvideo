<template>
	<view class="share-container">
		<view class="share-warp">
			<image class="share-img" src="../../static/img/download.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			getData () {
				const that = this
				const params = {
					url: '/user/get_recommended_code',
					method: 'get',
					data: {
						name: that.$storage.getStorage('name')
					},
					callback (res) {
						console.log(res)
					}
				}
				
				this.$http.sendRequest(params)
			}
		}
	}
</script>

<style scoped>
	.share-container{
		width: 100%;
		min-height: 100%;
		background: url(../../static/img/open-bg.png) no-repeat;
		background-size: 100% 100%;
	}
	.share-warp{
		width: 60%;
		height: auto;
		position: absolute;
		top: 20%;
		left: 20%;
	}
	.share-img{
		width: 100%;
		height: auto;
	}
</style>
