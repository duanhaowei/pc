/**
 * Created by howard on 2018/10/21.
 * 有的时候我也在想，把ajax非常薄这一层抽象出来，反而增加了代码的书写繁琐程度，只是为了优雅和请求路径统一维护和抽象，是否值得？
 * 但是在写到多ajax顺序调用的时候，情况出现了转机。这样写带来的维护便利性还是可以的。
 * 而且，【还有更重要的进一步使用方式的扩展空间】
 * 还有就是注意写法,开头没有 "/"
 */
import Vue from "vue";

export function testGet(query) {
  return Vue.http.get("yearlog/1", { params: query });
  // return Vue.http.get("yearlog", { params: query });
}

export function testPost(query) {
  return Vue.http.post("yearlog", { params: query });
  // return Vue.http.get("yearlog", { params: query });
}

export function testPut(query) {
  return Vue.http.put("yearlog/1", { params: query });
  // return Vue.http.get("yearlog", { params: query });
}

export function testDelete(query) {
  return Vue.http.delete("yearlog/1", { params: query });
  // return Vue.http.get("yearlog", { params: query });
}

/*
实际开发中会遇到的多重ajax调用问题，在这里写好之后，页面部分代码非常清晰
 */
export function testMultiAjax(query) {
  return Vue.http.get("yearlog/1", { params: query }).then((res) => {
    let r1 = res.body;
    return Vue.http.get("yearlog/delay1", { params: query });
  }).then((res) => {
    let r1 = res.body;
    return Vue.http.get("yearlog/delay2", { params: query });
  }).then((res) => {
    let r1 = res.body;
    return Vue.http.get("yearlog/delay3", { params: query });
  });
}

