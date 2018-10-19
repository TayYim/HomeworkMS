<template>
    <div>
        <span v-show="isAuthorized">Y </span>
        <span v-show="!isAuthorized">N </span>
        <button @click="onClickListener()">{{ButtonName}}</button>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FunctionButton",
  props: ["ButtonName", "PIDRequired"],
  methods: {
    /**
     * onClickListener()
     * 本按钮组件的点击事件的事件监听器
     */
    onClickListener() {
      if (this.isAuthorized) {
        // 有权限，通过
        alert(this.user.name + "拥有权限，可以操作");
        this.generateLog(true);
      } else {
        // 无权限，拒绝
        alert(this.user.name + "无权限进行此操作");
        this.generateLog(false);
      }
    },
    /**
     * generateLog(isAuthorized)
     * 生成日志条目并提交
     */
    generateLog(isAuthorized) {
      let currTime = new Date().toLocaleString();
      let log =
        this.user.name +
        " 作为 " +
        this.user.roleNames[this.user.activatedRoleNo] +
        " 使用权限 " +
        this.PIDRequired +
        " 进行 " +
        this.ButtonName +
        " 操作";

      if (isAuthorized) {
        log = "[" + currTime + "]允许了 " + log;
      } else {
        log = "[" + currTime + "]拒绝了 " + log;
      }

      this.$store.commit("addLog", log);
    }
  },
  computed: {
    /**
     * 判断当前用户权限集合是否包含本按钮要求的权限
     */
    isAuthorized() {
      return this.user.PIDs.includes(this.PIDRequired);
    },
    ...mapState(["RBAC", "user"])
  }
};
</script>