<script setup lang="ts">
import { onMounted } from 'vue';
import Demo from './Demo.vue'
import SwitchDemo1 from './switch-demo/Switch.demo1.vue'
import SwitchDemo1Str from './switch-demo/Switch.demo1.vue?raw'
</script>
<template>
    <div>
        <h2>Switch 组件示例</h2>
        <!-- <SwitchDemo1 /> -->
        <Demo :demoComponent="SwitchDemo1" :demoStr="SwitchDemo1Str"></Demo>
    </div>
</template>