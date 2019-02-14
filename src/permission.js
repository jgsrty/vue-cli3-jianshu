import router from "./router";
import store from "./store";
import Storage from "@/utils/storage"; // 验权

const whiteList = ["/login"]; // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (Storage.get("token")) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (!store.getters.userInfo) {
        store.dispatch("getUserInfo");
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
    }
  }
});
router.afterEach(() => {
  // 结束
});
