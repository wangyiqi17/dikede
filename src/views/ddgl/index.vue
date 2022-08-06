<template>
  <div class="app">
    <el-form class="bigge">
      <el-form-item>
        <span>订单编号：</span
        ><el-input
          v-model="input"
          class="inputss"
          placeholder="请输入订单编号"
        />
      </el-form-item>
      <el-form-item class="test">
        <span>选择日期：</span
        ><el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-button icon="el-icon-search" class="btn">查询</el-button>
    </el-form>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="序号" />
      <el-table-column prop="orderNo" label="订单编号" />
      <el-table-column prop="skuName" label="商品名称" />
      <el-table-column prop="price" label="订单金额(元)" />
      <el-table-column prop="innerCode" label="设备编号" />
      <el-table-column prop="status" label="订单状态" :formatter="tacked">
      </el-table-column>
      <el-table-column prop="createTime" label="订单日期">
        <template v-slot="{ row }">
          {{ row.createTime | formatDate }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-button type="text" size="small" @click="clickFn(row)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 放置分页组件 -->
    <!-- 放置分页组件 -->
    <el-row type="flex" justify="center" align="middle" style="heigth: 60px">
      <el-pagination
        :current-page="page.pageIndex"
        :page-size="page.pageSize"
        :total="page.totalPage"
        layout="prev,pager,next"
        @current-change="changePage"
      />
    </el-row>
    <!-- 弹层 -->
    <descar :isShow.sync="isShow" :list="fand" />
  </div>
</template>

<script>
import descar from '@/components/Descar'
import { getDD } from '@/api/table'
export default {
  data() {
    return {
      list: [],
      input: '',
      value1: '',
      page: {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 0,
        orderNo: '',
      },
      isShow: false,
      fand: {}, //获取点击对象
    }
  },

  created() {
    this.getDD()
  },

  methods: {
    //获取数据
    async getDD() {
      const { data } = await getDD(this.page)
      // console.log(data)
      // console.log(row)
      this.list = data.currentPageRecords
      this.page.totalCount = data.totalCount
      this.page.orderNo = data.currentPageRecords.orderNo
      // console.log(this.page.totalCount)
      // this.test = this.list.map(item => item.status)
      // console.log(this.test)
    },
    //过滤数据
    tacked(row, column, cellValue) {
      if (cellValue === 0) {
        return '创建'
      } else if (cellValue === 1) {
        return '支付完成'
      } else if (cellValue === 2) {
        return '出货成功'
      } else if (cellValue === 3) {
        return '出货失败'
      }
    },
    // 获取页码
    changePage(newPage) {
      this.page.pageIndex = newPage
      this.getDD()
    },
    clickFn(id) {
      this.fand = id
      this.isShow=true
      console.log(id)
    },
  },
  components: {
    descar,
  },
}
</script>

<style scoped lang="less">
.app {
  margin-top: 25px;
  margin-left: 15px;
  .bigge {
    display: flex;
    border-top: 50px;
    .inputss {
      width: 200px;
    }
    .test {
      margin-left: 25px;
    }
    .btn {
      background-color: #5f84ff;
      color: #fff;
      height: 40px;
      margin-left: 15px;
    }
  }
}
</style>
