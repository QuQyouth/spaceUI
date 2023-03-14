<script setup lang="ts">
import Checkbox from '@/lib/Checkbox.vue';
import { ref } from 'vue';
const myValue = ref(false)
</script>

<template>
  <Checkbox label="option" v-model:modelValue="myValue"></Checkbox>
</template>