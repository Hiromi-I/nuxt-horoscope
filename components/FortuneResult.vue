<script setup lang="ts">
import type { APIResponse } from '@/types/horoscope'

const props = defineProps<{
  targetDate: string,
}>()

const [year, month, day] = props.targetDate.split('-')
const url = new URL('/api/horoscope', location.href)
url.searchParams.set('year', year)
url.searchParams.set('month', month)
url.searchParams.set('day', day)

const { data, pending, error } = await useAsyncData<APIResponse>(
  url.href,
  () => $fetch<APIResponse>(url.href),
)
const results = data.value?.horoscope[`${year}/${month}/${day}`]
</script>

<template>
  <h1 class="title">
    {{ year }}年{{ month }}月{{ day }}日の占い結果
  </h1>

  <div>
    <p v-if="pending">
      Loading...
    </p>
    <p v-else-if="error">
      Error...
    </p>
    <ul v-else class="signsList">
      <SignItem
        v-for="item in results"
        :key="`${year}-${month}-${day}-${item.sign}`"
        :result="item"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: var(--theme-color);
  font-size: 36px;
  text-align: center;
  margin: 30px 0;
}
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
