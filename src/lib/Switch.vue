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
    <button 
    class="btn"
        :class="{checked}"
        @click="toggle"
    >
        <span></span>
    </button>

</template>

<style lang="scss">
.btn{
    height: $button-height;
    width: $button-width;
    border: none;
    border-radius: $button-height/2;
    position: relative;
    >span{
        position: absolute;
        top: 0;
        left: 1px;
        width: $button-height;
        height: $button-height;
        background-color: #fff;
        border-radius: $button-height/2;
    }
}
.checked{
    background-color: red;
}
</style>