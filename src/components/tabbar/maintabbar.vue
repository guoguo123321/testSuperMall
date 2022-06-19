<template>
  <div id="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <img slot="icon-item" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="icon-item-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="icon-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="icon-item" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="icon-item-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="icon-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="icon-item" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="icon-item-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="icon-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="purple">
        <img slot="icon-item" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="icon-item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="icon-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from './tabbar.vue'
import tabBarItem from './tabbarItem.vue'
export default {
  name: 'maintabbar',
  components:{
    tabBar,
    tabBarItem,
  }
}
</script>

<style>
  @import url('../../assets/css/base.css');
</style>
