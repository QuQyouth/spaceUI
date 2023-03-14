<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/lib/Button.vue';

const refTheme = ref('primary')
const onClick = () => {
    console.log('click');
    
}
</script>
<template>
    <Button 
        :theme="refTheme"
        @click="onClick"
    >
        Primary
    </Button>
    <Button>
        default
    </Button>
    <Button theme="danger">
        danger
    </Button>
</template>