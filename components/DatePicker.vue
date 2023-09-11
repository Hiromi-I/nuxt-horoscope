<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useDate } from '@/composables/useDate'

const { targetDate, changeDate } = useDate()
</script>

<template>
  <VueDatePicker
    :enable-time-picker="false"
    model-type="yyyy-MM-dd"
    placeholder="日付を選択して下さい"
    auto-apply
    format="yyyy-MM-dd"
    :model-value="targetDate"
    @update:model-value="changeDate"
  />
</template>
