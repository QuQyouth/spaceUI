<script setup lang="ts">
import Checkbox from '@/lib/Checkbox.vue';
import CheckBoxGroup from '@/lib/CheckboxGroup.vue'
import { ref } from 'vue';
const checkVal = ref(['上海','广州'])
const checks = ref(['上海','北京','广州','深圳'])
const checkboxChange = (val:Event) => {
    
    console.log(val);
}
const myValue = ref(false)
</script>


<template> 
    <!-- 组件内部 会去 emit('update:modelValue',[])   checkVal = []-->
    {{ checkVal }}
    <CheckBoxGroup @change="checkboxChange" v-model:modelValue="checkVal">
        <Checkbox v-for="c in checks" :key="c" :label="c"></Checkbox>
    </CheckBoxGroup>

    <hr>
    {{ myValue }}
    <Checkbox label="hello" v-model:modelValue="myValue" disabled></Checkbox>
  </template>


