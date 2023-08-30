<script setup lang="ts">
const props = defineProps<{
  year: string,
  month: string,
  day: string,
}>()

let url = new URL('/api/horoscope', location.href)
url.searchParams.set('year', props.year)
url.searchParams.set('month', props.month)
url.searchParams.set('day', props.day)


const { data, pending, error } = await useAsyncData(
  url.href,
  () => $fetch(url.href)
)
</script>

<template>
  <div>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error...</p>
    <pre v-else>
      {{ data }}
    </pre>
  </div>
</template>
