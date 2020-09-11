<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-flex uni-column">
				<view class="ad-view" v-for="adItem in adList" :key="adItem.id">
					<ad :adpid="adItem.adpid" :data-xx="adItem.id"></ad>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				adList: [],
				adData: {}
			}
		},
		onReady() {
			for (let i = 0; i < 4; i++) {
				this.adList.push({
					id: i,
					adpid: "1111111111"
				})
			}
		},
		methods: {
			onload(e) {
				console.log("onload");
			},
			onclose(e) {
				console.log("onclose: " + e.detail);
			},
			onerror(e) {
				console.log("onerror: " + e.detail.errCode + " message:: " + e.detail.errMsg);
			},
			ondownloadchange(e) {
				console.log("downloadchanged: " + JSON.stringify(e.detail));
			},
			getAdData: function(e) {
				// 仅APP平台支持
				plus.ad.getAds({
						adpid: '1111111111', // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
						count: 1, // 广告数量，默认 3
						width: 300 // 根据宽度获取合适的广告(单位px)
					},
					(res) => {
						this.adData = res.ads[0];
						console.log(this.adData);
					},
					(err) => {
						console.log(err);
					}
				)
			},
		},
		onShow: function() {

		},
	}
</script>

<style>

</style>
