<template>
    <div class="tip-bar">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                
            }
        },
        watch: {
            $router(){
                this.getBreadcrumbList();
            }
        },
        created(){
            // bus.$on("upShowDrawer", res => {
            //     let matched = this.$router.currentRoute;
            //     console.log(matched);
            // })
        },
        methods: {
            //面包屑数据的获取
            getBreadcrumbList(){
                let matched = this.$router; 
                console.log(matched);
            }
        }
    }
</script>

<style scoped>
.tip-bar{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    background-color: #ddd;
}
</style>
