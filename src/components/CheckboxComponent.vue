<script setup lang="ts">
import Demo from './Demo.vue'
import CheckboxDemo1 from './checkbox-demo/CheckboxDemo1.vue'
import CheckboxDemo1Str from './checkbox-demo/CheckboxDemo1.vue?raw'

import CheckboxDisable from './checkbox-demo/CheckboxDisable.vue'
import CheckboxDisableStr from './checkbox-demo/CheckboxDisable.vue?raw'

import CheckboxGroupDemo from './checkbox-demo/CheckboxGroupDemo.vue'
import CheckboxGroupDemoStr from './checkbox-demo/CheckboxGroupDemo.vue?raw'


</script>
<template>
  <div class="demo">
        <h2>Checkbox 组件示例</h2>
        <h3>单独使用</h3>
        <p>使用<span> v-model:modelValue </span>来设置是否选中</p>
        <Demo :demoComponent="CheckboxDemo1" :demoStr="CheckboxDemo1Str"/>
        <h3>支持disabled</h3>
        <Demo :demoComponent="CheckboxDisable" :demoStr="CheckboxDisableStr" title="disabled"/>
        <h3>使用checkbox group</h3>
        <p>你可以定义一个数组，然后通过在<span> Checkbox </span>组件中通过 v-for 遍历, 将每一项传递给<span> label </span>属性作为checkbox的每一项,然后在 Checkbox 外层包裹<span> CheckboxGroup </span>组件 为其绑定<span> v-model:modelValue </span>来作为需要选择的 options, 这样你就能通过你定义的ref，方便地得到所选数据。你还可以通过<span> change </span>事件来监听所选项的改变</p>
        <Demo :demoComponent="CheckboxGroupDemo" :demoStr="CheckboxGroupDemoStr" title="checkbox group"/>
    </div>

</template>

