<script setup lang="ts">
import TopNav from '@/components/TopNavComponent.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import CircleStart from '@/components/CircleStart.vue'
</script>

<template>
  <TopNav :githubVisible="true"/>
  <main>
    <HelloWorld msg="Space UI" />     
    <CircleStart></CircleStart>
  </main>
</template>
