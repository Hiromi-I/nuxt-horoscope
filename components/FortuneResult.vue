<script setup lang="ts">
import type { API_Response } from "@/types/horoscope";

const props = defineProps<{
  targetDate: string,
}>()

const [year, month, day] = props.targetDate.split('-')
let url = new URL('/api/horoscope', location.href)
url.searchParams.set('year', year)
url.searchParams.set('month', month)
url.searchParams.set('day', day)

const { data, pending, error } = await useAsyncData<API_Response>(
  url.href,
  () => $fetch<API_Response>(url.href)
)
const results = data.value?.horoscope[`${year}/${month}/${day}`]
</script>

<template>
  <div>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error...</p>
    <ul v-else class="signsList">
      <SignItem
        v-for="item in results"
        :key="`${year}-${month}-${day}-item.sign`"
        :result="item"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.signsList {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);

  @include tab {
    grid-template-columns: repeat(2, 1fr);
  }

  @include pc {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>