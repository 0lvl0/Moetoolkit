// vue.config.js
// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === 'production' ? '/production-sub-path/' : './'
// }

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === 'production' ? './' : '/'
// }

module.exports = {
  //生成环境部署路径，默认为'/'
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}