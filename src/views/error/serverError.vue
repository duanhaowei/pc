<template>
  <div class="serverError">
    <h1 class="errorTitle">{{ msg }}</h1>
    <h2 class="errorTitle">{{getRouter}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'serverError',
    data() {
      return {
        msg: '500 请联系管理员.',
      };
    },
    computed: {
      getRouter() {
        let base = this.$router.history.base;
        let fullpath = this.$router.history.current.fullPath;
        return "base is : "+base + "  fullpath is : " + fullpath;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .errorTitle {
    font-size: 5rem;
    padding: 2rem;
    word-wrap: break-word;
  }

  .serverError {
    height: 100%;
  }

</style>
