<script setup lang="ts">
import { ref } from 'vue';
import Calendar from '@/lib/Calendar.vue';
const dateValue = ref('2023/04/11')
</script>
<template>
        <Calendar v-model:dateValue = 'dateValue'/>
</template>