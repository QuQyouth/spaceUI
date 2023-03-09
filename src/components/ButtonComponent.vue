<script setup lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue'

const refTheme = ref('primary')
const onClick = () => {
    console.log(1);
    
}
const refLoading = ref(false)
</script>
<template>
    <div>
        <Button 
            :theme="refTheme"
            @click="onClick"
        >
            Primary
        </Button>
        <br><br>
        <Button>
            default
        </Button>
        <br><br>
        <Button theme="danger">
            danger
        </Button>
        <br><br>
        <Button icon="menu" :loading="refLoading" @click="refLoading = !refLoading">按钮</Button>
        <Button icon="menu" icon-position="left" :loading="true">按钮</Button>
        <Button icon="menu" icon-position="right">按钮</Button>
        <Button icon="menu" icon-position="right" :loading="true">按钮</Button>
    </div>
</template>