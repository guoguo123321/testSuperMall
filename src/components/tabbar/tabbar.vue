<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style>
  #tabbar{
    height: 49px;
    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 2px rgba(100, 100, 100, .08);
    background-color: #f6f6f6;
    font-size: 14px;
  }
</style>
