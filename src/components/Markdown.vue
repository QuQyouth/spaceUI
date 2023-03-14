<script setup lang="ts">
defineProps({
content: {
    type: String,
}
})
</script>

<template>
<component :is="content"></component>
</template>
  
