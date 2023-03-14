<script setup lang="ts">
import Button from '@/lib/Button.vue';
import {openDialog} from '@/lib/openDialog'
const showf1 = () => {
    console.log('ok2');
}
const showf2 = () => {
    console.log('cancel2');
}
const showDialog = () => {
    openDialog({
        title: '一键打开Dialog',
        content: `<h2>HELLO</h2>`,
        onHandleOk: showf1,
        onHandleCancel: showf2
    })
}
</script>
<template>
    <Button @click="showDialog">打开对话框</Button>
</template>