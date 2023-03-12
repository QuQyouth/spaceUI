<script lang="ts">
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import { computed, toRefs, useAttrs, type PropType } from 'vue'
import '//at.alicdn.com/t/c/font_3942763_ul2evz6zjkr.js'
import Icon from './Icon.vue'
const props = defineProps({
    theme: {
        type: String,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {}, 
    iconPosition: {
        type: String,
        default: 'left',
        validator(value){
            return value === 'left' || value === 'right'
        }
    },
    loading: {
        type: Boolean,
        default: false
    },
})
const {theme, icon, iconPosition, loading, disabled} = toRefs(props)
const attrs = useAttrs()
// 可以使用 {size, ...rest} = useAttrs()将属性分开

const classes = computed(() => {
    return {
        [`theme-${theme.value}`]: theme.value,
        [`icon-${iconPosition.value}`]: iconPosition.value,
        [`icon-disable`]: disabled.value,
    }
})

const buttonOnClick = (e:Event) => {
    if(disabled){
        e.preventDefault()
    }
    emit('click')
}
const emit = defineEmits(['click'])
</script>
<template>
    <div class="space-button-wrapper">
        <button 
            class="space-button" 
            :class="classes"
            v-bind="attrs"
            :disabled="disabled"
            @click="(e) =>{buttonOnClick(e)}"
        >
            <Icon v-if="icon && !loading" :name="icon" />
            <Icon class="space-loading" v-if="loading" name="loading"/>
            <div class="space-content"><slot /></div>
            
        </button>
    </div>
</template>

<style lang="scss">
@keyframes spin{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.space-button-wrapper{
    display: inline-block;
    cursor: pointer;
    transition: .3s ease;
    vertical-align: middle;

    .space-button{
        cursor: pointer;
        vertical-align: middle;
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        transition: all .4s ease;
        background-color: $white-plus;
        display: flex;
        align-items: center;
        box-shadow: $default-shadow;
        margin-left: 4px;
        margin-right: 4px;
        >.space-icon{
            margin-right: 0.3em;
            order: 1;
        }
        >.space-content{
            order: 2;
        }

        &.icon-right{
            >.space-content{order: 1;}
            >.space-icon{
                margin-left: 0.3em;
                margin-right: 0;
                order: 2;
            }
        }
        .space-loading{
            animation: spin 1s infinite linear;
        }
    }
    .theme-primary{
        background-image: linear-gradient(330deg, $activated-background-right 0%, $activated-background 50%, $activated-background-left 100%);
        box-shadow: inset 8px 8px 40px $activated-background-left, inset -8px -8px 40px $activated-background-right, $default-background;
        color: $white-plus;
        &:hover {
            color: $white-plus;
        }
        &:active {
            box-shadow: inset 8px 8px 40px $activated-background-right, inset -8px -8px 40px $activated-background-left;
        }
    }
    .theme-default{
        color: $default-background;
        &:hover {
            color: $activated-background;
        }
        &:active {
            box-shadow: $inner-shadow;
        }
    }
    
    .theme-danger{
        color: $white-plus;
        background-color: rgba($color: $danger-color, $alpha: .5);
        &:active{
            box-shadow: $inner-shadow;
        }
    }
    .icon-disable{
        cursor: not-allowed;
        color: $default-background;
        &:hover{
            color: $default-background;
        }
        &:active{
            box-shadow: none;
        }
    }
}
</style>