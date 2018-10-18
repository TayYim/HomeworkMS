import Vue from "vue";
import Vuex from "vuex";
import RBAC from "@/assets/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    RBAC: RBAC,
    user: {
      UID: "",
      name: "",
      RIDs: [],
      PIDs: [],
      roleNames: [],
      activatedRoleNo: 0
    }
  },
  mutations: {
    setUser(state, UID) {
      // 通过UID获取用户数据并设置
      state.user.UID = UID;
      // 获取用户名
      state.user.name = state.RBAC.User.filter(v => v.UID === UID).map(
        v => v.name
      )[0];
      // 获取用户对应的角色
      state.user.RIDs = state.RBAC.UA.filter(v => v.UID === UID).map(
        v => v.RID
      );
      // 获取用户对应的角色名
      state.user.roleNames = [];
      state.user.RIDs.forEach(rid => {
        state.user.roleNames.push(
          state.RBAC.Role.filter(v => v.RID === rid).map(v => v.name)[0]
        );
      });
      // 获取每一个角色被授权的的PID
      state.user.PIDs = [];
      state.user.RIDs.forEach(rid => {
        state.user.PIDs.push(
          ...state.RBAC.PA.filter(v => v.RID === rid).map(v => v.PID)
        );
      });
      // PIDs数组去重
      state.user.PIDs = state.user.PIDs.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      });
      // 默认激活第一个角色
      state.user.activatedRoleNo = 0;
    },
    setActivatedRoleNo(state, index){
      state.user.activatedRoleNo = index;
    }
  },
  actions: {}
});
