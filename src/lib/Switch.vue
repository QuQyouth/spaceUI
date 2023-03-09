<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
    required: true
  }
})
const {checked }= toRefs(props)
const emit = defineEmits(['update:checked'])

const toggle = () => {
    emit('update:checked', !checked.value)
}
</script>
<template>
    <div class="space-switch">
        <button 
        class="space-btn"
            :class="{checked}"
            @click="toggle"
        >
            <span class="space-span"></span>
        </button>
    </div>
</template>

<style lang="scss">
.space-switch{
    display: inline-block;
    height: $button-height;
    width: $button-width;
}

.space-btn{
    cursor: pointer;
    height: $button-height;
    width: $button-width;
    border: none;
    box-shadow:1px 1px 4px $default-background;
    border-radius: 14px;
    position: relative;
    transition: all .4s ease;
    >.space-span{
        cursor: pointer;
        background-color: $default-background;
        position: absolute;
        top: 4px;
        left: 4px;
        width: $cilcle-radius;
        height: $cilcle-radius;
        border-radius: 50%;
        transition: all .4s ease;
    }

    &.checked{
    background-image: linear-gradient(to right, $activated-background-left,$activated-background-right);
    >.space-span{
        transform: translateX(calc($button-width - $button-height - 2px));
        background-color: $white-plus;

    }
}
}

</style>