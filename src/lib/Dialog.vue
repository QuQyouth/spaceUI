<script setup lang="ts">
import Button from './Button.vue';
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        dafault: 'title'
    }
})
</script>
<template>
    <template v-if="visible">
        <div class="space-dialog-overlay" >
            <div class="space-dialog-wrapper">
                <div class="space-dialog">
                    <header>
                        <div class="space-dialog-header-content">{{ title }}</div>
                        <span>X</span>
                    </header>
                    <main>
                        <slot />
                    </main>
                    <footer>
                        <Button theme="primary" >OK</Button>
                        <Button theme="danger">Cancel</Button>
                    </footer>
                </div>
            </div>
        </div>
    </template>
</template>

<style lang="scss">
.space-dialog{
    background-color: $white-plus;
    border-radius: 4px;
    box-shadow: $default-shadow;
    min-width: 15em;
    max-width: 90%;

    &-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $default-background;
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
    }
    >main{
        padding: 12px 16px;
    }
    >footer{
        border-top: 1px solid $default-border-color;
        padding: 12px 16px;
        text-align: right;
    }
}
</style>