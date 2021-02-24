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
    padding: 10px 0;
  }

  .goodsListItem img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    margin-top: 5px;
  }

  .goods-info .price {
    color: red;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>