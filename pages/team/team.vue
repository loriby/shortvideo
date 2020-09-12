<template>
	<view class="team-content">
		<view class="team-head">
			<view class="head-cont">
				<view class="team-count team-zhitui">{{direct_count}}</view>
			</view>
			<view class="head-cont">
				<view class="team-count team-shanxia">{{indirect_count}}</view>
			</view>
		</view>
		<view class="team-lists">
			<view class="team-list">
				<view class="team-txt">139****1233</view>
				<image class="team-level" src="../../static/img/hj.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				level: [],
				direct_count: 0,
				indirect_count: 0
			}
		},
		created() {
			this.getData()
		},
		onLoad(e) {
			console.log(e)
			this.direct_count = e.directcount
			this.indirect_count = e.indirect
		},
		methods: {
			getData () {
				const that = this
				const params = {
					url: '/user/relationship',
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
		background: url(../../static/img/myTeam/zhituirenshu.png) no-repeat;
		background-size: 100% 100%;
	}
	.team-shanxia{
		background: url(../../static/img/shanxia.png) no-repeat;
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
</style>
