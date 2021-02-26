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
	font-size: .3rem;
	padding: .3rem 0 .4rem 0;
	border-bottom: .2rem solid rgb(216, 211, 211);
}

.recommendView .viewItem{
	flex: 1;
}

.recommendView img{
	overflow: hidden;
	height: 1.4rem;
	margin-bottom: .16rem;
}

</style>