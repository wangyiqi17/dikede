<template>
  <div class="button">
    <el-button class="neworder">
      <i class="el-icon-circle-plus-outline"></i>
      新建
    </el-button>
    <el-button class="build">工单配置</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.button {
  background-color: #fff;
  padding: 20px;
}
.neworder {
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 80px !important;
  height: 36px;
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
  border: none;
  color: #fff !important;
}
.build {
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 80px !important;
  height: 36px;
  padding: 0;
  background-color: #fbf4f0 !important;
  border: none;
  color: #655b56 !important;
}
</style>
