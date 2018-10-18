import Vue from "vue";
import Vuex from "vuex";
import RBAC from "@/assets/data/data_RBAC3.js";

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
    /**
     * 设置当前用户信息
     * @param {*} state
     * @param {String} UID Uesr ID
     */
    setUser(state, UID) {
      const currUser = state.user;
      // 通过UID获取用户数据并设置
      currUser.UID = UID;
      // 获取用户名
      currUser.name = state.RBAC.User.filter(v => v.UID === UID).map(
        v => v.name
      )[0];
      // 获取用户对应的角色
      currUser.RIDs = state.RBAC.UA.filter(v => v.UID === UID).map(v => v.RID);
      // 获取用户对应的角色名
      currUser.roleNames = [];
      currUser.RIDs.forEach(rid => {
        currUser.roleNames.push(
          state.RBAC.Role.filter(v => v.RID === rid).map(v => v.name)[0]
        );
      });
      // 默认激活第一个角色
      this.commit("setActivatedRoleNo", 0);
    },

    /**
     * 设置当前激活角色
     * @param {*} state
     * @param {int} index the index of the selected role
     */
    setActivatedRoleNo(state, index) {
      const currUser = state.user;
      currUser.activatedRoleNo = index;
      // 更新当前角色被授权的PID
      this.commit("setCurrentPIDs", currUser.RIDs[index]);
    },

    /**
     * 设置当前激活角色所拥有的权限
     * based on RABC3
     * @param {*} state
     * @param {String} rid Role ID
     */
    setCurrentPIDs(state, rid) {
      const currUser = state.user;
      currUser.PIDs = [];

      // 递归加入父角色的权限
      while (rid !== "null") {
        // console.log(rid); //debug
        // 加入该角色的权限
        currUser.PIDs.push(
          ...state.RBAC.PA.filter(v => v.RID === rid).map(v => v.PID)
        );
        // 返回的是数组，要取第一个
        rid = state.RBAC.Role.filter(v => v.RID === rid).map(v => v.PRID)[0];
      }
      // console.log(currUser.PIDs); //debug
    }
  },
  actions: {}
});
