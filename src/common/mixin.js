// 混入
import BackTop from 'components/content/backTop/backTop.vue'


export const backTop = {
	components: {
		BackTop,
	},
	data() {
		return {
			isShow: false,
		}
	},
	methods: {
		// 点击放回页面顶部
		backClick() {
			this.$refs.scroll.scrollTo(0, 0, 300)
		},
	},
}