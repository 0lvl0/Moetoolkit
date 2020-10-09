<template>
  <div class="LandingPage">
    <div class='LogoRow'>
      <div class='MoeLogo'>
        <img class='images' alt="Moe logo" src="../assets/MoeLogo.png">
      </div>
    </div>
    <div class='Entry'>
      <div class='EntryButton'></div>
      <div class='EntryButton'></div>
    </div>
    <div class='icons'>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .LandingPage {
    height: 100%;
    width: 100%;
  }
  .LogoRow {
    width:100%;
  }
  .MoeLogo {
    display: flex;
    margin: 250px auto 31px;
    height: 180px;
    width: 180px;
  }
  .images {
    height: 100%;
    width: 100%;
  }
  .Entry {
    display: flex;
    justify-content: space-between;
    height: 58px;
    width: 701px;
    margin: 31px auto 45px;
    // background-color: black;
  }
  .EntryButton {
    display: inline-flexbox;
    width: 316px;
    height: 58px;
    background-color: aqua;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    height: 55px;
    width: 459px;
    margin: 45px auto 0px;
    // background-color: black;
  }
  .iconsButton {
    height: 55px;
    width: 55px;
    background-color: aqua;
  }
</style>