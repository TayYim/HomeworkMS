<template>
  <div class="home">
    <h1>RABC0 demo</h1>
    <div>
      选择用户:
      <select @change="onUserChange" v-model="selectedUsername" id="username">
      <option v-for="user in RBAC.User" :key="user.UID" :value="user.UID">
        {{user.name}}
      </option>
    </select>
    </div>
    <h2>我是{{user.name}}，角色为{{user.roleNames}}</h2>
    <div class="button-field">
      <function-button button-name="作业提交" p-i-d-required="1"></function-button>
    <function-button button-name="作业点评" p-i-d-required="2"></function-button>
    <function-button button-name="成绩统计" p-i-d-required="3"></function-button>
    <function-button button-name="系统管理" p-i-d-required="4"></function-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FunctionButton from "@/components/FunctionButton.vue";

export default {
  name: "home",
  components: {
    FunctionButton
  },
  mounted() {
    console.log("mounted");
    this.$store.commit("setUser", "1001");
  },
  computed: {
    ...mapState(["user", "RBAC"])
  },
  data() {
    return {
      selectedUsername: "二狗子"
    };
  },
  methods: {
    onUserChange(event) {
      this.$store.commit("setUser", event.target.value);
    }
  }
};
</script>
