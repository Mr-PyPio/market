<template>
  <div class="cartPay">
    <div class="allChoose">
      <img class="logo" src="~assets/img/cart/tick.svg" alt="" 
			@click="itemClick" ref="click"
			:class="{isAllChoose: isAllChoose}">
      全选
    </div>
    <div class="counter">合计：¥{{counter}}</div>
    <div class="pay" @click="payClick">结算({{pay}})</div>
  </div>
</template>

<script>
  export default {
    name: 'CartPay',
    computed: {
      pay() {
        return this.$store.state.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue + item.count
				},0)
      },
			counter() {
				return this.$store.state.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue + item.price*item.count
				},0).toFixed(2)
			},
			isAllChoose() {
				if (this.$store.state.cartList.length == 0) return false
				return !(this.$store.state.cartList.filter(item => !item.checked).length)
			}
    },
		methods: {
			itemClick() {
				if (this.isAllChoose) {
					this.$store.state.cartList.forEach(item => item.checked = false)
				} else{
					this.$store.state.cartList.forEach(item => item.checked = true)
				}
			},
			payClick() {
				if(this.pay == 0) {
					this.$toast.show('请添加商品')
				}
			}
		},
  }
</script>

<style scoped>
  .cartPay {
    display: flex;
    position: absolute;
    width: 100%;
    height: .98rem;
    background-color: #eee;
    line-height: .98rem;
  }

  .allChoose {
    font-size: .28rem;
		padding-left: .1rem;
  }

  .logo {
    width: .32rem;
    height: .32rem;
    border-radius: .32rem;
		border: .04rem solid #e6e6e6;
		background-color: #fff;
  }

  .counter {
    font-size: .32rem;
    margin-left: .3rem
  }

  .pay {
    position: absolute;
		font-size: .32rem;
    right: 0;
    width: 2rem;
    color: #fff;
    background-color: red;
    text-align: center;
    line-height: 1rem;
  }
	.isAllChoose{
		background-color: lightpink;
		border-color: lightpink;
	}
</style>