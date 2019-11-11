var api = {
   init(Vue,axios) {
      Vue.prototype.URL = {
         // 'BASEURL': 'http://dfub.xdf.cn/',//正式环境
         'BASEURL': 'http://dfubq.staff.xdf.cn/',//测试环境
         /** 公用 */
         'defaultSeason': 'data/currQuarter.json',//获取默认年和季
         /** 续班率 */
         'continue_region': 'continue/region/data.json',//按大区统计
         'continue_province': 'continue/province/data.json',//按省份统计
         'continue_campus': 'continue/area/data.json',//按校区统计
         'continue_stage': 'continue/project/data.json',//按项目统计
         'continue_subject': 'continue/learnStage/data.json',//按教研组统计
         'continue_teacher': 'continue/teacher/data.json',//按老师统计
         'continue_project': 'continue/project/subject.json',//续班率--获取教研组
         /** 退班率 */
         'regionDatas': 'bi/outcalc/regionCalc.json',//获取大区统计数据
         'provinceDatas': 'bi/outcalc/provinceCalc.json',//获取省区统计数据
         'schoolDatas': 'bi/outcalc/campusCalc.json',//获取校区统计数据
         'stageDatas': 'bi/outcalc/stageCalc.json',//获取项目/学段统计数据
         'stageSubject': 'bi/outcalc/stageSubjectCalc.json',//获取教研组统计数据
         /** 预算与班容 */
         'budget_region': 'statistics/budget/capacity/by/region.json',//按大区统计
         'budget_province': 'statistics/budget/capacity/by/province.json',//按省份统计
         'budget_campus': 'statistics/budget/capacity/by/campus.json',//按校区统计
         'budget_stage': 'statistics/budget/capacity/by/stage.json',//按项目统计
         'budget_subject': 'statistics/budget/capacity/by/grade/subject.json',//按教研组统计
         /** 门店统计  */
         'storeRegion': '/bi/store/regionStatistics.json',//按大区统计
         'storeProvince': '/bi/store/provinceStatistics.json',//按省份统计
         'storeCampus': '/bi/store/campusStatistics.json',//按校区统计
         'storeDetail': '/bi/store/listStores.json',//门店详情统计
         'storeList': '/system/listCampusIncludeInvalid.json',//校区全部列表
      }
      axios.interceptors.request.use(
			config => {
				config.headers.common = {
					'Content-Type': "application/json; charset=utf-8", //
					'X-Device-Id':"ad56dc87-46c5-4232-93a8-7938031ddb76" //
				};
				config.timeout = 6000;
				return config;
			},
			err => {
				return null
			}
      )
      
      // 拦截响应response，并做一些错误处理
      axios.interceptors.response.use((response) => {
         return response;
      }, (err) => {
         // 这里是返回状态码不为200时候的错误处理
         if (err.toString().indexOf("timeout") != -1) {
            Vue.prototype.$Cube.Dialog.$create({
               type: 'alert',
               content: "请求超时，请稍后再试",
               icon: 'cubeic-alert'
            }).show()
         }
         if (err && err.response) {
            console.log(err)
            switch (err.response.status) {
               case 400:
                  err.message = '请求错误'
                  break

               case 401:
                  err.message = '未授权，请登录'
                  break

               case 403:
                  err.message = '拒绝访问'
                  break

               case 404:
                  err.message = `请求地址出错: ${err.response.config.url}`
                  break

               case 408:
                  err.message = '请求超时'
                  break

               case 500:
                  err.message = '服务器开个小差，请稍后再试'
                  break

               case 501:
                  err.message = '服务器开个小差，请稍后再试'
                  break

               case 502:
                  err.message = '服务器开个小差，请稍后再试'
                  break

               case 503:
                  err.message = '服务器开个小差，请稍后再试'
                  break

               case 504:
                  err.message = '服务器开个小差，请稍后再试'
                  break

               case 505:
                  err.message = 'HTTP版本不受支持'
                  break

               default:
            }
            Vue.prototype.$Cube.Dialog.$create({
               type: 'alert',
               content: err.message,
               icon: 'cubeic-alert',
               confirmBtn: {
                  text: '我知道了',
                  active: true,
                  disabled: false,
                  href: 'javascript:;'
               },
               onConfirm: () => {
                  let loadeds = document.getElementsByClassName("loaded")
                  for (let i = 0; i < loadeds.length; i++) {
                     loadeds[i].style.display = 'none';
                  }
               }
            }).show()
         }
         return Promise.reject(err)
      })

   }
}
export default api