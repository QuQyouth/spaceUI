<script setup lang="ts">
import { ref } from 'vue';
import Calendar from '@/lib/Calendar.vue';
const dateValue = ref('2023/04/11')
const handleSelectDay = (day:string)=>{
    console.log(day);
}
</script>
<template>
        <Calendar dateValue='2023/04/11' @selectDay="handleSelectDay"/>
</template>