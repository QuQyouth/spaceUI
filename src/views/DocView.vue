<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
</script>
<template>
  <div class="doc">
    <TopNav />
    <main>
      <aside>
        <ul class="menu-list">
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
}
.menu-list{
  position: absolute;
  top: 0;
  right: 8px;
  width: 120px;
  border-radius: 8px;
  li{
    text-align: center;
    height: 36px;
    line-height: 36px;
    border: 1px solid black;
  }
  background-color: red;
}
</style>
