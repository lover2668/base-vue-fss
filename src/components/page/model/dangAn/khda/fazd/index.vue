<template>
    <div style="height: 100%;">
        <!-- 跳转地址定义
        <el-breadcrumb separator="/" style="height: 25px; line-height: 25px">
            <el-breadcrumb-item :to="{ path: '/' }">档案管理</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">客户档案管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>方案制定</el-breadcrumb-item>
        </el-breadcrumb> -->     
        <!-- 内容区域定义 -->        
        <el-tabs :tab-position="tabPosition" type="border-card" style="height: 98%; overflow-y: scroll;"> <!-- style="height: calc(100% - 25px);" -->
            <el-tab-pane label="方案制定首页">方案制定首页</el-tab-pane>
            <el-tab-pane label="客户基本信息">客户基本信息</el-tab-pane>
            <el-tab-pane label="勘察方案">勘察方案</el-tab-pane>
            <el-tab-pane label="电源方案">电源方案</el-tab-pane>
            <el-tab-pane label="电价方案">电价方案</el-tab-pane>
            <el-tab-pane label="计量方案">
                <jl-model></jl-model>
            </el-tab-pane>
            <el-tab-pane label="售电设备方案">售电设备方案</el-tab-pane>
            <el-tab-pane label="供电方案预览">供电方案预览</el-tab-pane>
            <el-tab-pane label="批量新装方案">批量新装方案</el-tab-pane>
            <el-tab-pane label="批量销户方案">批量销户方案</el-tab-pane>
            <el-tab-pane label="批量更改线路台区方案">批量更改线路台区方案</el-tab-pane>
            <el-tab-pane label="批量移户方案">批量移户方案</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import jlModel from "./jlfa.vue";
    export default {
        components: {jlModel},
        data() {
            return {
               tabPosition: "left",
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>
    
</style>
