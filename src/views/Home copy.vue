<template>
  <div class="home">
    <div>
      <img class='MoeLogo' alt="Vue logo" src="../assets/MoeLogo.png">
      <HelloWorld/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  .MoeLogo {
    display: block;
    height: 180px;
    width: 180px;
  }
</style>