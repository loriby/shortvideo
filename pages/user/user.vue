<template>
	<view class="my-content">
		<!-- <view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
		</view> -->
		<view class="head-box">
			<view class="portrait">
				<image src="../../static/img/touxiang.png" mode=""></image>
			</view>
			<view class="nicheng-box">
				<text class="nicheng-text">小明</text>
				<text class="level-icon level-qingtong"></text>
			</view>
			<view class="head-txt">
				<text>添加个人介绍添加个人介绍</text>
				<text>添加个人介绍</text>
			</view>
		</view>
		<view class="uni-flex uni-row con-list header-list-box">
			<view class="flex-item uni-bg-black" @click="goUrl('/pages/team/team')">
				<image src="/static/img/tuandui.png" mode=""></image>
				<text>我的团队</text>
			</view>
			<view class="flex-item uni-bg-black">
				<image src="/static/img/renshu.png" mode=""></image>
				<text>团队人数</text>
			</view>
			<view class="flex-item uni-bg-black">
				<image src="/static/img/qianbao.png" mode=""></image>
				<text>钱包余额</text>
			</view>
		</view>
		<view class="con-list">
			<view class="flex-item flex-item-V uni-bg-black">
				<text class="uni-panel-text qianbao-icon">我到钱包</text>
				<text class="uni-panel-icon uni-icon uni-panel-icon-on">&#xe470;</text>
			</view>
			<view class="flex-item flex-item-V uni-bg-black">
				<text class="uni-panel-text xieyi-icon">用户协议</text>
				<text class="uni-panel-icon uni-icon uni-panel-icon-on">&#xe470;</text>
			</view>
			<view class="flex-item flex-item-V uni-bg-black">
				<text class="uni-panel-text zhengce-icon">隐私政策</text>
				<text class="uni-panel-icon uni-icon uni-panel-icon-on">&#xe470;</text>
			</view>
			<view @click="goUrl('/pages/task/attestation')" class="flex-item flex-item-V uni-bg-black">
				<text class="uni-panel-text xieyi-icon">实名认证</text>
				<text class="uni-panel-icon uni-icon uni-panel-icon-on">&#xe470;</text>
			</view>
			<view class="flex-item flex-item-V uni-bg-black">
				<text class="uni-panel-text tuichu-icon" @click="logout">退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		mounted() {
			this.getMyhome();
		},
		methods: {
			...mapMutations(['logout']),
			getMyhome() {
				const that = this
				const params = {
					url: '/user/myhome',
					data: {
						name: 'admin',
						token: that.$storage.getStorage('token')
					},
					method: 'get',
					callback (res) {
						console.log(res)
						// if (res.status_code === 200) {
						// 	uni.showToast({
						// 		icon: 'success',
						// 		title: res.result
						// 	})
						// 	uni.reLaunch({
						// 		url:'../login/login'
						// 	})
						// } else {
						// 	uni.showToast({
						// 		icon: 'none',
						// 		title: res.result
						// 	})
						// }
					}
				}
				this.$http.sendRequest(params)
			},
			// 退出登录
			logout() {
			    let that = this
				uni.clearStorage()
			    that.bindLogin()
			    // const params = {
			    //  url: '/user/logout',
			    //  callback (res) {
			    //   localStorage.removeStorageSync('token')
			    //   localStorage.removeStorageSync('name')
			    //   that.bindLogin()
			    //   console.log(res)
			    //  }
			    // }
			    // this.$http.sendRequest(params)
			   },
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			},
			
			goUrl (url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.my-content{
		width: 100%;
		background: url(../../static/img/my_bg.png) no-repeat top;
		background-size: 100%;
		background-color: #16161B;
		padding-bottom: 100upx;
	}
	.head-box{
		width: 85%;
		margin: 100upx auto 0;
	}
	.portrait{
		width:120upx;
		height: 120upx;
	}
	.portrait image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.nicheng-box{
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		line-height: 60upx;
		padding: 24upx 0;
	}
	.nicheng-text{
		webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		font-size: 38upx;
		color:#fff
	}
	.level-icon{
		width: 48upx;
		height: 50upx;
	}
	.level-qingtong{
		background: url(../../static/img/myTeam/qingtong.png) no-repeat;
		background-size: 100%;
	}
	.head-txt text{
		color: #727582;
		font-size: 26upx;
		display: block;
	}
	.con-list{
		border-radius: 12upx;
		background: #272734;
		padding: 24upx 0;
		width: 94%;
		margin: 24upx auto 0;
	}
	.header-list-box {
		padding: 75upx 0;
	}
	.header-list-box text{
		color: #fff;
		font-size: 30upx;
	}
	.flex-item {
		width: 33.3%;
		text-align: center;
	}
	
	.flex-item-V {
		width: 100%;
		text-align: center;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		padding: 50upx 0;
		padding-right: 3%;
	}
	.uni-panel-icon-on{
		font-size: 36upx;
		color:#C6CACE;
		line-height:60upx;
		padding-right: 3%;
	}
	.uni-panel-text{
		font-size: 30upx;
		webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: left;
		line-height: 60upx;
		color: #C6CACE;
	}
	.uni-panel-icon{
	}
	.xieyi-icon{
		background: url(../../static/img/xieyi.png) no-repeat left center;
		padding-left: 18%;
		background-size: 60upx 60upx;
		background-position: 6% 0;
	}
	.zhengce-icon{
		background: url(../../static/img/zhengce.png) no-repeat left center;
		padding-left: 18%;
		background-size: 60upx 60upx;
		background-position: 6% 0;
	}
	.qianbao-icon{
		background: url(../../static/img/qianbao2.png) no-repeat left center;
		padding-left: 18%;
		background-size: 60upx 60upx;
		background-position: 6% 0;
	}
	.tuichu-icon{
		background: url(../../static/img/tuichu.png) no-repeat left center;
		padding-left: 18%;
		background-size: 60upx 60upx;
		background-position: 6% 0;
	}
	.header-list-box image{
		width: 100upx;
		height: 100upx;
	}
	.header-list-box text {
		display:block;
		
	}
</style>
