<template>
  <div class="goodsList">
    <goods-list-item v-for="(item, index) in goods" :goods-item="item" />
  </div>
</template>

<script>
  import GoodsListItem from './goodsListItem'

  export default {
		name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style>
.goodsList{
	display: flex;
	flex-wrap: wrap; 
	justify-content: space-around;
}
</style>