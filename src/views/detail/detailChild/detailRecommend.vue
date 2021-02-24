<template>
	<div class="detailRecommend">
		<div class="hote">热门推荐</div>
		<goods-list :goods="recommendDatas"></goods-list>
	</div>
</template>

<script>
import GoodsList from 'components/content/goods/goodsList.vue'

export default {
  components: { 
		GoodsList 
		},
	name: 'DetailRecommend',
	props: {
		recommendDatas: {
			type: Array,
			default: []
		}
	}
}
</script>

<style scoped>
.detailRecommend .hote{
	font-size: 16px;
	padding: 10px 0 10px 10px;
}
</style>