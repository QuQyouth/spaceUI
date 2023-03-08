<template>
  <div class="doc">
    <header>
      <div class="logo"></div>
      <div class="menu"></div>
    </header>
    <main>
      <aside></aside>
      <div class="content"></div>
    </main>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .doc {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
