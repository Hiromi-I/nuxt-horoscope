<script setup lang="ts">
const { targetDate, changeDate } = useDate()
</script>

<template>
  <AppHeader @update="changeDate" />
  <main class="main-contents">
    <FortuneResult v-if="targetDate" :targetDate="targetDate" :key="targetDate" />
    <InitialGuide v-else />
  </main>
  <AppFooter />
</template>

<style scoped>
.main-contents {
  margin: 0 auto;
  width: var(--contents-width);
}
</style>