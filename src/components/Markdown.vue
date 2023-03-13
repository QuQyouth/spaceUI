<script setup lang="ts">
const props = defineProps({
    content: {
        type: String,
    }
})
</script>

<template>
    <article class="markdown-body" v-html="props.content">
    </article>
</template>