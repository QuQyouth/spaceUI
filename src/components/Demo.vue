<script setup lang="ts">
import { ref } from 'vue';
import PreviewCode from './PreviewCode.vue'
const props = defineProps({
    demoComponent: Object,
    demoStr: String,
    title: {
        type: String,
        default: '常规用法'
    }
})
const codeVisible = ref(false)
const controlCode = () => {
    codeVisible.value = !codeVisible.value
}
</script>
<template>
<div class="demo">
    <div class="base-demo">
        <div class="base-demo-header">
            <div class="title">{{ props.title }}</div>
            <div v-if="!codeVisible" class="control-code" @click="controlCode">显示代码</div>
            <div v-else class="control-code" @click="controlCode">隐藏代码</div>
        </div>
        <div class="demo-component">
            <component :is="demoComponent"></component>
        </div>
        
    </div>
    <div v-if="codeVisible" class="demo-code" :key="1">
        <PreviewCode :code="demoStr"></PreviewCode>
    </div>
    
    
</div>
</template>

<style lang="scss">
.demo{
    margin-top: 12px;
    margin-right: 12px;
    margin-bottom: 24px;
    overflow: hidden;
}
.base-demo{
    max-width: 600px;
    &-header{
        display: flex;
        justify-content: space-between;
        padding: 8px;
        background-color: $white-plus;
        box-shadow: $default-shadow;
        font-weight: bolder;

        .control-code{
            box-shadow: $inner-shadow;
            padding: 1px 4px;
            border-radius: 4px;
            cursor: pointer;
            &:hover{
                box-shadow: $default-shadow;
            }
        }
    }

    .demo-component{
        padding-left: 8px;
        min-height: 100px;
        display: flex;
        align-items: center;
        border: 1px solid $white-plus;
    }
}
.demo-code{
    max-width: 600px;
    border: 1px solid $white-plus;
    padding: 8px;
    overflow: overlay;
    white-space: nowrap;
}

/* 滚动条整体 */
.demo-code::-webkit-scrollbar {
    height: 6px;
    width: 20px;
}
/* 两个滚动条交接处 -- x轴和y轴 */
.demo-code::-webkit-scrollbar-corner {
    background-color: transparent;
}

/* 滚动条滑块 */
.demo-code::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: $white-plus;
}

/* 滚动条轨道 */
.demo-code::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

</style>