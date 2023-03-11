<script setup lang="ts">
import Tabs from '@/lib/Tabs.vue'
import { ref } from 'vue';

interface Items {
    id: number
    title: string
    content: string
  }
const items = ref<Items[]>([
    { id: 1, title: 'Tab 1', content: 'This is tab 1 content' },
    { id: 2, title: 'Tab 2222', content: 'This is tab 2 content' },
    { id: 3, title: 'Tab 3', content: 'This is tab 3 content' },
  ])
</script>

<template>
<Tabs :items="items"></Tabs>
</template>
