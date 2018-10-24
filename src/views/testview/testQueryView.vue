<!--必要的组件说明-->
<!-- -->
<!-- author:duanhaowei. date:2018/10/22 19:34-->
<template>
  <div class="testQueryView">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="级别">
        <el-input type="number" v-model="formInline.rank" max=3 min="1" placeholder="0"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      @row-click="rowclick">
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "testQueryView",
    components: {},
    data() {
      return {
        formInline: {
          user: "",
          region: ""
        },
        tableData: []
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formInline);
        for (let i = 0; i < 10; i++) {
          this.tableData.push({
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          });
        }
      },
      rowclick(e) {
        this.$alert(e.address, e.name, {
          confirmButtonText: "确定"
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

  .testQueryView {
    /*min-height: calc(100vh - 50px);*/
    width: 100%;
    /*height: 100%;*/
    /*background-color: #f0f2f5;*/
    padding: 28px;
    overflow-y: auto;
  }
</style>
