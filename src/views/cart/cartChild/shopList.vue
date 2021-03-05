<template>
  <div>
    <div class="shopList" v-for="(item, index) in $store.state.cartList" >
      <img class="choose" src="~assets/img/cart/tick.svg" alt="" @click="itemClick(index)"
						:class="{isChoose: item.checked}">
      <div class="shop">
        <img class="image" :src="item.image" alt="">
        <div class="message">
          <span class="title">{{item.title}}</span>
          <span class="desc">商品描述：{{item.desc}}</span>
          <div class="price">
            <em>¥{{item.price}}</em>
            <em>×{{item.count}}</em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopList',
		props: {
			isChecked: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			itemClick(index) {
				this.$store.state.cartList[index].checked = !this.$store.state.cartList[index].checked
			}
		},
  }
</script>

<style scoped>
  .shopList {
		display: flex;
		padding: .2rem;
		padding-left: .1rem;
  }

  .shopList .choose {
    width: .32rem;
    height: .32rem;
    border-radius: .32rem;
		border: .04rem solid #e6e6e6;
		margin-top: .8rem
  }
	.shop{
		display: flex;
	}
	.image{
		height: 2rem;
		width: 1.6rem;
		border-radius: .1rem;
		margin-left: .1rem;
		margin-right: .2rem;
	}

	.title,
	.desc{
		width: 6.8rem;
    height: .4rem;
    overflow: hidden;
    display: block;
    line-height: .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
		
	}
	.title{
		font-size: .3rem;
	}
	.desc{
		padding: 0.6rem 0 .3rem 0;
		font-size: 0.3rem;
	}
	.price{
		position: relative;
		font-size: 0.3rem;
	}
	.price em:first-of-type{
		font-style: normal;
		color: red;
	}
	.price em:last-of-type{
		font-style: normal;
		position: absolute;
		right: .6rem;
	}
	.isChoose{
		background-color: lightpink;
		border-color: lightpink !important;
	}
</style>