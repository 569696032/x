<template>
    <div>
        <template>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="date"
              label="用户名"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="学历"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="入职时间"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="职位"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="住址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="工作经历"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="项目实际开发"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
</template>
      
    </div>
</template>
<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '王小虎',
          name: '大专',
          province: '2011-3',
          city: 'web前端',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '李宇',
          name: '本科',
          province: '2013-6',
          city: 'web前端',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '郝阳',
          name: '本科',
          province: '2014-10',
          city: 'UI设计',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '季易',
          name: '中专',
          province: '2017-9',
          city: '后台人员',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>