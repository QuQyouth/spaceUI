<script setup lang="ts">
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router'

const asideVisible = ref(false)

provide('asideVisible', asideVisible)

</script>

<template>
  <RouterView />
</template>

