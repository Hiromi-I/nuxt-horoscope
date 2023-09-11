<script setup lang="ts">
const { targetDate } = useDate()
</script>

<template>
  <AppHeader />
  <main class="main-contents">
    <FortuneResult v-if="targetDate" :key="targetDate" :target-date="targetDate" />
    <InitialGuide v-else />
  </main>
  <AppFooter />
</template>

<style scoped>
.main-contents {
  margin: 0 auto 100px;
  width: var(--contents-width);
}
</style>
