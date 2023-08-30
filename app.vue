<script setup lang="ts">
const {
  year,
  month,
  day,
  min,
  max,
  targetDate,
  changeDate,
} = useDate()
</script>

<template>
  <div>
    <input type="date" :min="min" :max="max" :value="targetDate" @change="changeDate">
    <pre>
      {{ targetDate }}
      <hr />
      {{ year }}
      {{ month }}
      {{ day }}
    </pre>
    <FortuneResult v-if="targetDate" :year="year" :month="month" :day="day" :key="`${year}-${month}-${day}`" />
    <InitialGuide v-else />
  </div>
</template>
