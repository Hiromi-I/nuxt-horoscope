<script setup lang="ts">
import { getToday, get10DaysLater } from "@/utils/date"
const emits = defineEmits<{
  update: [event: Event]
}>()

const min = getToday()
const max = get10DaysLater()
const onChange = (event: Event) => emits('update', event)
</script>

<template>
  <header class="header">
    <div class="header-container">
      <a class="logo">
        <img
          src="@/assets/images/logo.png"
          alt="星座占い"
          width="250"
          height="60"
        />
      </a>

      <div class="date-container">
        <p class="date-description">日付を選択して下さい</p>
        <input
          type="date"
          class="date-picker"
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          :min="min"
          :max="max"
          @change="onChange"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--theme-color);
  width: 100%;

  @include tab {
    position: fixed;
    top: 0;
  };
}

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  padding: 15px 0;
  width: var(--contents-width);

  @include tab {
    flex-direction: row;
    justify-content: space-between;
  };
}

.logo {
  display: inline-block;
  height: 60px;
}

.date-container {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.date-description {
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
}

.date-picker {
  background-color: white;
  border: solid 2px var(--sub-color);
  display: inline-block;
  font-size: 16px;
  padding: 3px;
  width: 100%;
}

.date-picker::-webkit-calendar-picker-indicator {
  padding: 5px 0 0;
}
</style>
~/utils/date