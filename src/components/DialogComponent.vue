<script setup lang="ts">
import Button from '@/lib/Button.vue';
import Dialog from '@/lib/Dialog.vue';
import { ref } from 'vue';
import {openDialog} from '@/lib/openDialog'
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
    <div>
        <Button @click="openDialogOne">Open Modal</Button>
        <Dialog v-model:visible="refVisible" @handleOk="f1" @handleCancel="f2" title="这是标题">mainmain</Dialog>
        <br>
        <br>
        <hr>
        函数直接打开Dialog<br>
        <Button @click="showDialog">打开对话框</Button>
    </div>
</template>