<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import { RouterView } from 'vue-router'
const width = document.documentElement.clientWidth
const asideVisible = ref(width <= 500 ? false: true)


provide('asideVisible', asideVisible)

</script>

<template>
  <RouterView />
</template>

