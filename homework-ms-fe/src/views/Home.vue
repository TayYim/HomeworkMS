<template>
  <div class="home">
    <h1>RABC demo</h1>
    <function-button button-name="作业提交" p-i-d-required="1"></function-button>
    <function-button button-name="作业点评" p-i-d-required="2"></function-button>
    <function-button button-name="成绩统计" p-i-d-required="3"></function-button>
    <function-button button-name="系统管理" p-i-d-required="4"></function-button>
  </div>
</template>

<script>
// @ is an alias to /src
import FunctionButton from '@/components/FunctionButton.vue'

export default {
  name: 'home',
  components: {
    FunctionButton
  },
  mounted() {
    console.log('mounted');
    this.$store.commit('setUser','2001')
  },
}
</script>
