<script setup lang="ts">
import Dialog from '@/lib/Dialog.vue';
import Button from '@/lib/Button.vue';
import { ref } from 'vue';
const refVisible = ref(false)
</script>
<template>
    <div>
        <Button @click="()=>{refVisible = !refVisible}">Open Modal</Button>
        <Dialog></Dialog>
    </div>
</template>