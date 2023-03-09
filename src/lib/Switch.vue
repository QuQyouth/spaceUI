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
    <div class="switch">
        <button 
        class="btn"
            :class="{checked}"
            @click="toggle"
        >
            <span></span>
        </button>
    </div>
</template>

<style lang="scss">
.switch{
    z-index: 1;
    display: inline-block;
    height: $button-height;
    width: $button-width;
}

.btn{
    cursor: pointer;
    height: $button-height;
    width: $button-width;
    border: none;
    box-shadow:1px 1px 4px $shadow-color;
    border-radius: 14px;
    position: relative;
    transition: all .4s ease;
    >span{
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
}
.checked{
    background-image: linear-gradient(to right, $activated-background-left,$activated-background-right);
    >span{
        transform: translateX(calc($button-width - $button-height - 2px));
        background-color: $white-plus;

    }
}
</style>