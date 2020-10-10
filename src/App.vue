<template>
  <div id="app">
    <router-view class=''/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background:url("https://qvq-1255614900.file.myqcloud.com/moetoolkit/banner.jpg");
  width:100%;			//大小设置为100%
  height:100%;			//大小设置为100%
  position:fixed;
  background-size:100% 100%;
}

a {
  text-decoration: none;
}
// #LeftSideBar {
//   position: fixed;
//   padding: 0px;
//   left: 0px;
//   width: 80px;

//   .side-bar {
//     font-weight: bold;
//     color: #2c3e50;
//     display: block;
//     padding: 40px 20px;
//     // height: 50px;
//     width: 50px;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
