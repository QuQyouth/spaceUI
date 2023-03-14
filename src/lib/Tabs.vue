<script setup lang="ts">
import { ref, toRefs, watchEffect } from 'vue'
import type { Items } from './type';

const props = defineProps({
    items: Array<Items>
})

const {items} = toRefs(props)

const tabIndex = ref<number>(0)

const changeTab = (index: number) => {
  tabIndex.value = index
}

const currentRef = ref<HTMLDivElement | null>(null)
const container = ref<HTMLDivElement | null>(null)
const indicator = ref<HTMLDivElement | null>(null)
const elementWidth = ref(0)
const translateWidth = ref(0)

const xxx = () => {
    if (container.value && currentRef.value) {
        const left1 = container.value.getBoundingClientRect().left
        const left2 = currentRef.value.getBoundingClientRect().left
        translateWidth.value = left2 - left1
        elementWidth.value = currentRef.value.clientWidth
    }
}
watchEffect(xxx)
    
</script>
<template>
<div class="space-tabs" :style="[{'--tabWidth': `${translateWidth}px`},{'--currentWidth': `${elementWidth}px`}]">
    <div class="space-tab-header" ref="container">
        <div
            :class="[tabIndex === index ? 'active' : '']"
            v-for="(tab, index) in items"
            :key="tab.id"
            @click="changeTab(index)"
            :ref="(el) => {if(tabIndex === index) currentRef = el as HTMLDivElement}"
        >
            {{ tab.title }}
            
        </div>
        <div class="space-tab-header-indicator" ref="indicator"></div>
    </div>
    <div class="space-tab-body">
        <div :class="[tabIndex === index ? 'show' : 'hide']" v-for="(tab, index) in items" :key="tab.id">
            {{ tab.content }}
        </div>
    </div>
</div>
</template>
  
<style lang="scss">

.space-tabs {
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    color: $default-background;
    box-shadow: $default-shadow;
    width: 100%;

    .space-tab-header {
        padding: 4px;
        display: flex;
        background-color: $white-plus;
        box-shadow: .3rem .3rem .6rem #c8d0e7;
        border-radius: 12px;

        
        >div{
            padding: 8px 16px;
            cursor: pointer;

            &:hover{
                color: $activated-background;
            }
            
        }
        .active{
            position: relative;
            color: $activated-background;
            border-radius: 12px;
        }
        &-indicator{
            padding: 3px;
            position: absolute;
            top: 2px;
            left: var(--tabWidth);
            width: var(--currentWidth);
            height: 90%;
            border-radius: 12px;
            box-shadow: $inner-shadow;
            transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        
    }

    .space-tab-body{
        min-height: 240px;
        > div {
            padding: 10px;

            &.hide{
                display: none;
            }
        }
    }
}
</style>