<template>
  <div class="search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="工单状态">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="待办" value="db"></el-option>
          <el-option label="进行" value="jx"></el-option>
          <el-option label="取消" value="qx"></el-option>
          <el-option label="完成" value="wc"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          <i class="el-icon-search"></i>
          查询
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },

  created() {},

  methods: {
    onSubmit() {
      console.log(12345);
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  height: 64px;
  -webkit-box-align: center;
  align-items: center;
  margin: 20px 20px 0px 20px;
  padding-left: 17px;
  background-color: #fff;
  padding-top: 25px;
}
</style>
