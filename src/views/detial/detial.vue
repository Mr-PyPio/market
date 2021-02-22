<template>
	<h2>detial</h2>
</template>

<script>
export default {
	name: 'Detial',
	data() {
		return {
			iid: null
		}
	},
	created() {
		this.iid = this.$route.params.iid
	},
}
</script>

<style>

</style>