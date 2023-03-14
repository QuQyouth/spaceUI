<script setup lang="ts">
import { ref } from 'vue';
import PreviewCode from './PreviewCode.vue'
const props = defineProps({
    demoComponent: Object,
    demoStr: String
})
</script>
<template>
<div class="demo">
    <div class="demo-component-code">
        <component :is="demoComponent"></component>
    </div>
    
    <div>显示代码</div>
    <PreviewCode :code="demoStr"></PreviewCode>
</div>
</template>