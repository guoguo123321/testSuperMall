<template>
  <div id="tabbarItem" @click="tabbarItem">
    <div v-if="!isActive"><slot name="icon-item"></slot></div>
    <div v-else><slot name="icon-item-active"></slot></div>
    <div :style="activeStyle"><slot name="icon-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red',
    }
  },
  data(){
    return{
    }
  },
  methods:{
    // 点击tabbar路劲进行跳转
    tabbarItem(){
      if(this.$route.path != this.path){
        // console.log(this.path)
        this.$router.replace(this.path)
      }
    }
  },
  computed:{
    // 传过来的路劲是否存在活跃的路劲里
    isActive(){
      // console.log(this.$route.path.indexOf(this.path) !== -1)
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      // console.log(this.activeColor)
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
}
</script>

<style>
  #tabbarItem{
    flex: 1;
    text-align: center;
    margin-top: 3px;
  }
  #tabbarItem img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>
