<template>
   <header class="head">
      <section class="headerInfo WeirdBox page-wrap wrap-between">
         <div class="demoIcon page-wrap wrap-vcenter">
            <i class="cubeic-location cubeIcon"></i>
            <p class="fontSize-custom-p">中XX国际花园</p>
         </div>
         <p class="page-wrap wrap-vcenter">
            <i class="cubeic-scan cubeIcon"></i><i class="cubeic-search cubeIcon"></i>
         </p>
      </section>
      <ul class="appFunction page-wrap">
         <li v-for="(item,index) in list" :key="index" class="li wrap-content">
            <a v-if="index==3" class="phoneNumber page-wrap wrap-v wrap-vcenter wrap-center" href="tel:400 081 8181">
               <i class="bigCubeIcon" :class="{'cubeic-safe-pay': item.icon=='pay','cubeic-qr-code': item.icon=='code','cubeic-setting': item.icon=='setting','cubeic-phone': item.icon=='phone'}"></i>
               <p>{{item.title}}</p>
            </a>
            <div v-else class="page-wrap wrap-v wrap-vcenter wrap-center" @click="targetNew(item.router)">
               <i class="bigCubeIcon" :class="{'cubeic-safe-pay': item.icon=='pay','cubeic-qr-code': item.icon=='code','cubeic-setting': item.icon=='setting','cubeic-phone': item.icon=='phone'}"></i>
               <p>{{item.title}}</p>
            </div>
         </li>
      </ul>
   </header>
</template>

<script>
const list = [
   {
		title: '生活缴费',
      icon: 'pay',
      router: ''
	},
   {
		title: '访客通行',
      icon: 'code',
      router: ''
	},
   {
		title: '物业报事',
      icon: 'setting',
      router: ''
	},
   {
		title: '客服热线',
      icon: 'phone',
	}
]

export default {
   data() {
      return {
         list: list
      }
   },
   methods: {
      targetNew(i) {
         this.$createToast({
            type: 'error',
            time: 2000,
            txt: '功能开发中'
         }).show()
         return
         // this.$router.push({path: i})
      }
   },
}
</script>

<style scoped>
header.head{
   background: url(../../../../static/img/home/scan.png) left top no-repeat;
   background-size: cover;
   color: #FFF;
   font-size: 15px;
}
.headerInfo{
   padding: 20px;
}
.cubeIcon{
   font-size: 20px;
}

.cubeic-location,.cubeic-scan{
   margin-right: 8px;
}

li.li{
   padding: 15px 0;
}
.bigCubeIcon{
   font-size: 25px;
   margin-bottom: 20px;
}
a.phoneNumber{
   color: #FFF;
}
</style>