 <template>
    <view>
      <view class="uni-padding-wrap uni-common-mt">
           <view class="uni-flex uni-column">
              <view>1</view>
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
			
		},
		onShow: function() {
			uni.navigateTo({
			    url: '/pages/task/attestation'
			});
		},
	}
</script>

<style>
	
</style>
