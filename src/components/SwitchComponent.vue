<script setup lang="ts">
import Demo from './Demo.vue'
import SwitchDemo1 from './switch-demo/Switch.demo1.vue'
import SwitchDemo1Str from './switch-demo/Switch.demo1.vue?raw'

</script>
<template>
    <div>
        <h2>Switch 组件示例</h2>
        <Demo :demoComponent="SwitchDemo1" :demoStr="SwitchDemo1Str" title="常规用法"></Demo>


    </div>
</template>
<style lang="scss" scoped>
h2{
    margin-bottom: 18px;
}
    
</style>