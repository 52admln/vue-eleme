import Vue from 'vue';
import Router from 'vue-router';
// 导入组件
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

// 注册 Router
Vue.use(Router);
// export 路由实例
export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
});
