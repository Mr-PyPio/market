<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"

export default {
	name: 'Scroll',
	data() {
		return {
			scroll: null,
		}
	},
	props: {
		probeType: {
				type: Number,
				default: 0
			},
		pullUpLoad: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
			probeType: this.probeType,
			click: true,
			pullUpLoad: true,
			observeDom: true,
			observeImage:true
		})
		this.scroll.on('scroll', (position) => {
			this.$emit('scroll', position)
		})
		// this.scroll.scrollTo(x ,y, time)
		// 上拉加载
		this.scroll.on('pullingUp', () => {
			this.$emit('pullingUp')
			// console.log('上拉加载更多');
			setTimeout(() => {
				this.scroll.finishPullUp();
			},3000)
		})
	},
	methods: {
		scrollTo(x, y, time=300){
			this.scroll.scrollTo(x, y, time)
		}
	},
}
</script>

<style>

</style>