import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=>import('../components/Home/Home.vue')
const Category = ()=>import('../components/Category/Category.vue')
const Cart = ()=>import('../components/Cart/Cart.vue')
const Profile = ()=>import('../components/Profile/Profile.vue')
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/category',
    component:Category,
    meta:{
      title:'分类'
    }
  },
  {
    path: '/cart',
    component:Cart,
    meta:{
      title:'购物车'
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      title:'我的'
    }
  },
]
const router = new Router({
  routes,
  mode:'history'
})
// 全局导航守卫
router.beforeEach((to, from, next)=>{
  document.title = to.matched[0].meta.title;
  next()
})
export default router;
