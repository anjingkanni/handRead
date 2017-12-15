<template>
	<div class="pay-page" v-if="shopHide">
		<GoodsInfoVerify/>
		<PayWays/>
	</div>
</template>

<script>
	import GoodsInfoVerify from './GoodsInfoVerify'
	import PayWays from './PayWays'
	export default {
		name: "PayPage",
		props: ['shopHide'],
		components:{
			// 商品信息确认组件引用
			GoodsInfoVerify,
			// 支付方式组件引用
			PayWays
		},
		data(){
			return {
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.pay-page{
	position: absolute;
	left: 0;
	top: 0;
	background: #fff;
}

</style>
