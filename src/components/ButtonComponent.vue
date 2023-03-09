<script setup lang="ts">
import Button from '../lib/Button.vue'
const onClick = () => {
    console.log(1);
    
}
</script>
<template>
    <div>
        <Button @click="onClick">提交</Button>
    </div>
</template>