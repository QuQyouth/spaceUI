<script setup lang="ts">
import { computed, inject, onMounted, ref} from 'vue'
import type { SpaceCheckboxGroupProvide } from './type';
const props = defineProps({
    name: String,
    checked: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean]
})

const emit = defineEmits(["update:modelValue", "change"])

const itemInputId = ref(props.label?.toString())

const checkboxGroup = inject<SpaceCheckboxGroupProvide>('SpaceCheckboxGroup',{})
const isGroup = checkboxGroup.name === 'SpaceCheckboxGroup'

// 如果有checkboxGroup就从那里获取modelValue否则直接从props获取
// store储存checkGroup或直接从props中获取的数据
const store = computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue)


// 设计一个可更改的属性 用来get或set store中的数据
const model = computed({
    get(){
        return isGroup ? store.value : props.modelValue
    },
    
    set(val) {
        if(isGroup){
            // 触发checkGroup的更新方法，不触发自己的更新
            return checkboxGroup.changeEvent?.(val)
        }
        emit('update:modelValue', val)
    }
    
})

const ischecked = computed(() => {
    // 如果父组件传递过来的数据是一个数组并包含有
    if (Array.isArray(model.value)) {
        return model.value.includes(props.label)
    }else{
        // 数据不是数组，则直接返回该布尔值
        model.value
    }
})

// 创造一个change事件 可以触发绑定到自己身上的change
const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        emit('change', target.checked)
}

</script>

<template> 
<!-- 如果对于checkbox而言 绑定的数据是数组，那么value在v-model中的数据中则被选中 -->
    <div class="space-checkbox">
      <div :class="disabled ? 'checkDisable' : ''">
        <div class="space-checkbox-item"> 
            <input type="checkbox" 
            :name="name"
            v-model="model"
            :value="label"
            :id="itemInputId"
            :checked="ischecked" 
            disabled: disabled
            @change="(e)=>handleChange(e)"
            class="space-checkbox-input"/>        
            <label :for="itemInputId" class="space-checkbox-label"><slot>{{ label }}</slot></label>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
.space-checkbox{
    &-item{
        .space-checkbox-input{
            opacity: 0;

            &:checked{
                &~.space-checkbox-label{
                    color: $activated-background;
                }
                &~.space-checkbox-label::before{
                    box-shadow: $inner-shadow-light;
                }
            }
        }
        .space-checkbox-label{
            cursor: pointer;
            display: inline-block;
            color: $default-background;

            &:hover{
                color: $activated-background;
            }

            &::before{
                content: "√";
                font-weight: 900;
                padding-left: 7px;
                display: inline-block;
                margin-right: 12px;
                margin-top: 8px;
                width: 24px;
                height: 24px;
                line-height: 24px;
                border-radius: 4px;
                box-shadow: $default-shadow;
                background-color: $white-plus;
            }

            
        }

    }
    .checkDisable{
        .space-checkbox-label{
            cursor: not-allowed;
            &:hover{
                color: $default-background;
            }
        }
    }
}
</style>