<script setup lang="ts">
const props = defineProps(['name'])
</script>
<template>
    <svg class="space-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<style lang="scss">
    .space-icon{
        width: 1em;
        height: 1em;
    }
</style>