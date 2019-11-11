import Vue from 'vue'
import Router from 'vue-router'

const login = ()=> import('@/pages/login');//登录

const Index = ()=> import('@/pages/index')//首页

const homePage = ()=>import('@/pages/homePage/index')//首页

Vue.use(Router)

 let router = new Router({
	mode: 'history',
	scrollBehavior: function(to, from, savePosition) {
		if (savePosition) {
			return savePosition;
		} else {
			return { x: 0, y: 0 }
		}
	},
	routes: [
		{
			path: '/',
			component: Index,
			meta: {},
			children: [
				{
					path: '',
					component: homePage,
					meta: {
						login: true,
						title: ''
					},
				},
			]
		},
		{
			path: '/login',
			component: login,
			meta: {
				login: false,
				title: '登录'
			},
		}
	]
})

// async function loginStatus(to, from, next) {
	// try {
	// 	let res = await currUser({})
	// 	if (res.code == 1) {
	// 		if(res.data.isLogin){
	// 			next();
	// 		}else{
	// 			router.push({ path: 'login' })
	// 		}
	// 	} else {
	// 		router.push({ path: 'login' })
	// 	}
	// } catch (e) {
	// 	router.push({ path: 'login' })
	// } finally {
	// }
// }

router.beforeEach((to, from, next) => {
	// console.log(to)
	// console.log(from)
	if (to.meta.login) {
		console.log(to)
		// router.push({ path: '/login' })
		// loginStatus(to, from, next)
		next();
	} else {
		next();
	}
})

router.afterEach((to, from) => {
	if(to.name){
		window.document.title =  to.meta.title;
	}else{
		window.document.title = 'H5开发项目'
	}
})

export default router