 <template>
    <view class="cont">
	  <view class="line uni-flex uni-column"></view>
      <view class="uni-padding-wrap uni-common-mt">
           <view class="uni-flex uni-column">
              <view>
				 <form @submit="formSubmit" @reset="formReset">
				  <view class="uni-form-item item uni-row">
					  <text class="title">真实姓名</text>
					  <input v-model="dataForm.name" class="uni-input" name="input" placeholder="请输入姓名" />
				  </view>
				  <view class="uni-form-item item uni-row">
					  <text class="title">身份证号</text>
					  <input v-model="dataForm.idCard" class="uni-input" name="input" placeholder="请输入身份证号" />
				  </view>
				  <view class="uni-flex uni-column">
					  <view @click="upImage('idCardFront')" class="flex-item upbox">
						  <image v-if="idCardFront" :src="idCardFront" mode=""></image>
						  <text v-else class="title">身份证正面</text>
					   </view>
					  <view @click="upImage('idCardBack')" class="flex-item upbox">
						  <image v-if="idCardBack" :src="idCardBack" mode=""></image>
						  <text v-else  class="title">身份证反面</text>
					  </view>
					  <view @click="upImage('allCard')" class="flex-item upbox">
						  <image v-if="allCard" :src="allCard" mode=""></image>
						  <text v-else class="title">手持身份证和手写账号ID</text>
					  </view>
				  </view>
				  <view class="uni-btn-v">
					<button class="sub-btn" form-type="submit">确定</button>
				  </view>
				</form>
			  </view>
			</view>
        </view>
    </view>
</template>
<script>
	export default {
		data() {
			return {
				idCardFront:'', // 身份证正面
				idCardBack:'', // 身份证反面面
				allCard:'', // 手持身份证和手写账号ID
				dataForm:{
				 idCardFrontFile:'',
				 idCardBackFile:'',
				 allCardFile:'',
				 name:'',
				 idCard:''
				}
			}
		},
		methods: {
			 formSubmit: function(e) {
				// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				// var formdata = e.detail.value
				// uni.showModal({
				// 	content: '表单数据内容：' + JSON.stringify(formdata),
				// 	showCancel: false
				// });
				uni.request({
				    url: '/care-web/user/phone_regist', //仅为示例，并非真实接口地址。
				    data: {
				        phone:'15201654823',
						passwd:'15201654823',
						recommended_code:'kara'
				    },
					method:'POST',
				    header: {
				       'content-type': 'application/x-www-form-urlencoded'
				    },
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
				    }
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			// 上传图片
			upImage(imgName,upImageName){
				let _t = this
				uni.chooseImage({
					count:1,
					success:function(rst){
						_t.dataForm[imgName+'File'] = rst.tempFiles[0]
						_t[imgName] = rst.tempFilePaths[0]
						console.log(_t.dataForm)
					}
				})
				
			}
		}
	}
</script>

<style>
.cont{
	background: #1F1F26;
	width: 100%;
}
.cont .sub-btn{
	width: 480upx;
	height: 80upx;
	background: #DFB67D;
	border-radius: 40upx;
	font-size: 32upx;
	color: #1F1F26;
	margin: 0 auto;
	/* margin-top: 138upx; */
}

.cont .title{
	color: #C6CACE;
	font-size: 28upx;
	line-height: 100upx;
}

.cont .uni-form-item.item{
	height: 118upx;
	padding: 0;
	border-bottom: 1px solid #292932;
}

.cont .uni-form-item .uni-input{
	margin-top: 20upx;
	background: none;
	font-size: 24upx;
	color: #fff;
}

.cont .line{
	border-top: 1px solid #292932;;
}

.upbox{
	height: 250upx;
	border: 1px dashed rgb(226 224 224 / 54%);;
	width: 564upx;
	margin: 0 auto;
	margin-bottom: 40upx;
	line-height: 250upx;
	text-align: center;
	background: rgb(255 255 255 / 8%);
}

.upbox:first-child{
	margin-top: 40upx;
}

.upbox image{
	width: 100%;
	height: 100%;
}
</style>
