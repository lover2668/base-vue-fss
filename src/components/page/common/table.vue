<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>数据表格</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
                <!-- ***************************简单数据表格************************** -->
                <el-tab-pane label="简单数据表格" name="first-ele">
                    <table1></table1>
                </el-tab-pane>
                <!-- **********************带操作按钮的表格*************************** -->
                <el-tab-pane label="带操作按钮的表格" name="second-code">
                    <table2></table2>
                </el-tab-pane>
                <!-- *************************展开行的表格*************************** -->
                <el-tab-pane label="展开行表格" name="thread-code">
                    <table3></table3>
                </el-tab-pane>
                <!-- ***********************表格参数属性描述************************* -->
                <el-tab-pane label="自定义表格参数说明" name="four-code">
                    <table4></table4>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>
</template>

<script>
//基础表格
import table1 from './table/table_01'
//带操作按钮的表格
import table2 from './table/table_02'
//带展开行表格
import table3 from './table/table_03'
//自定义表格参数说明
import table4 from './table/table_proto'
export default{
    name: 'customTable',
    components: {table1,table2,table3,table4},
    data(){
        return {
            title: "自定义数据表格",
            activeName: 'first-ele',
            showPagination: true,   //分页显示与否默认显示
        }
    },
}
</script>

<style scoped>
.text {font-size: 14px;}
.item {margin-bottom: 18px; }
.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
.box-card { width: 100%; }
.demoModel{width: 98%;margin: 0 auto;}
.title{padding-left: 10px;background: #efefef;color: #666;margin-bottom: 10px;padding: 10px;border-radius: 5px;box-shadow: 5px 5px 5px #eee;}
.head-title{font-size: 14px;font-weight: bold;color: #555;display: block;margin-top: 10px;margin-bottom: 10px;}
.code{padding: 10px; }
.code-msg{float: right;margin-right: 10px;margin-top: 10px;color: #333;}
.code-main{width: 98%;background: #f8f8f8;margin-bottom: 20px;border-raidus: 5px;box-shadow: 0 0 5px #eee;padding: 20px;padding-top: 30px;}
</style>