<template>
  <div>
    <div>test</div>
    <div>
      <div>
        <label for="name">用户名</label>
        <input type="text" name="name" v-model="user.name">
      </div>
      <div>
        <label for="password">密码</label>
        <input type="password" name="password" v-model="user.password">
      </div>
      <button @click="userLogin">登录</button>
      <div>{{token}}</div>
    </div>
  </div>
</template>

<script>
import userApi from "@/api/userApi";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: {
    async userLogin() {
      let res = await userApi.login(this.user);
      if (res) {
        this.$store.dispatch("setToken", res.result.token);
        this.$router.push({ path: this.redirect || "/" });
      }
    }
  }
};
</script>