<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/lib/Button.vue';

const refLoading = ref(false)

</script>
<template>
    <div>
        <Button icon="menu" :loading="refLoading" @click="refLoading = !refLoading">按钮</Button>
        <Button icon="menu" icon-position="left" :loading="true">按钮</Button>
        <Button icon="menu" icon-position="right">按钮</Button>
        <Button icon="menu" icon-position="right" :loading="true">按钮</Button>
    </div>
</template>