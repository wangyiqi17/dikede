<template>
  <div class="background">
    <div class="container">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="main">
        <el-form :model="user" :rules="rules" ref="user">
          <el-form-item prop="loginName">
            <el-input v-model="user.loginName" placeholder="请输入用户名">
              <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="user.password"
              placeholder="请输入密码"
              type="password"
              show-password
            >
              <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="user.code" placeholder="请输入验证码">
              <i slot="prefix" class="el-input__icon el-icon-circle-check"></i>
            </el-input>
          </el-form-item>
          <div class="yzm" @click="getCode">
            <img
              :src="`https://likede2-java.itheima.net/api/user-service/user/imageCode/${user.clientToken}`"
              alt=""
            />
          </div>
        </el-form>
        <el-button type="primary" @click="btnOk" class="btn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login, yanzm } from "@/api/user";
export default {
  name: "Login",
  data() {
    return {
      user: {
        loginName: "admin",
        password: "admin",
        code: "",
        clientToken: "",
        loginType: 0,
      },
      token: localStorage.getItem("DILIKE"),
      rules: {
        loginName: [
          {
            required: true,
            message: "请输入用户名，由4-10位字母，数字，_,-组成",
            targger: "blur",
          },
          { pattern: /^[a-zA-Z0-9_-]{4,10}$/, message: "用户名格式错误" },
        ],
        password: [
          {
            required: true,
            message: "请输入密码，由4-10位字母，数字组成",
            targger: "blur",
          },
          { pattern: /^[a-zA-Z0-9]{4,10}$/, message: "密码格式错误" },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            targger: "blur",
          },
          { pattern: /^[0-9A-Za-z]{4}$/, message: "验证码格式错误" },
        ],
      },
      userInfo: {},
    };
  },

  created() {
    this.getNum();
  },

  methods: {
    getNum() {
      var chars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      var nums = "";
      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61);
        nums += chars[id];
      }
      this.user.clientToken = nums;
    },

    async getCode() {
      await yanzm(this.user.clientToken);
      // console.log(res)
      this.getNum();
    },
    async btnOk() {
      // console.log(123);
      await this.$refs.user.validate();
      // console.log("校验通过");
      await this.$store.dispatch("user/getToken", this.user);
      const { data } = await login(this.user);
      console.log(data);
      // this.userInfo = data;
      this.token = data.token;
      console.log(this.token);
      // this.$store.commit("user/getUserInfo", this.userInfo);
      // this.$store.commit("user/getCode", this.token);
      // window.localStorage.setItem("DILIKE", this.token);
      if (this.token) {
        return this.$router.push("/");
      } else {
        return this.$message({
          type: "error",
          message: `登陆失败`,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.background {
  width: 100%;
  min-height: 100%;
  background-image: url("../../assets/background.png");
  background-size: cover;
  overflow: hidden;
  position: relative;
  .container {
    width: 518px;
    height: 388px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    position: absolute;
    .logo img {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    .main {
      width: 450px;
      margin-top: 100px;
      margin-left: 35px;
      .btn {
        width: 450px;
        height: 50px;
      }
      .yzm img {
        width: 70px;
        height: 38px;
        position: absolute;
        top: 227px;
        left: 415px;
        border-radius: 5px;
      }
    }
  }
}
</style>
