<template>
    <nav-bar >
      <div class="left" slot="left" @click="tabBack">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div class="center" slot="center">
				<div class="titles" 
						v-for="(item,index) in titles"
						@click="navClick(index)"
						:class="{active: isClick === index}">{{item}}</div>
			</div>
    </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/navBar.vue'

  export default {
    name: 'DetailTab',
    components: {
      NavBar
    },
		data() {
			return {
				titles: ['商品','参数','评论','推荐'],
				isClick: 0
			}
		},
		methods: {
			navClick(index) {
				this.isClick = index;
				this.$emit('navClick', index)
			},
			tabBack(){
				this.$router.back()
			}
		}
  }
</script>

<style scoped>
.left{
	text-align: center;
}
.left img{
	height: .4rem;
    width: .4rem;
	margin-left: .44rem
}
.center{
	display: flex;
}
.titles{
	flex: 1;
	line-height: .88rem;
	font-size: .28rem;
	color: rgb(87, 83, 83);
}

.active{
	color: lightpink;
}
</style>