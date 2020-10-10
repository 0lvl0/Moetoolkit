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

  // 用户头像
  .User {
    position: fixed;
    top: 25px;
    left: 25px;
    height: 50px;
    width: 50px;
    background-color:#999999;
    border-radius: 50px;
  }
  .LogoRow {
    width:100%;
  }

  // 主图标
  .MoeLogo {
    display: flex;
    margin: 100px auto 31px;
    height: 180px;
    width: 180px;
  }
  .images {
    height: 100%;
    width: 100%;
  }

  // 入口按钮行
  .Entry {
    display: flex;
    // flex-flow: column;
    justify-content: space-between;
    // height: 58px;
    height: auto;
    min-width: 300px;
    max-width: 701px;
    // width: auto;
    margin: 31px auto 43px;
    // background-color: black;
  }

  // 入口按钮方框
  .EntryButton {
    display: inline-flex;
    overflow-wrap: break-word;
    width: 316px;
    height: 58px;
    justify-content: space-around;
    align-items: center;
    // background-color: aqua;
    border-style: solid;
    border-width:1px;
    border-color: #999999;
  }

  // 小图标入口行
  .icons {
    display: flex;
    justify-content: space-around;
    width: auto;
    height: 55px;
    min-width: 300px;
    max-width: 459px;
    margin: 45px auto 0px;
    // background-color: black;
  }

  // 小图标入口按钮
  .iconsButton {
    height: 45px;
    width: 45px;
    background-color: aqua;
  }

  // 底边栏行
  .BottomRow {
    position: fixed;
    bottom: 20px;
    width: 100%;
    height: 40px;
    // background-color:black;
  }

  // 底边栏信息
  .BottomMsg {
    display: inline-flex;
    height: 40px;
    // width: 464px;
    width: auto;
    justify-content: space-around;
    align-items: center;
    // background-color:aqua;
  }
</style>