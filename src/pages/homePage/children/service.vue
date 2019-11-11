<template>
   <div class="service">
      <p class="bigTitle WeirdBox">商家服务</p>
      <ul class=" page-wrap">
         <li v-for="(item,index) in list" :key="index" class="li wrap-content">
            <div class="page-wrap wrap-v wrap-vcenter wrap-center" @click="targetNew(item.router)">
               <i class="bigCubeIcon" :class="{'cubeic-safe-pay': item.icon=='pay','cubeic-qr-code': item.icon=='code','cubeic-setting': item.icon=='setting','cubeic-phone': item.icon=='phone'}"></i>
               <p>{{item.title}}</p>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>
const list = [
   {
		title: '医院',
      icon: 'pay',
      router: ''
	},
   {
		title: '超市',
      icon: 'code',
      router: ''
	},
   {
		title: '药店',
      icon: 'setting',
      router: ''
	},
   {
		title: '快递',
      icon: 'phone',
      router: ''
	}
]

export default {
   data() {
      return {
         list: list
      }
   },
}
</script>

<style scoped>
.service{
   color: #aaa;
   font-size: 15px;
   background-color: #fff;
   margin: 10px 0;
}

p.bigTitle{
   padding: 10px 20px;
   text-align: left;
}

.cubeIcon{
   font-size: 20px;
}

li.li{
   padding: 15px 0;
}
.bigCubeIcon{
   font-size: 25px;
   margin-bottom: 20px;
}
</style>