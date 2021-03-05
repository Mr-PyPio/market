<template>
	<div class="cart">
		<nav-bar class="cartNav">
			<div slot="center">购物车({{cartCount}})</div>
		</nav-bar>
		<scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true">
			<shop-list></shop-list>
		</scroll>
		<cart-pay></cart-pay>
	</div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar.vue'
import ShopList from './cartChild/shopList.vue'
import CartPay from './cartChild/cartPay.vue'
import Scroll from 'components/common/scroll/scroll.vue'

export default {
	name: 'Cart',
  components: {
    NavBar,
    ShopList,
    CartPay,
    Scroll 
	},
	computed: {
		cartCount() {
			if (this.$store.state.cartList.length == 0) return 0
			return this.$store.state.cartList.length
		},
		cartList() {
			return this.$store.state.cartList
		}
	},
	activated() {
		if(this.$store.state.cartList.length != 0){
			this.$refs.scroll.refresh()
		}
	},
}
</script>

<style scoped>
.cart{
	height: 100vh;
}
	.cartNav{
		font-size: .32rem;
		color: #fff;
		background-color: lightpink;
		z-index: 100;
	}
	.scroll{
		height: calc(100% - 2.86rem);
	}
</style>