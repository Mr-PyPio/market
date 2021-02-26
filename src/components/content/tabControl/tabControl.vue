<template>
	<div class="tabControl">
		<div v-for="(item, index) in title" class="controlItem" 
				:class="{active: index === currentIndex}"
				@click="activeClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabControl',
	props: {
		title: {
			type: Array,
			default(){
				return []
			}
		}
	},
	data(){
		return {
			currentIndex: 0,
		}
	},
	methods: {
		activeClick(index) {
			this.currentIndex = index;
			this.$emit('tabClick', index);
		}
	},
}
</script>

<style>

.tabControl{
	display: flex;
	text-align: center;
	width: 100%;
	line-height: .8rem;
	height: .8rem;
	font-size: .32rem;
	background-color: #fff;
}

.tabControl .controlItem{
	flex: 1;
}

.tabControl .controlItem span{
	padding: .1rem;
}

.active{
	color: lightpink;
}

.active span{
	border-bottom: .06rem solid lightpink;
}
</style>