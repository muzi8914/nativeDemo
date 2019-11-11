<template>
   <div class="index">
		<section class="content">
         <router-view></router-view>
		</section>
		<common-footer></common-footer>
   </div>
</template>

<script>
import commonFooter from "@/components/commonFooter";

export default {
   components: {
		commonFooter
	},
}
</script>

<style scoped>
.index{
   height: 100%;
}
.content{
	height: calc(100% - 50px);
	overflow: hidden;
}
</style>