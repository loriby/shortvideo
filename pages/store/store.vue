 <template>
    <view>
		<view class="uni-title">商城</view>
        <view class="uni-padding-wrap uni-common-mt">
           <view class="uni-flex uni-column nodata-cont">
              <view class="images-box"><image src="/static/img/shop/no-data.png" mode=""></image></view>
              <view class="text">敬请期待！</view>
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

<style>
.nodata-cont{
	width: 394upx;
	position: absolute;
	top: 30%;
	left: 50%;
	margin-left: -197upx;
}	
.images-box{
	text-align: center;
}	
.images-box image{
	width: 394upx;
	height: 302upx;
}
.text{
	width: 100%;
	text-align: center;
	color: #1F1F26;
	font-size: 32upx;
	margin-top: 36upx;
}
.uni-title{
	text-align: center;
	font-size: 32upx;
	font-weight: normal;
}
</style>
