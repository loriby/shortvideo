<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-flex uni-column">
				<view class="ad-view">
					<ad adpid="1111111111" @load="onload" @close="onclose" @error="onerror" @downloadchange="ondownloadchange"></ad>
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
			}
		},
		onShow: function() {
			
		},
	}
</script>

<style>

</style>
