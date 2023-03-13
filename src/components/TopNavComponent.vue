
<script setup lang="ts">
import { inject, type Ref } from 'vue';
import Icon from '@/lib/Icon.vue'

const asideVisible = inject<Ref<boolean>>('asideVisible')

const props = defineProps({
  toggleMenuVisible:{
    type: Boolean,
    default: false
  }
})

</script>
<template>
    <header class="topnav">
      <div class="logo"><Icon name="design" /></div>
      <div class="menu">
        <Icon name="menu" />
      </div>
      <div v-if="toggleMenuVisible" class="toggleMenu" @click="() => {asideVisible = !asideVisible}">
        <Icon name="menu" />
      </div>
    </header>
</template>
<style lang="scss">
.topnav{
    height: $header-height;
    box-shadow: 0 0 3px 3px rgba($color: #000000, $alpha: 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $menu-background;
    .logo{
      padding-top: 4px;
      padding-left: 12px;
      >svg{
        width: 38px;
        height: 38px;
      }
    }

    .menu{
        display: flex;
        svg{
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
    }
    .toggleMenu{
      display: none;
      position: absolute;
      right: 16px;
      top: 12px;
      >svg{
        width: 24px;
        height: 24px;
      }
    }
    @media (max-width: 500px) {
      .menu{display: none;}
      .logo{margin: 0 auto;}
      .toggleMenu{display: inline-block;}
    }
    
}
</style>