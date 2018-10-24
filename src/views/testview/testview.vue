<!--必要的组件说明-->
<!-- -->
<!-- author:duanhaowei. date:2018/10/19 11:44-->
<template>
  <div class="testview">
    <el-tag>你每天认真工作的时间?</el-tag>
    <el-row :gutter="20">
      <el-col :lg="4" :md="8" :sm="12" v-for="e in dataArray" :key="e.num">
        <div class="grid-content" @click="changeSlider(e)">{{e.num}}</div>
      </el-col>
    </el-row>
    <el-slider v-model="nowWordTimeNum" show-input :max="12" :min="1" disabled>
    </el-slider>
    <h1>{{nowVaule.text}}</h1>
    <p>{{nowVaule.detail}}</p>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "testview",
    components: {},
    data() {
      return {
        dataArray: [],
        nowVaule: {}
      };
    },
    methods: {
      changeSlider(e) {
        this.nowVaule = e;
      }
    },
    filters: {},
    computed: {
      nowWordTimeNum: {
        get: function() {
          return parseInt(this.nowVaule.num);
        },
        set: function(newValue) {
          this.nowVaule.num = newValue;
        }
      }
    },
    props: [],
    watch: {},
    created() {
    },
    mounted() {
      this.dataArray.push({ text: "摸鱼王子", num: "1", detail: "你具备独特的技能，比如盯着屏幕一整天但是什么事都没干。" });
      this.dataArray.push({ text: "尚需努力", num: "4", detail: "我一个月给你大几千块钱，是雇你放羊的？？——愤怒的陶总" });
      this.dataArray.push({ text: "中规中矩", num: "6", detail: "我觉得， 排除掉聊微信，刷手机，上厕所，看段子的时间，每天能干满6小时也对得起老板了。" });
      this.dataArray.push({ text: "工作狂人", num: "8", detail: "我爱公司！公司万岁！！什么？大清亡了？？" });
      this.dataArray.push({ text: "公司之星", num: "10", detail: "一个合格的公司员工，总能在每天8小时工作制下干出10小时的工作成绩。" });
      /*
      我在以前的时候经常凌晨4点写完代码，qq群里无聊吼一声，总能碰到也没睡的涂总。。。。。。
       */
      this.dataArray.push({ text: "捞逼一摊", num: "12", detail: "科比：你见过洛杉矶凌晨4点的太阳吗？ 我：没，那个时候我还在写代码，怎么了？ 科比：没，没什么。" });
    }
  };
</script>

<style scoped lang="scss">

  .testview {
    /*position: absolute;*/
    /*min-height: 100%;*/
    min-height: calc(100vh - 50px);
    width: 100%;
    background-color: #f0f2f5;
    padding: 28px;
    overflow-y: auto;

    .el-tag {
      font-size: 25px;
      height: 35px;
      line-height: 35px;
      margin-bottom: 16px;
    }

    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .el-col {
      border-radius: 4px;
      margin-bottom: 28px;
    }

    .grid-content {
      border-radius: 4px;
      min-height: 72px;
      line-height: 72px;
      text-align: center;
      background-color: white;
    }

    & > h1 {
      color: red;
      font-size: 35px;
    }
    & > p {
      color: #4AB7BD;
      font-size: 24px;
    }

  }
</style>
