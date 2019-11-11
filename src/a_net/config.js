import Vue from "vue";
import 'es6-promise/auto';

import api from './api';

/*----------------------------------------通用样式引入--------------------------------------------*/
import '../../static/css/common.css';
import '../../static/css/border.css';

/*-----------------------------------------解决IOS点击事件响应慢问题------------------------------*/
import FastClick from 'fastclick';
FastClick.attach(document.body);

/*-----------------------------------------axios使用设置------------------------------*/
import axios from 'axios'
Vue.prototype.$axios = axios;

/**-----------------------------------------cube_ui引入------------------------------ */

import Cube from 'cube-ui'
Vue.use(Cube)
Vue.prototype.$Cube = Cube

Vue.config.productionTip = false

api.init(Vue,axios);

export default Vue;