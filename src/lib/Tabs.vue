<script setup lang="ts">
import { ref, toRefs, watchEffect } from 'vue'

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
const translateWidth = ref(0)

const xxx = () => {
    if (container.value && currentRef.value) {
        const left1 = (container.value as HTMLDivElement).getBoundingClientRect().left
        const left2 = (currentRef.value as HTMLDivElement).getBoundingClientRect().left
        translateWidth.value = left2 - left1
    }
    console.log(`left:${translateWidth.value}`);
}
watchEffect(xxx)
</script>
<template>
<div class="space-tabs" :style="{'--tabWidth': `${translateWidth}px`}">
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
    </div>
    <div class="space-tab-body">
        <div :class="[tabIndex === index ? 'show' : 'hide']" v-for="(tab, index) in items" :key="tab.id">
            {{ tab.content }}
            {{ currentRef?.clientWidth }}
            {{ translateWidth }}
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
    background-color: $white-plus;
    box-shadow: $default-shadow;

    .space-tab-header {
        padding: 4px;
        display: flex;
        transition: all, 1s ease;
        // box-shadow: .3rem .3rem .6rem #c8d0e7;
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
            border: 1px solid $activated-background-right;
            // transform: translateX(--tabWidth);
            transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1);

            &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    border-radius: 4px;
                    background: red;
                }
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