<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50px"
        ></el-table-column>
        <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
        <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
        <el-table-column prop="taskType.typeName" label="工单类型">
        </el-table-column>
        <el-table-column prop="gdway" label="工单方式"> </el-table-column>
        <el-table-column
          prop="taskStatusTypeEntity.statusName"
          label="工单状态"
        >
        </el-table-column>
        <el-table-column prop="userName" label="运营人员"> </el-table-column>
        <el-table-column prop="updateTime" label="创建日期"> </el-table-column>
        <el-table-column prop="operate" label="操作">
          <a href="#">查看操作</a></el-table-column
        >
      </el-table>
    </template>
    <div class="page">
      <span>共 条记录 第/页</span>
      <el-pagination background layout="prev, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getGdApi } from "@/api/user";
export default {
  data() {
    return {
      tableData: [],
    };
  },

  created() {
    this.getGd();
  },

  methods: {
    async getGd() {
      const res = await getGdApi();
      // const newdata = res.data.currentPageRecords[].updateTime;
      // const newdata2 = newdata.replace("T", " ");
      console.log(res);
      // console.log(newdata);
      // console.log(newdata2);
      this.tableData = res.data.currentPageRecords;
    },
  },
};
</script>

<style scoped>
.page {
  padding: 20px;
  background-color: #fff;
}
.el-pagination {
  padding-left: 90%;
}
</style>
