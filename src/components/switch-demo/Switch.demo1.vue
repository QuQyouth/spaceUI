<script setup lang="ts">
import Switch from '@/lib/Switch.vue';
import { ref } from 'vue';
const refChecked = ref(false)
</script>
<template>
    <Switch 
        v-model:checked = refChecked
    >
    </Switch>
</template>