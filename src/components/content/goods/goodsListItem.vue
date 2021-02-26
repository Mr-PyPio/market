<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="getImg" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
		methods: {
			itemClick() {
				if (this.goodsItem.iid) {
				this.$router.push('/detail/' + this.goodsItem.iid)
				}
			}
		},
		computed: {
      getImg() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style>
  .goodsListItem {
    width: 48%;
    padding: .2rem 0;
  }

  .goodsListItem img {
    width: 100%;
    border-radius: .1rem;
  }

  .goods-info {
    font-size: .24rem;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .06rem;
    margin-top: .1rem;
  }

  .goods-info .price {
    color: red;
    margin-right: .4rem;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -1.1rem;
    top: 0;
    width: .28rem;
    height: .28rem;
    background: url("~assets/img/common/collect.svg") 0 0/.28rem .28rem;
  }
</style>