<script setup lang="ts">
import type { SignResult } from "@/types/horoscope"
import { getImagePath } from "@/utils/sign"

const props = defineProps<{ result: SignResult }>()
const { sign, content, item, color, total, job, money, love} = props.result
const imagePath = getImagePath(sign)
</script>

<template>
  <li class="container">
    <img class="image" :src="imagePath" :alt="sign" />
    <h2 class="name">{{ sign }}</h2>
    <p class="content">{{ content }}</p>

    <dl class="topics">
      <dt class="topic-title">ラッキーアイテム</dt>
      <dd class="topic-body">{{ item }}</dd>
      <dt class="topic-title">ラッキーカラー</dt>
      <dd class="topic-body">{{ color }}</dd>
      <dt class="topic-title">総合運</dt>
      <dd class="topic-body stars"><LuckyStars :score="total" /></dd>
      <dt class="topic-title">金運</dt>
      <dd class="topic-body stars"><LuckyStars :score="money" /></dd>
      <dt class="topic-title">仕事運</dt>
      <dd class="topic-body stars"><LuckyStars :score="job" /></dd>
      <dt class="topic-title">恋愛運</dt>
      <dd class="topic-body stars"><LuckyStars :score="love" /></dd>
    </dl>
  </li>
</template>
  
<style lang="scss" scoped>
.container {
  background-color: white;
  border: solid 1px var(--theme-color);
  border-radius: 5px;
}

.image {
  display: block;
  width: 95%;
  height: auto;
  margin: 5px auto 0;
}
.name {
  color: white;
  background-color: var(--theme-color);
  font-size: 18px;
  line-height: 36px;
  letter-spacing: 0.3em;
  text-align: center;
  margin-bottom: 15px;
}
.content {
  height: 6em;
  margin: 10px;
}

.topics {
  margin: 10px;
}
.topic-title {
  color: var(--theme-color);
  font-weight: bold;
}
.topic-body {
  color: var(--theme-color);
  margin-bottom: 10px;
}
.stars {
  font-size: 18px;
  letter-spacing: 0.2em;
}
</style>
