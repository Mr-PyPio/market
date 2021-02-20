<template>
	<div id="app">
		<router-view></router-view>
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

	.mainTabBar{
		z-index: 10;
	}
</style>