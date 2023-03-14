<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
const refVisible = ref(false)
const openDialogOne = () => {
    refVisible.value = !refVisible.value 
}
const f1 = () => {
    console.log('ok1');
    
}
const f2 = () => {
    console.log('cancel1');
}
</script>
<template>
    <div>
        <Button @click="openDialogOne">Open Modal</Button>
        <Dialog v-model:visible="refVisible" @handleOk="f1" @handleCancel="f2" title="这是标题">your content</Dialog>
    </div>
</template>