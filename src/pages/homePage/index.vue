<template>
   <div class="home_content">
      <home-head/>
      <div class="scroll-list-wrap">
         <cube-scroll ref="scroll" :data="scrollData">
            <proclamation/>
            <service/>
            <service/>
            <service/>
            <service/>
            <service/>
            <service/>
            <service/>
         </cube-scroll>
      </div>
   </div>
</template>

<script>
import homeHead from "./children/homeHead";
import proclamation from "./children/proclamation";
import service from "./children/service";

export default {
   data() {
      return {
         scrollData: []
      }
   },
   components: {
      homeHead,
      proclamation,
      service,
   },
}
</script>

<style lang="stylus">
.scroll-list-wrap
   height: calc(100% - 150px)
</style>


<style scoped>
.home_content{
   height: 100%;
}
</style>