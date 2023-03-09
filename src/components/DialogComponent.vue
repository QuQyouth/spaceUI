<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
const refVisible = ref(false)
const openDialog = () => {
    refVisible.value = !refVisible.value 
}
const f1 = () => {
    refVisible.value = true
}
const f2 = () => {
    refVisible.value = false
}
</script>
<template>
    <div>
        <Button @click="openDialog">Open Modal</Button>
        <Dialog v-model:visible="refVisible" @handleOk="f1" @handleCancel="f2" title="这是标题">mainmain</Dialog>
        {{ refVisible }}
    </div>
</template>