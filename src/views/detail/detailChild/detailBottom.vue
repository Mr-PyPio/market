<template>
	<div class="detailBottom clearfix">
		<div class="bottomLeft fl">
			<div class="server">
			<em class="serverLogo"></em>
			<span>客服</span>
		</div>
		<div class="shop">
			<em class="shopLogo"></em>
			<span>店铺</span>
		</div>
		<div class="star">
			<em class="starLogo"></em>
			<span>收藏</span>
		</div>
		</div>
		<div class="bottomRight fl clearfix">
			<div class="cart fl" @click="addToCart">加入购物车</div>
			<div class="buy fl">购买</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailBottom',
	methods: {
		addToCart() {
			this.$emit('addToCart')
		}
	},
}
</script>

<style scoped>
.detailBottom{
	height: 1rem;
	width: 100%;
	z-index: 100;
	text-align: center;
	position: absolute;
	bottom: 0;
	font-size: .36rem;
}
.bottomLeft{
	width: 50%;
	height: 100%;
	background-color: #ffffff;
	display: flex;
}
.bottomLeft em{
	display: block;
	width: .4rem;
	height: .4rem;
	margin: 0 auto;
	margin-top: .1rem;
	margin-bottom: .1rem;
}

.server,
.shop,
.star{
	flex: 1;
}
.serverLogo{
	background: url('~assets/img/detail/detail_bottom.png') 0 -47px no-repeat;
	background-size: cover;
}
.shopLogo{
	background: url('~assets/img/detail/detail_bottom.png') 0 -88px no-repeat;
	background-size: cover;
}
.starLogo{
	background: url('~assets/img/detail/detail_bottom.png') 0 2px no-repeat;
	background-size: cover;
}


.bottomRight{
	width: 50%;
	line-height: 1rem;
	text-align: center;
}
.cart{
	width: 50%;
	background-color: rgb(243, 221, 96);
	color: black;
}
.buy{
	width: 50%;
	background-color: lightpink;
	color: #ffffff;
}
</style>