<script setup lang="ts">
import { inject, type Ref } from 'vue';
import TopNav from '../components/TopNavComponent.vue'
const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>
<template>
  <div class="doc">
    <TopNav :toggleMenuVisible="true"/>
    <main class="main">
      <aside v-if="asideVisible">
        <div class="triangle"></div>
        <ul class="menu-list">
          <li>
            <RouterLink to="/doc/intro">介绍</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/switch">Switch 组件</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/button">Button 组件</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/dialog">Dialog 组件</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/tabs">Tabs 组件</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/CheckBox">CheckBox 组件</RouterLink>
          </li>
        </ul>
      </aside>
      <div class="content"><RouterView></RouterView></div>
    </main>
  </div>
</template>

<style lang="scss">

aside{
  position: relative;
  z-index: $z-index-aside;

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

    .router-link-active{
      display: inline-block;
      text-align: center;
      width: 100%;
      height: 36px;
      line-height: 36px;
      background-color: $white-plus;
      color: $activated-background;
  }
  }
}
@media (min-width: 500px) {
  .triangle{display: none;}
  .main {
    display: flex;
    
    aside{
      width: 180px;
      height: 100vh;
      flex-shrink: 0;
      
        .menu-list{
          position: fixed;
          height: 100vh;
          border-radius: 0;
          top: 48px;
          left: 0;
        }
        
    }

    .content{
      flex-grow: 1;
    }

    
  }
  
}
.content{
  height: calc(100vh - $header-height);
  padding: 24px;
}
</style>
