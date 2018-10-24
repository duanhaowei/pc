<!--必要的组件说明-->
<!-- -->
<!-- author:duanhaowei. date:2018/10/24 16:14-->
<template>
    <div class="testview4">
      testview4

      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      <h1>

        嘤嘤天下第一美腻
      </h1>
    </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "testview4",
    components: {},
    data() {
      return {};
    },
    methods: {},
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

    .testview4 {
        height: 100%;
        width: 100%;
    }
</style>
