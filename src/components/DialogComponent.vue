<script setup lang="ts">
import Demo from './Demo.vue'
import DialogDemo1 from './dialog-demo/DialogDemo1.vue'
import DialogDemo1Str from './dialog-demo/DialogDemo1.vue?raw'

import DialogDemo2 from './dialog-demo/DialogDemo2.vue'
import DialogDemo2Str from './dialog-demo/DialogDemo2.vue?raw'

</script>
<template>
    <div class="demo">
        <h2>Dialog 组件示例</h2>
        <h3>常规用法</h3>
        <p>通过<span> v-model:visible </span>来控制Dialog显示，你可以在<span> @handleOk </span>函数和<span> @handleCancel </span>中写你点击 OK 和 Cancel 之后的逻辑</p>
        <Demo :demoComponent="DialogDemo1" :demoStr="DialogDemo1Str" title="常规用法"></Demo>
        <h3>直接打开</h3>
        <p>支持通过 <span> openDialog </span>函数来直接打开Dialog，它接收一个对象，你可以通过下面这种形式来设置Dialog的内容</p>
        <Demo :demoComponent="DialogDemo2" :demoStr="DialogDemo2Str" title="openDialog"></Demo>
    </div>
</template>

<style lang="scss">
.demo{
    >h2{
        margin-bottom: 12px;
    }
    >h3{
        color: $activated-background;
        margin-top: 12px;
        margin-bottom: 12px;
    }

    span{
        color: $activated-background;
        font-weight: bolder;
    }
}

</style>