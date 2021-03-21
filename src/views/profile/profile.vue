<template>
<div id="profile">
	<nav-bar class="navBar"><div slot="center">商城</div></nav-bar>
	<my-self></my-self>
</div>
	
</template>

<script>
import navBar from 'components/common/navBar/navBar.vue'
import MySelf from './childComps/mySelf.vue'


export default {
	name: 'Profile',
  components: { 
		navBar,
    MySelf,
	},
	
}
</script>

<style scoped>
.navBar{
	width: 100%;
	color: #fff;
	background-color: lightpink;
}

</style>