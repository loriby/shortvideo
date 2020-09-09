<template>
	<view class="detail_content">
		<image class="detail_tx" src="../../static/img/main/touxiang.png" mode="widthFix"></image>
		<view class="detail_header">古风小姐姐</view>
		<view class="detail_cont">多喝水大火烧开了的卡洛斯到家啊宋建到了撒娇打卡第六集卡上了到家啊睡懒觉</view>
		<view class="detail_imgs">
			<view class="detail_img">
				<image src="../../static/img/main/touxiang.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
page{
	background: #16161B;
}
.detail_tx{
	width: 112upx;
	height: 112upx;
	border-radius: 56upx;
	border: 2upx solid #FFFFFF;
	display: block;
	margin: 40upx 0 0 60upx;
}
.detail_header{
	font-size: 32upx;
	margin: 24upx 0 0 60upx;
	color: #fff;
}
.detail_cont{
	font-size: 24upx;
	color: #727582;
	margin: 20upx 60upx 0;
	line-height: 36upx;
}
.detail_imgs{
	margin-top: 44upx;
}
.detail_img{
	width: 30%;
	margin-left: 2.5%;
}
.detail_img image{
	width: 100%;
}
</style>
