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
    <FortuneResult v-if="targetDate" :targetDate="targetDate" :key="targetDate" />
    <InitialGuide v-else />
  </div>
</template>
