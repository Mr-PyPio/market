<template>
	<div class="recommendView">
		<div class="viewItem" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommendView',
	props: {
		recommends: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style>

.recommendView{
	display: flex;

	width: 100%;
	text-align: center;
	font-size: 15px;
	padding: 15px 0 20px 0;
	border-bottom: 10px solid rgb(216, 211, 211);
}

.recommendView .viewItem{
	flex: 1;
}

.recommendView img{
	overflow: hidden;
	height: 70px;
	margin-bottom: 8px;
}

</style>