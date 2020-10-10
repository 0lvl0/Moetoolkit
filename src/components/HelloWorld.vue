<template>
  <div class="LandingPage">
    <div class='User'>
      <div></div>
    </div>
    <div class='LogoRow'>
      <div class='MoeLogo'>
        <img class='images' alt="Moe logo" src="../assets/MoeToolkit.svg">
      </div>
    </div>
    <!-- 主页入口选择 -->
    <div class='Entry'>
      <div class='EntryButton'>这是日常使用工具</div>
      <div class='EntryButton'>这是测试中的工具</div>
    </div>
    <!-- 小图标排布 -->
    <div class='icons'>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
      <div class='iconsButton'></div>
    </div>
    <!-- 底部备案信息 -->
    <div class='BottomRow'>
      <div class='BottomMsg'>蜀ICP备2020026781号</div>
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
  .User {
    position: fixed;
    top: 25px;
    left: 25px;
    height: 60px;
    width: 60px;
    background-color:black;
    border-radius: 50px;
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
    display: inline-flex;
    width: 316px;
    height: 58px;
    justify-content: space-around;
    align-items: center;
    // background-color: aqua;
    border-style: solid;
    border-width:1px;
    border-color: #999999;
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
  .BottomRow {
    position: fixed;
    bottom: 20px;
    width: 100%;
    height: 40px;
    // background-color:black;
  }
  .BottomMsg {
    display: inline-flex;
    height: 40px;
    width: 464px;
    justify-content: space-around;
    align-items: center;
    // background-color:aqua;
  }
</style>