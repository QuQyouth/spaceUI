<script lang="ts">
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import { useAttrs } from 'vue'
const attrs = useAttrs()
// 可以使用 {size, ...rest} = useAttrs()将属性分开
</script>
<template>
    <div class="button">
        <button v-bind="attrs">
            <slot />
        </button>
    </div>
</template>