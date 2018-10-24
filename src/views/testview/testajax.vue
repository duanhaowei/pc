<!--必要的组件说明-->
<!-- -->
<!-- author:duanhaowei. date:2018/10/24 9:10-->
<template>
  <div class="testajax">
    <h1>AJAX测试</h1>
    <div>
      <el-button @click="testGet">ajax-get</el-button>
      <el-button type="primary" @click="testPost">ajax-post</el-button>
      <el-button type="success" @click="testPut">ajax-put</el-button>
      <el-button type="info" @click="testDelete">ajax-delete</el-button>
      <el-button type="warning" @click="testMultiAjax">测试多个ajax</el-button>
      <p>ajax返回结果为：{{ajaxRes}}</p>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { testGet, testPost,testPut,testDelete,testMultiAjax } from "@/api/test";

  export default {
    name: "testajax",
    components: {},
    data() {
      return {
        ajaxRes: ""
      };
    },
    methods: {
      testGet() {
        let param = { lcpcode: "参数testajax4get" };
        testGet(param).then((res) => {
          this.ajaxRes = res.body;
        });
      },
      testPost() {
        let param = { lcpcode: "testPost" };
        testPost(param).then((res) => {
          this.ajaxRes = res.body;
        });
      },
      testPut() {
        let param = { lcpcode: "testPut" };
        testPut(param).then((res) => {
          this.ajaxRes = res.body;
        });
      },
      testDelete() {
        let param = { lcpcode: "testDelete" };
        testDelete(param).then((res) => {
          this.ajaxRes = res.body;
        });
      },
      testMultiAjax() {
        testMultiAjax("1").then((res) => {
          this.ajaxRes = res.body;
        }).catch((e) => {
          console.error(e);
        });
      }
    },
    filters: {},
    computed: {},
    props: [],
    watch: {},
    created() {
    },
    mounted() {

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .testajax {
    height: 100%;
    width: 100%;
    padding: 20px;
  }
</style>
