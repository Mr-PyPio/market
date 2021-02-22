<template>
	<swiper>
		<swiper-item v-for="(item, index) in banners">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="swiperLoadOver">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'


export default {
	name: 'HomeSwiper',
	components: {
		Swiper,
		SwiperItem
	},
	data() {
		return {
			isLoad: false
		}
	},
	props: {
		banners: {
			type: Array,
			default(){
				return []
			}
		}
	},
	methods: {
		swiperLoadOver() {
			if(!this.isLoad) {
				this.$emit('swiperLoadOver');
				this.isLoad = true;
			}
		}
	},
}
</script>

<style>

</style>