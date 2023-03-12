import type { ComputedRef } from "vue"

export interface SpaceCheckboxProps {
    checked?: boolean, // 是否选中
    name?: string, // 原生的name
    disabled?: boolean, // 是否禁用
    label?: string | number | boolean, // 目前没有 group中使用
    modelValue?: string |number | boolean // 绑定checkbox的值
}
export interface SpaceCheckboxGroupProvide{
    modelValue?: ComputedRef,
    changeEvent?: (val:unknown) => void,
    name?:string
}

// modelValue是computed出来的数据，同 x=ref() 一样它在使用时也需要 .value
// 在定义类型时需要：
// x :Ref<number> = ref(10)
// x: ComputedRef<number> = computed(()=> x*2)