<template>
  <footer class="footer">
    <p class="footer-container">
      powerd by <a href="http://jugemkey.jp/api/waf/api_free.php" class="footerLinkText">JugemKey</a><br />
      【PR】<a href="http://www.tarim.co.jp/" class="footerLinkText">原宿占い館 塔里木</a>
    </p>
  </footer>
</template>
  
<style lang="scss" scoped>
.footer {
  background-color: var(--theme-color);
  color: white;
  width: 100%;

  @include tab {
    bottom: 0;
    position: fixed;
  }
}

.footer-container {
  line-height: 2;
  margin: 0 auto;
  padding: 15px 0;
  width: var(--contents-width);
}

.footer-container a {
  color: #337ab7;
}
</style>
  