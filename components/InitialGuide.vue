<template>
  <div class="container">
    <p class="info">
      日付を選択して下さい
    </p>
    <picture>
      <source
        srcset="@/assets/images/signs-lg.png"
        media="(min-width: 1200px)"
      >
      <source
        srcset="@/assets/images/signs-md.png"
        media="(min-width: 768px)"
      >
      <img
        src="@/assets/images/signs-sm.png"
        alt="星座一覧"
        class="image"
      >
    </picture>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: white;
  border: solid 2px var(--sub-color);
  padding: 40px;
  margin: 40px 0 0;
}
.info {
  color: var(--theme-color);
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
}
.image {
  width: 100%;
  height: auto;
}
</style>
