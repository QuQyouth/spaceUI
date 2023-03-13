<script setup lang="ts">
import TopNav from '@/components/TopNavComponent.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import CircleStart from '@/components/CircleStart.vue'
</script>

<template>
  <TopNav :githubVisible="true"/>
  <main>
    <HelloWorld msg="Space UI" /> 
    <RouterLink to="/doc"><CircleStart /></RouterLink>    
    <a class="a-git" href="http://">GitHub</a>
  </main>
</template>

<style lang="scss" scoped>
  main{
    height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .a-git{
      margin: 0 auto;
      padding: 4px 12px;
      border-radius: 4px;
      color: $default-border-color;
      // border: 1px solid $default-border-color;

      &:hover{
        color: $activated-background;
        box-shadow: $default-shadow;
        border: none;
      }
    }
  }
</style>
