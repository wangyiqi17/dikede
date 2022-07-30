<template>
  <div class="background">
    <div class="container">
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="main">
        <el-input
          v-model="input"
          placeholder="请输入账号"
        >
          <i slot="prefix" class="el-input__icon el-icon-mobile-phone" />
        </el-input>
        <el-input v-model="input" placeholder="请输入密码" show-password>
          <i slot="prefix" class="el-input__icon el-icon-lock" />
        </el-input>
        <el-input v-model="input" placeholder="请输入验证码" show-password>
          <i slot="prefix" class="el-input__icon el-icon-circle-check" />

        </el-input>
        <div class="yzm">
          <img src="../../assets/yzm.jpg" alt="">
        </div>
        <el-button type="primary" disabled>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
.background {
  width: 100%;
  min-height: 100%;
  background-image: url('../../assets/background.png');
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
    .logo img{
      position:absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    .main {
      width: 446px;
      line-height: 70px;
      margin-top: 80px;
      .el-input {
        margin-left: 35px;
      }
      .el-button {
        width: 448px;
        height: 52px;
        margin-left: 35px;
        background-color: #536de8;
        border-radius: 10px;
      }
      .yzm img{
        height: 34px;
        width: 90px;
        position: absolute;
        top: 239px;
        left: 388px;
      }
    }
  }
}

</style>
