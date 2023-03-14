<script setup lang="ts">
import Demo from './Demo.vue';
import BaseButton from './button-demo/BaseButton.vue';
import BaseButtonStr from './button-demo/BaseButton.vue?raw';

import DisableButton from './button-demo/DisableButton.vue';
import DisableButtonStr from './button-demo/DisableButton.vue?raw';

import LoadingButton from './button-demo/LoadingButton.vue'
import LoadingButtonStr from './button-demo/LoadingButton.vue?raw'

import IconButton from './button-demo/IconButton.vue';
import IconButtonStr from './button-demo/IconButton.vue?raw';


</script>
<template>
    <div>
        <h2>Switch 组件示例</h2>
        <h3>基本用法</h3>
        <p>使用<span> theme </span>属性改变按钮主题，这里提供三个可选值：primary default danger</p>
        <Demo :demoComponent="BaseButton" :demoStr="BaseButtonStr"></Demo>
        <h3>支持disabled</h3>
        <Demo :demoComponent="DisableButton" :demoStr="DisableButtonStr" title="disabled"></Demo>
        <h3>支持loading</h3>
        <Demo :demoComponent="LoadingButton" :demoStr="LoadingButtonStr" title="loading"></Demo>
        <h3>支持Icon</h3>
        <p>可通过icon-position属性设置图标位置</p>
        <Demo :demoComponent="IconButton" :demoStr="IconButtonStr" title="Icon"></Demo>
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