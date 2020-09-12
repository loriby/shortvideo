<template>
	<view class="team-content">
		<view class="team-head">
			<view class="head-cont">
				<view class="team-count team-zhitui">{{coin_balance}}</view>
			</view>
			<view class="head-cont">
				<view class="team-count team-shanxia">{{score_balance}}</view>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary">提现</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coin_balance: 0,
				score_balance: 0
			}
		},
		onLoad(e) {
			this.coin_balance = e.coin_balance
			this.score_balance = e.score_balance
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{
		background: #1F1F26;
	}
	
	.team-content{
		width: 100%;
		height: auto;
	}
	
	.team-head{
		margin: 40upx 20upx 0;
		display: block;
		height: 334upx;
		background: url(../../static/img/bj.png) no-repeat;
		background-size: 100% 100%;
		display: flex;
	}
	.head-cont{
		flex: 1;
	}
	.team-count{
		width: 248upx;
		height: 140upx;
		margin: 0 auto;
		margin-top: 50%;
		transform: translateY(-50%);
		color: #141416;
		text-align: center;
		line-height: 8;
	}
	.team-zhitui{
		background: url(../../static/img/xunibi.png) no-repeat;
		background-size: 100% 100%;
	}
	.team-shanxia{
		background: url(../../static/img/jifen.png) no-repeat;
		background-size: 100% 100%;
	}
	
	.team-lists{
		margin: 40upx 20upx 0;
	}
	.team-list{
		width: 100%;
		height: 114upx;
		background: url(../../static/img/list_bg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		margin-bottom: 20upx;
	}
	.team-txt{
		width: 100%;
		height: 100%;
		font-size: 28upx;
		color: #F0E0BF;
		line-height: 114upx;
		text-indent: 40upx;
	}
	.team-level{
		width: 38upx;
		height: 44upx;
		position: absolute;
		right: 20upx;
		top: 50%;
		transform: translateY(-50%);
	}
	.btn-row{
		width: 90%;
		margin: 40px 5% 0;
		padding: 0;
	}
	.primary{
		width: 100%;
		background: #5a4f42;
	}
</style>
