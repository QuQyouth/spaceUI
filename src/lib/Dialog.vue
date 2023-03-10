<script setup lang="ts">
import { nextTick, toRefs } from 'vue';
import Button from './Button.vue';
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        dafault: 'title'
    },
    
})
const {visible, title} = toRefs(props)
const emit = defineEmits(['update:visible', 'handleOk', 'handleCancel'])

const close = () => {
    emit('update:visible', false)
}
</script>
<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="space-dialog-overlay" @click="close" >
                <div class="space-dialog-wrapper">
                    <div class="space-dialog">
                        <header>
                            <div class="space-dialog-header-content">{{ title }}</div>
                            <span class="space-dialog-close" @click="() => close"></span>
                        </header>
                        <main>
                            <slot />
                        </main>
                        <footer>
                            <Button theme="primary" @click="()=>emit('handleOk')" >OK</Button>
                            <Button theme="danger" @click="()=>emit('handleCancel')" >Cancel</Button>
                        </footer>
                    </div>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<style lang="scss">
.space-dialog{
    background-color: $white-plus;
    border-radius: 4px;
    box-shadow: $inner-shadow;
    min-width: 15em;
    max-width: 90%;

    &-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: calc($z-index-overlay + 1);

    }
    &-wrapper{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: $z-index-overlay;
    }
    >header{
        padding: 12px 16px;
        border-bottom: 1px solid $default-border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        color: $activated-background;
    }
    >main{
        padding: 12px 16px;
        min-height: 120px;
    }
    >footer{
        border-top: 1px solid $default-border-color;
        padding: 12px 16px;
        text-align: right;
        
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
        }

        &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
        transform: translate(-50%, -50%) rotate(45deg);
        }

    }
}
</style>