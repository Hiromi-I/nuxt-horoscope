<script setup lang="ts">
const props = defineProps<{
  targetDate: string,
}>()

const [year, month, day] = props.targetDate.split('-')
let url = new URL('/api/horoscope', location.href)
url.searchParams.set('year', year)
url.searchParams.set('month', month)
url.searchParams.set('day', day)

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
