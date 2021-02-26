<template>
	<div id="app">
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
		<main-tab-bar class="mainTabBar"></main-tab-bar>
	</div>
</template>

<script>

import mainTabBar from 'components/content/mainTabBar/mainTabBar'

export default {
	name: 'app',
	components: {
		mainTabBar
	}
}
</script>

<style>
	@import './assets/css/base.css';

	#app{
		width: 15rem;
		margin: 0 auto;
	}

	.mainTabBar{
		z-index: 10;
	}
</style>