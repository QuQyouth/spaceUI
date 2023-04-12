<template>
  111{{ props.dateValue }}111
<div class="calendar">
    <div class="month">
        <div class="arrow" @click="reduceYear">&lt;&lt;</div>
        <div class="arrow" @click="reduceMonth">&lt;</div>
        <div class="current-month">{{ currentDate }}</div>
        <div class="arrow" @click="addMonth">&gt;</div>
        <div class="arrow" @click="addYear">&gt;&gt;</div>
    </div>
    <div class="weekdays">
        <div class="weekday" v-for="item in weekName" :key="item">{{ item }}</div>
    </div>
    <div class="calendar-main">
        <ul
            v-for="(week, index) in weeks"
            :key="index"
            class="calendar-main-ul"
        >
            <li v-for="val in week" 
              :key="val.day" 
              class="calendar-main-ul-everyday"
              :class="[currentDate === val.date?.format('YYYY/MM/DD') ? 'active' : '']"
              
              @click="selectDay(val.date)"
            >
              {{ val.day !== 0 ? val.day : ''}}
            </li>
        </ul>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, computed, reactive, toRefs } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
type EveryDay = {
  isCurrentMonth: boolean,
  date: dayjs.Dayjs | null,
  day: number
}
const props = defineProps({
  dateValue:{
    type: String,
    default: dayjs().format('YYYY/MM/DD')
  }
})
const {dateValue} = toRefs(props)
const emit = defineEmits(['selectDay'])
const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// const currentDate = ref(dayjs(dateValue.value).format('YYYY/MM/DD'))
const currentDate = ref(dayjs().format('YYYY/MM/DD'))
// 当前月份对应天数
const numberOfDaysInMonth = computed(()=>dayjs(currentDate.value).daysInMonth())
// 当月1号对应周几 .day() 周0~6
const firstDayMonthOfWeek = computed(() => dayjs(currentDate.value).startOf('month').day())
// 初始化day
const initDay:EveryDay = reactive({
  isCurrentMonth: false,
  date: null,
  day: 0
})
const weeks = computed(()=>getWeeks(firstDayMonthOfWeek.value, numberOfDaysInMonth.value))
const getWeeks = (firstDayMonthOfWeek:number, numberOfDaysInMonth:number) => {
    const allDays = Array.from({length: firstDayMonthOfWeek},()=>initDay)
    for (let i = 0; i < numberOfDaysInMonth; i++) {
      const day = dayjs(currentDate.value).date(i+1)
      allDays.push({
        isCurrentMonth: true,
        date: day,
        day: dayjs(day).date()
      })
    }
    allDays.length = 42
    // .fill(a,b,c) a-填充值 b-从b索引开始填充 c-结束 默认到数组末
    allDays.fill(initDay, firstDayMonthOfWeek + numberOfDaysInMonth)
    let sliceAllDays:EveryDay[][] = []
    for (let k = 0; k < allDays.length; k += 7) {
      sliceAllDays.push(allDays.slice(k, k+7))
    }
    
    return sliceAllDays
}
const selectDay = (date:dayjs.Dayjs | null)=>{
  if (date) {
    currentDate.value = dayjs(date).format('YYYY/MM/DD')
    // emit('update:modelValue', dayjs(date).format('YYYY/MM/DD'))
    emit('selectDay', currentDate.value)
  }
}
const reduceYear = ()=>{
  currentDate.value = dayjs(currentDate.value).add(-1, 'year').format('YYYY/MM/DD')
  // emit('update:modelValue', dayjs(modelValue.value).add(-1, 'year').format('YYYY/MM/DD'))
}
const addYear = ()=>{
  currentDate.value = dayjs(currentDate.value).add(1, 'year').format('YYYY/MM/DD')
  // emit('update:modelValue', dayjs(modelValue.value).add(1, 'year').format('YYYY/MM/DD'))
}
const reduceMonth = ()=>{
  currentDate.value = dayjs(currentDate.value).add(-1, 'month').format('YYYY/MM/DD')
  // emit('update:modelValue', dayjs(modelValue.value).add(-1, 'month').format('YYYY/MM/DD'))
}
const addMonth = ()=>{
  currentDate.value = dayjs(currentDate.value).add(1, 'month').format('YYYY/MM/DD')
  // emit('update:modelValue', dayjs(modelValue.value).add(1, 'month').format('YYYY/MM/DD'))
}
</script>

<style lang="scss">
.calendar {
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 30px;
  margin-left: 30px;

  &-main{
    &-ul{
      display: flex;
      justify-content: space-around;
      &-everyday{
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        margin: 4px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
.active{
  background-color: $activated-background;
  color: $white-plus;
}
.month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
}

.arrow {
  cursor: pointer;
}

.weekdays {
  display: flex;
}

.weekday {
  font-weight: bold;
  flex: 1;
  text-align: center;
}
</style>