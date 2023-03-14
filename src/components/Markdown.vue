<script setup lang="ts">
defineProps({
content: {
    type: Object,
}
})
</script>

<template>
<component :is="content"></component>
</template>
  
