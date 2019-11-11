<template>
   <div class="login">
		<common-header></common-header>
      <div class="logoArea page-wrap wrap-center wrap-vcenter">
         <img src="../../static/img/logo.png" class="logo"/>
      </div>
      <ul class="ul WeirdBox">
         <li class="li page-wrap wrap-vcenter wrap-between">
            <i class="cubeic-person cubeIcon personIcon"></i>
            <input type="text" v-model="param.phone" placeholder="请输入用户名/手机号" maxlength="11" class="phoneNumber wrap-content">
            <i class="cubeic-question cubeIcon questionIcon"></i>
         </li>
         <li class="li page-wrap wrap-vcenter wrap-between">
            <i class="cubeic-lock cubeIcon lockIcon"></i>
            <input type="password" v-model="param.password" placeholder="请输入密码" class="wrap-content">
         </li>
         <li class="li lastP WeirdBox page-wrap wrap-between">
            <p @click="targetNewPage('forget')">忘记密码</p>
            <p @click="targetNewPage('singup')">注册账号</p>
         </li>
      </ul>
      <p class="btn WeirdBox page-wrap wrap-center">
         <span class="confirm" @click="getIndexHandler">登录</span>
      </p>
   </div>
</template>

<script>
import commonHeader from "@/components/commonHeader";

export default {
   components: {
		commonHeader
	},
   data() {
      return {
         param: {
            phone: 13456789123,
            password: ''
         },
      }
   },
   methods: {
      targetNewPage(k) {
         if (k=='forget') {
            this.$createToast({
               type: 'warn',
               time: 2000,
               txt: '功能正在实验中'
            }).show()
            return
            // this.$router.push({path: '/SetPassWord'})
            // this.$router.replace({path: ''})
         } else if (k=='singup') {
            this.$createToast({
               type: 'warn',
               time: 2000,
               txt: '功能正在实验中'
            }).show()
            return
            // this.$router.push({path: '/BindHousing1'})
            // this.$router.replace({path: ''})
         }
      },
      getIndexHandler(){
         if(!this.param.phone||this.param.phone.length<11){
            this.$createToast({
               type: 'error',
               time: 2000,
               txt: '请输入用户名或手机号'
            }).show()
            return
         }
         let phonereg=/^[1][3,4,5,7,8][0-9]{9}$/
         let isFlag = phonereg.test(this.param.phone);
         if(!isFlag){
            this.$createToast({
               type: 'error',
               time: 2000,
               txt: '登录失败，您登录的手机号与预留手机号不符'
            }).show()
            return
         } else if(isFlag){
            // sessionStorage.setItem('userId','5555')
            // this.$router.push({ path: "/",query:{id:1} });
            // return
         }
      },
   },
}
</script>

<style scoped>
.login{
   height: 100%;
   font-size: 13px;
}
.logoArea{
   width: 100%;
   height: 176px;
   background: url(../../static/img/login/banner.png) left top no-repeat;
   background-size: contain;
}
img.logo{
   width: 100px;
   height: 100px;
}

ul.ul{
   padding: 5px 25px;
}
li.li{
   padding: 20px 0;
}
.cubeIcon{
   color: #4c9ff4;
   font-size: 20px;
}
.personIcon,.lockIcon{
   margin-right: 16px;
}
.questionIcon{
   margin-left: -20px;
}
input{
   height: 30px;
   font-size: 14px;
   border-bottom: 1px solid #ddd;
   background-color: #f7f7f7;
}
li.lastP{
   padding-left: 15px;
   padding-right: 15px;
   color: #aaa;
}

p.btn{
   padding: 0 25px;
}
span.confirm{
   width: 100%;
   color: #FFF;
   font-size: 16px;
   padding: 10px 0;
   /* padding: 10px 105px; */
   background-color: #5599FF;
   border-radius: 25px;
   box-shadow: 0px 2px 5px 0px rgba(113, 139, 253, .28);
}

.my_popup,{
   padding: 50px;
}
.my_popup_content{
   color: #FFF;
   padding: 20px;
   border-radius: 10px;
   font-size: 16px;
   background-color: rgba(0, 0, 0, .2);
}
</style>