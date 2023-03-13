<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div class="content">
      <div class="welcome">Welcome to</div>
      <h1 class="green">{{ msg }}</h1>
      <!-- <h3>
        这是一个「灵活」且「优雅」的 UI 库 ～
      </h3> -->
      <h3>
        A Place To Study For Ui Components
      </h3>
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
  color: $default-background;

  &::before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 100%;
    background-color: $activated-background;
    vertical-align: middle;
  }
}
.greetings{
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .welcome{
      color: $default-background;
      font-weight: bolder;
      font-size: 18px;
    }
  }
}
.green{
  color: $activated-background;
  font-family: 'Architects Daughter', cursive;
  text-transform: uppercase;
  font-weight: bolder;
  margin-top: 16px;
}

</style>
