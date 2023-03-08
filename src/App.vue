<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import { RouterView } from 'vue-router'
import router from './router';
const width = document.documentElement.clientWidth
const asideVisible = ref(width <= 500 ? false: true)


provide('asideVisible', asideVisible)
router.afterEach(() => {
  if(width <= 500){
    asideVisible.value = false
  }
  
})

</script>

<template>
  <RouterView />
</template>

