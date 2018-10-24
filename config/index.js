'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
let {isPcModel, showConsole, devModel} = loadCliArgv();
if (devModel) {
  console.log("移动开发团队-开发模式-启动");
} else {
  console.log("移动开发团队-编译模式-启动");
}
if (isPcModel) {
  console.log("桌面端模式，开始调整配置项");
} else {
  console.log("移动端模式");
}
if (showConsole) {
  console.log("检测到显示控制台打印的配置，本次打包显示控制台");
} else {
  console.log("本次打包不显示控制台");
}

function loadCliArgv() {
  let isPcModel = false;
  let showConsole = false;
  let devModel = false;
  process.argv.forEach((val, index) => {
    // console.log(`${index}: ${val}`);
    if (val === 'pc') {
      isPcModel = true;
    }
    if (val === 'showConsole') {
      showConsole = true;
    }
    if (val === 'webpack.dev.conf') {
      devModel = true;
    }
  });
  return {
    isPcModel: isPcModel,
    showConsole: showConsole,
    devModel: devModel
  };
}

module.exports = {
  dev: {
    projectName: "'showtime'",
    showConsole: showConsole,
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    basePath: "'/'",
    proxyTable: {
      "/showtime/": {
        target: 'http://localhost/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/showtime': ''
        },
      }
    },
    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    // host: '172.16.168.25', // can be overwritten by process.env.HOST
    // host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    //vue-router config

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    // devtool: '#cheap-source-map',
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    projectName: "'showtime'",
    showConsole: showConsole,
    env: require('./prod.env'),
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'),
    // index: path.resolve(__dirname, '../WEB-INF/views/mobile/c/c.jsp'),
    index: path.resolve(__dirname, '../dist/m.html'),
    // Paths
    // assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // assetsRoot: path.resolve(__dirname, '../'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: isPcModel ? 'staticPc' : 'static',
    assetsPublicPath: '/showtime/resources/',
    /**
     * Source Maps
     */
    basePath: "'/showtime/m/mco/m'",
    // basePath: "'/showtime/resources/m.html'",
    //pc production setting
    // indexpc: path.resolve(__dirname, '../WEB-INF/views/pc/c/p.jsp'),
    indexpc: path.resolve(__dirname, '../dist/p.html'),
    basePathpc: "'/showtime/p/mco/p'",
    productTpl: 'tpl.html',
    productTplPc: 'tplpc.html',
    entryPc: {
      web: './src/pc.js'
    },
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    // devtool: '#source-map',
    devtool: '#nosources-source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // productionGzip: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],


    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // bundleAnalyzerReport: process.env.npm_config_report
    bundleAnalyzerReport: true
  }
}
