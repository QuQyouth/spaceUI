<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      这是一个「灵活」且「优雅」的 UI 库 ～
    </h3>
    <div class="links">
      <a href="http://" class="link">GitHub</a>
      <RouterLink to="/doc" class="link" >开始</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.links{
  display: flex;
  justify-content: center;

  .link{
    background-color: red;
    padding: 4px 16px;
    border-radius: 16px;
    margin-left: 4px;
    margin-right: 4px;
  }
}


.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
