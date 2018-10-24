/**
 * Created by howard on 2018/10/21.
 * 这里是设置ajax链接的一些配置，重点的配置在于配置微服务的授权token设定
 */
import VueResource from "vue-resource";
import Vue from "vue";

Vue.use(VueResource);

function getUserInfo() {
  let name = "McloudOAuth";
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  let res = unescape(arr[2]);
  res = decodeURI(res);
  return unescape(res);
}

//set project root url
let projectRoot = process.env.projectName;
console.log("取得配置中项目名称为" + projectRoot);
Vue.http.options.root = "/" + projectRoot;
Vue.http.options.emulateJSON = true;

try {
  let userinfo = getUserInfo();
  if (userinfo) {
    let u = JSON.parse(userinfo);
    Vue.http.headers.common["Authorization"] = "Bearer " + u.auth;
  }
} catch (e) {
  console.warn("载入用户信息时候发生问题，无法创建授权连接");
  console.warn(e);
}
console.log("ajax配置完成");
