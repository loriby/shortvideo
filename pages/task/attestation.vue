 <template>
    <view class="cont">
	  <view class="line uni-flex uni-column"></view>
      <view class="uni-padding-wrap uni-common-mt">
           <view class="uni-flex uni-column">
              <view>
				 <form @submit="formSubmit" @reset="formReset">
				  <view class="uni-form-item uni-row">
					  <text class="title">真实姓名</text>
					  <input class="uni-input" name="input" placeholder="请输入姓名" />
				  </view>
				  <view class="uni-form-item uni-row">
					  <text class="title">身份证号</text>
					  <input class="uni-input" name="input" placeholder="请输入身份证号" />
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
				
			}
		},
		methods: {
			 formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
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
	margin-top: 138upx;
}

.cont .title{
	color: #C6CACE;
	font-size: 28upx;
	line-height: 100upx;
}

.cont .uni-form-item{
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
</style>
