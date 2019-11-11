<template>
	<header class="head WeirdBox page-wrap">
		<div class="left">
			<!-- <i class="cubeic-back"></i> -->
		</div>
		<h2 class="title wrap-content page-wrap wrap-vcenter wrap-center">{{title}}</h2>
		<div class="right"></div>
	</header>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '登录'
		},
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			toastTxt: 'cube toast content'
		}
	},
	methods: {
		showToast () {
			this.$createToast({
				txt: this.toastTxt
			}).show()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
	height: 44px;
	padding: 0 16px;
}
h2.title{
	font-size: 18px;
	font-weight: bold;
}
.left,.right{
	width: 60px;
}
a {
	color: #42b983;
}
</style>
