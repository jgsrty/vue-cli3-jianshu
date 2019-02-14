<template>
  <div>
    <div>Home</div>
    <div>
      <div>
        <span>用户名：</span>
        {{userInfo.name}}
      </div>
      <div>
        <span>权限：</span>
        {{userInfo.auth}}
      </div>
      <div>
        <span>账户创建时间：</span>
        {{userInfo.time}}
      </div>
    </div>
    <button @click="userLogout">退出登陆</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    userLogout() {
      this.$store.dispatch("logOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    }
  }
};
</script>