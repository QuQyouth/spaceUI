<script setup lang="ts">

import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css'
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'html'
    }
})
const {code, type} = props

</script>

<template>
<pre>
<code  :class="'language-'+ type" v-html="Prism.highlight(code, Prism.languages[type], type)"></code>
</pre>

</template>

<style lang="scss" scoped>
</style>