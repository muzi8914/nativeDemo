<template>
   <ul class="foot WeirdBox page-wrap wrap-between">
      <li v-for="(item,index) in footer" :key="index" class="wrap-content page-wrap wrap-v wrap-center wrap-vcenter" @click="target(item,index)">
         <i class="cubeIcon" :class="{'active': index==activeIndex,'cubeic-home': item.icon=='home','cubeic-like': item.icon=='like','cubeic-game': item.icon=='game','cubeic-message': item.icon=='message','cubeic-person': item.icon=='person'}"></i>
			<p class="page-wrap wrap-center" :class="{'active':index==activeIndex}">{{item.title}}</p>
		</li>
   </ul>
</template>

<script>
const footer = [
	{
		title: '首页',
      icon: 'home',
		router: ''
	},
	{
		title: '服务',
      icon: 'like',
		router: ''
	},
	{
		title: '门禁',
      icon: 'game',
		router: ''
	},
	{
		title: '消息',
      icon: 'message',
		router: ''
	},
	{
		title: '我的',
      icon: 'person',
		router: ''
	}
]

export default {
   data(){
		return{
			footer: footer,
			activeIndex: 0,
		}
	},
	methods:{
		target(i,k){
			this.activeIndex = k
			// this.$router.replace({path: i.router})
      },
   }
}
</script>

<style scoped>
ul.foot{
	font-size: 10px;
	color: #969696;
	padding: 5px;
	background-color: #FFF;
	border-top: 1px solid #f5f5f5;
}
.cubeIcon{
   font-size: 20px;
   margin-bottom: 8px;
}
.active{
   color: #8a5df8;
}
</style>