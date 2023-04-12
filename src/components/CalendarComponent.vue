<script setup lang="ts">
import Demo from './Demo.vue';
import CalendarVue from './calendar-demo/Calendar.vue';
import CalendarStr from './calendar-demo/Calendar.vue?raw';


</script>
<template>
    <div>
        <h2>Calendar 组件示例</h2>
        <h3>基本用法</h3>
        
        <Demo :demoComponent="CalendarVue" :demoStr="CalendarStr"></Demo>
        <br>
        
    </div>
</template>
<style lang="scss" scoped>
h2{
    margin-bottom: 12px;
}
h3{
    color: $activated-background;
    margin-top: 12px;
    margin-bottom: 12px;
}

span{
    color: $activated-background;
    font-weight: bolder;
}
</style>