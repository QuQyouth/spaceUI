<script setup lang="ts">
import Checkbox from '@/lib/Checkbox.vue';
import CheckBoxGroup from '@/lib/CheckboxGroup.vue'
import { ref } from 'vue';
const checkOne = { label: '手机', value: 10, checked: false, isButton: false }
const checkLists = [       
    { label: '手机1', value: 0, disable: true },        
    { label: '电视', value: 1 },        
    { label: '洗衣机', value: 2, checked: true },        
    { label: '冰箱', value: 3 },        
    { label: '家用电器', value: 4, checked: true, disable: true },        
    { label: '手机2', value: 5 },        
    { label: '电视1', value: 6 },       
    { label: '洗衣机1', value: 7, checked: true },        
    { label: '冰箱1', value: 8 },        
    { label: '家用电器1', value: 9 }      
]
const checkStr = ''
const checkBoxArr = ref([])
const checkVal = ref(['上海','深圳'])
const checks = ref(['上海','北京','天津','深圳'])
const checkboxChange = (val:Event) => {
    console.log(1);
    
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
    <Checkbox label="hello" v-model:modelValue="myValue"></Checkbox>
  </template>

<!-- <template>
    /* 单独复选框使用 */
    <Checkbox  :label="checkOne.label"  :val="checkOne.value"  :checked="checkOne.checked"  v-model="checkStr" :isButton="checkOne.isButton"></Checkbox>

    /* 复选框组使用 */
    <CheckBoxGroup v-model="checkBoxArr">  
        <Checkbox v-for="item in checkLists" :label="item.label" :val="item.value" :checked="item.checked" :isDisable="item.disable" :key="item.value"></Checkbox>
    </CheckBoxGroup>
    <p>只有一项情况：{{ checkStr }}</p>
    <p>复选框群组：{{ checkBoxArr }}</p>
</template> -->

