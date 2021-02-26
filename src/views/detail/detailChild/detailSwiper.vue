<template>
	<swiper class="swiperItem">
		<swiper-item v-for="(item, index) in topImg " >
				<img class="topImage" :src="item" alt="">
		</swiper-item>
	</swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

export default {
	name: 'DetailSwiper',
	components: {
		Swiper, 
		SwiperItem,
	},
	props: {
		topImg: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style scoped>
.topImage{
	height: 100%;
	width: 100%;
}
.swiperItem{
	height: 8rem;
	overflow: hidden;
}
</style>