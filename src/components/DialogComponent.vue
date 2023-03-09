<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
const refVisible = ref(false)
const openDialog = () => {
    refVisible.value = !refVisible.value 
}
</script>
<template>
    <div>
        <Button @click="openDialog">Open Modal</Button>
        <Dialog :visible="refVisible">mainmain</Dialog>
        {{ refVisible }}
    </div>
</template>