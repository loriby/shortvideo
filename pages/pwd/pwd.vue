<template>
	<view class="content">
		<!-- <view class="login-tab">
			<view class="tab-login">登录</view>
			<view class="tab-resgister" @click="goRegister">注册</view>
			<view class="clear"></view>
		</view> -->
		<view class="login-input-group">
			<m-input class="login-ipt" type="password" focus v-model="account" placeholder="请输入新密码"></m-input>
			<m-input class="login-ipt" type="password" focus v-model="account2" placeholder="请再次输入新密码"></m-input>
			<m-input class="login-ipt" type="password" v-model="password" placeholder="请输入旧密码"></m-input>
		</view>
		<button type="primary" class="login-btn" @tap="bindLogin">重置</button>
		<!-- <view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
				account2: ''
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				let url = '/user/reset_passwd';
				const that = this
				
				if (this.account !== this.account2) {
					uni.showToast({
						icon:'none',
						title:'两次密码输入不一致,请重新输入!'
					})
					return;
				}
				
				const params = {
					url: url,
					data: {
						phone: that.$storage.getStorage('name'),
						new_passwd: this.account,
						old_passwd: this.password
					},
					callback (res) {
						if (res.success === 'true') {
							uni.showToast({
								title:'密码修改成功!',
								icon:'success'
							})
							setTimeout(() => {
								uni.clearStorage()
								uni.reLaunch({
									url:'/pages/login/login'
								})
							}, 2000)
						} else {
							uni.showToast({
								title: res.response,
								icon:'none'
							})
						}
					}
				}
				this.$http.sendRequest(params)
				
			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								/**
								 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
								 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								 */
								this.toMain(infoRes.userInfo.nickName);
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '登陆失败'
								});
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			getUserInfo({
				detail
			}) {
				if (detail.userInfo) {
					this.toMain(detail.userInfo.nickName);
				} else {
					uni.showToast({
						icon: 'none',
						title: '登陆失败'
					});
				}
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			},
			
			goRegister () {
				uni.navigateTo({
					url:'../reg/reg'
				})
			}
		},
		onReady() {
			this.initPosition();
			this.initProvider();
			// #ifdef MP-WEIXIN
			this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';
			// #endif
		}
	}
</script>

<style scoped>
	page {
		background: #1F1F26;
	}
	
	.content{
		background: #1F1F26;
	}

	.login-tab {
		margin: 160upx 0 0 80upx;
		color: #DFB67D;
		height: 80upx;
	}

	.tab-login {
		font-size: 52upx;
		float: left;
		margin-right: 54upx;
		height: 100%;
		line-height: 1;
	}

	.tab-resgister {
		font-size: 32upx;
		height: 100%;
		float: left;
		line-height: 1.5;
	}

	.login-input-group {
		width: 90%;
		margin: 100upx 5% 0;
		color: #fff;
	}

	.login-ipt {
		width: 100%;
		height: 80upx;
		margin-bottom: 40upx;
		border-bottom: 2upx solid #292932;
	}
	
	.login-btn{
		width: 70%;
		margin: 140upx 15% 0;
		border-radius: 40upx;
		height: 80upx;
		background: #DFB67D;
		line-height: 80upx;
	}
</style>
