<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>

export default {
	data() {
		return {
			key: 'value'
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
	/* background-color: #FFF; */
	background-color: #f7f7f7;
	font-size: 20px;
}
</style>
