<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
</script>
<template>
  <div class="doc">
    <TopNav />
    <main>
      <aside>
        <div class="triangle"></div>
        <ul class="menu-list">
          <li>开始</li>
          <li>Switch组件</li>
          <li>Button组件</li>
          <li>Dialog组件</li>
          <li>Tabs组件</li>
        </ul>
      </aside>
      <div class="content">content</div>
    </main>
  </div>
</template>

<style lang="scss">
aside{
  position: relative;
  z-index: 10;

  .triangle{
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    right: 10px;
    top: -20px;
  }
}
.menu-list{
  position: absolute;
  top: 0;
  right: 8px;
  width: 180px;
  border-radius: 8px;
  box-shadow: 0 5px 3px 3px rgba($color: #000000, $alpha: 0.1);
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
  li{
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
}
</style>
