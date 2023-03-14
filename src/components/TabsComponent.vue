<script setup lang="ts">
import Demo from './Demo.vue'
import TabsDemo1 from './tabs-demo/TabsDemo1.vue'
import TabsDemo1Str from './tabs-demo/TabsDemo1.vue?raw'


</script>
<template>
  <div class="demo">
        <h2>Tabs 组件示例</h2>
        <h3>常规用法</h3>
        <p>它接受一个对象，你需要将你的标题和内容通过对象的<span> title </span>和<span> content </span>属性传递给组件</p>
        <Demo :demoComponent="TabsDemo1" :demoStr="TabsDemo1Str"/>
    </div>

</template>
