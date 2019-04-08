// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAMap from 'vue-amap'
import echarts from 'echarts'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'


Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$echarts = echarts;
Vue.use(Viewer, {
  defaultOptions: {
      zIndex: 9999
  }
})

Vue.use(iView);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '56dadea09a15902695345847a80c6ce9',
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
