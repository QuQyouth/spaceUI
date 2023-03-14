<script setup lang="ts">
import Checkbox from '@/lib/Checkbox.vue';
import CheckboxGroup from '@/lib/CheckboxGroup.vue'
import { ref } from 'vue';
const checkVal = ref(['上海','广州'])
const checks = ref(['上海','北京','广州','深圳'])
const checkboxChange = (val:Event) => {
    console.log(val);
}
</script>


<template> 
    <CheckboxGroup @change="checkboxChange" v-model:modelValue="checkVal">
        <Checkbox v-for="c in checks" :key="c" :label="c"></Checkbox>
    </CheckboxGroup>
</template>