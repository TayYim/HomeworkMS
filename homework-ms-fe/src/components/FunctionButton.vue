<template>
    <div>
        <button @click="handleClick()">{{ButtonName}}</button>
        <p v-show="isAuthorized">ok</p>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FunctionButton",
  props: ["ButtonName", "PIDRequired"],
  methods: {
    handleClick() {
      //   alert(this.ButtonName);
      console.log(this.isAuthorized);
      if (this.isAuthorized) {
        alert(this.user.name + "拥有权限，可以操作");
      } else {
        alert(this.user.name + "无权限进行此操作");
      }
    }
  },
  computed: {
    isAuthorized() {
      return this.user.PIDs.includes(this.PIDRequired);
    },
    ...mapState(["RBAC", "user"])
  }
};
</script>

<style scoped>
</style>