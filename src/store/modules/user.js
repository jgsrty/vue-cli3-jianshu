import Storage from "@/utils/storage";
import userApi from "@/api/userApi";
const user = {
  state: {
    token: Storage.get("token") || null,
    userInfo: ""
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      Storage.set("token", token);
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    //用户信息
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        userApi
          .getInfo({ token: state.token })
          .then(res => {
            if (res.result) {
              commit("SET_USER_INFO", res.result.userInfo);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    //登出
    logOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        userApi
          .logOut({ token: state.token })
          .then(() => {
            commit("SET_TOKEN", "");
            Storage.cle();
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
export default user;