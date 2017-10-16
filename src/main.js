/* eslint-disable no-param-reassign */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { AjaxPlugin } from 'vux';
import App from '@/App';
import router from '@/router';

Vue.use(AjaxPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);

require('es6-promise').polyfill();// 兼容低版本浏览器

FastClick.attach(document.body);// 移除移动端点击延迟

Vue.config.productionTip = false;

const store = new Vuex.Store({}); // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false,
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
  },
});

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', { isLoading: true });
  next();
});

router.afterEach(() => {
  store.commit('updateLoadingStatus', { isLoading: false });
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app-box');
