<template>
	<view class="reg-content">
		<view class="login-tab">
			<view class="tab-login" @click="goLogin">登录</view>
			<view class="tab-resgister">注册</view>
			<view class="clear"></view>
		</view>
		<view class="login-input-group">
			<m-input class="login-ipt" type="text" clearable focus v-model="account" placeholder="请输入手机号/邮箱"></m-input>
			<m-input class="login-ipt" type="password" displayable v-model="password" placeholder="请输入登录密码"></m-input>
			<m-input class="login-ipt" type="text" v-model="email" placeholder="请输入验证码"></m-input>
		</view>
		<button type="primary" class="login-btn" @tap="bindLogin">注册</button>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				password: '',
				email: ''
			}
		},
		methods: {
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					account: this.account,
					password: this.password,
					email: this.email
				}
				service.addUser(data);
				uni.showToast({
					title: '注册成功'
				});
				uni.navigateBack({
					delta: 1
				});
			},
			
			goLogin () {
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style scoped>
page {
		background: #1F1F26;
	}

	.login-tab {
		margin: 160upx 0 0 80upx;
		color: #DFB67D;
		height: 80upx;
	}

	.tab-login {
		font-size: 32upx;
		float: left;
		margin-right: 54upx;
		height: 100%;
		line-height: 1.5;
	}

	.tab-resgister {
		font-size: 52upx;
		height: 100%;
		float: left;
		line-height: 1;
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
