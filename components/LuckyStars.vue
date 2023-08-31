<script setup lang="ts">
defineProps<{
  score: number,
}>()
</script>

<template>
  <span>
    <span v-for="count in score" :key="`lucky-${count}`">&starf;</span>
    <span v-for="count in 5 - score" :key="`unlucky-${count}`">&star;</span>
  </span>
</template>