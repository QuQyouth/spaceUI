<script setup lang="ts">
import { computed, provide, ref } from 'vue';

const props = defineProps({
    modelValue:{
        type: Array
    }
})
const emit = defineEmits(["change", "update:modelValue"])
const modelValue = computed(()=> props.modelValue)
const changeEvent = (val: Event) => {
    emit('change',val)
    emit("update:modelValue", val)
}
provide('SpaceCheckboxGroup',{
    name: 'SpaceCheckboxGroup',
    modelValue,
    changeEvent
})
</script>
<template>
    <div class="space-checkbox-group">
        <slot></slot>
    </div>
</template>