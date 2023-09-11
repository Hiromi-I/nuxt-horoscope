<template>
  <header class="header">
    <div class="header-container">
      <a class="logo">
        <img
          src="@/assets/images/logo.png"
          alt="星座占い"
          width="250"
          height="60"
        >
      </a>

      <div class="date-container">
        <DatePicker />
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
  width: 100%;

  @include tab {
    width: 240px;
  };
}
</style>
