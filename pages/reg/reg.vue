<template>
	<view class="content">
		<view class="login-tab">
			<view class="tab-login" @click="goLogin">登录</view>
			<view class="tab-resgister">注册</view>
			<view class="clear"></view>
		</view>
		<view class="login-input-group">
			<m-input class="login-ipt" type="text" clearable focus v-model="account" placeholder="请输入手机号/邮箱"></m-input>
			<m-input class="login-ipt" type="password" displayable v-model="password" placeholder="请输入登录密码"></m-input>
			<m-input class="login-ipt" type="text" displayable v-model="recommendCode" placeholder="请输入推荐码"></m-input>
			<!-- <view class="">
				<m-input class="login-ipt" type="text" v-model="email" placeholder="请输入验证码"></m-input>
				<text class="get-code">获取验证码</text>
			</view> -->
		</view>
		<button type="primary" class="login-btn" @tap="register">注册</button>
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
				money: '',
				recommendCode: '',
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
				if (this.recommendCode.length == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入推荐码'
					});
					return;
				}
				// if (this.money == '') {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '请输入以太钱包地址'
				// 	});
				// 	return;
				// }
				const params = {
					data: {
						phone: this.account,
						passwd: this.password,
						// ethaddr: this.money,
						recommended_code: this.recommendCode
					},
					islogin: true,
					callback (res) {
						if (res.success === 'true') {
							uni.showToast({
								icon: 'success',
								title: '注册成功'
							})
							setTimeout(function(){
								uni.reLaunch({
									url:'../login/login'
								})
							}, 200)
						} else {
							uni.showToast({
								icon: 'none',
								title: res.response
							})
						}
					}
				}
				
				if (this.account.indexOf('@') >= 0) {
					params.url = '/user/email_regist'
					this.$http.sendRequest(params)
				} else {
					params.url = '/user/phone_regist'
					this.$http.sendRequest(params)
				}
				// service.addUser(data);
				// uni.showToast({
				// 	title: '注册成功'
				// });
				// uni.navigateBack({
				// 	delta: 1
				// });
			},
			registFun(url, obj) {
				uni.request({
				    url: url, //仅为示例，并非真实接口地址。
				    data: obj,
				    // header: {
				    //     'custom-header': 'hello' //自定义请求头信息
				    // },
				    success: (res) => {
				        console.log(res.data);
				        // this.text = 'request success';
				    }
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
	
	.content{
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
	.get-code{
		padding: 8upx 20upx;
		background: #DFB67D;
		color: #fff
	}
</style>
