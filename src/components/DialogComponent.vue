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
    // 你的ok逻辑 ...
    refVisible.value = true
    console.log('ok');
    
}
const f2 = () => {
    refVisible.value = true
    // 你的cancel逻辑 ...
    console.log('cancel');
    
}
const titleDemo = ref('一键打开Dialog')
const mainDemo = ref(`<h2>HELLO</h2>`)
const showf1 = () => {
    // 你的ok逻辑 ...
    console.log(1);
}
const showf2 = () => {
    // 你的cancel逻辑 ...
    console.log(2);
    
    
}
const showDialog = () => {
    openDialog({
        title: titleDemo.value,
        content: mainDemo.value,
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