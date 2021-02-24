<template>
	<div class="navBar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
export default {
	name: 'NavBar'
}
</script>

<style>

.navBar{
	position:relative;
	display: flex;
	line-height: 44px;
	height: 44px;
	text-align: center;
	font-size: 20px;
}
.navBar .left,
.navBar .right{
	width: 20%;
}

.navBar .center{
	flex: 1;
}

</style>