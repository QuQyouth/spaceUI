
<script setup lang="ts">
import { inject, type Ref } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>
<template>
    <header class="topnav">
      <div class="logo">logo</div>
      <div class="menu" @click="() => {asideVisible = !asideVisible}">
        menu
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
    .menu{
        display: flex;
    }
    
}
</style>