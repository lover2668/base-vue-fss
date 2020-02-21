<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>消息提醒相关</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- *********************************************简单消息提醒********************************************** -->
                <el-tab-pane label="简单消息提醒" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <el-button :plain="true" @click="open2" size="mini">成功</el-button>
                            <el-button :plain="true" @click="open3" size="mini">警告</el-button>
                            <el-button :plain="true" @click="open" size="mini">消息</el-button>
                            <el-button :plain="true" @click="open4" size="mini">错误</el-button>
                        </div>
                        <span class="head-title">使用：</span>
                        <div class="code">
                            <div class="code-main">
                                <p><span>成功提醒：</span>this.$message({message: '恭喜你，这是一条成功消息', type: 'success'});</p>
                                <p><span>警告提醒：</span>this.$message({ message: '警告哦，这是一条警告消息', type: 'warning' });</p>
                                <p><span>消息提醒：</span>this.$message('这是一条消息提示');</p>
                                <p><span>错误提醒：</span>this.$message.error('错了哦，这是一条错误消息');</p>
                            </div>
                        </div>
                        <span class="head-title">样例代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-button :plain="true" @click="open2" size="mini"&gt;成功&lt;/el-button&gt;
&lt;el-button :plain="true" @click="open3" size="mini"&gt;警告&lt;/el-button&gt;
&lt;el-button :plain="true" @click="open" size="mini"&gt;消息&lt;/el-button&gt;
&lt;el-button :plain="true" @click="open4" size="mini"&gt;错误&lt;/el-button&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    methods:{
        open() {
            this.$message('这是一条消息提示');
        },
        open2() {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },
        open3() {
            this.$message({
                message: '警告哦，这是一条警告消息',
                type: 'warning'
            });
        },
        open4() {
            this.$message.error('错了哦，这是一条错误消息');
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************弹层消息提醒********************************************** -->
                <el-tab-pane label="弹层消息提醒" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <el-button @click="open5">简单提示框</el-button>
                            <el-button @click="open6">确认、取消提示框</el-button>
                        </div>
                        <span class="head-title">样例代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-button type="text" @click="open5"&gt;简单提示框&lt;/el-button&gt;
&lt;el-button type="text" @click="open6">&gt;确认、取消提示框&lt;/el-button&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    methods:{
        open5() {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                    });
                }
            });
        },
        open6() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: 'custom_message',
        data(){
          return {
              activeName: 'first-ele',
          }
        },
        methods:{
            handleClick(tab, event) {
                //console.log(tab, event);
            },
            open() {
                this.$message('这是一条消息提示');
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },
            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },
            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            },
            open5() {
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            open6() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .text {font-size: 14px;}
    .item {margin-bottom: 18px; }
    .clearfix:after {display: table;content: "";}
    .clearfix:after {clear: both}
    .box-card { width: 100%; }
    .demoModel{width: 98%;margin: 0 auto;}
    .title{/*text-indent: 1em;*/ padding-left: 10px;background: #efefef;color: #666;margin-bottom: 10px;padding: 10px;border-radius: 5px;box-shadow: 5px 5px 5px #eee;}
    .head-title{font-size: 14px;font-weight: bold;color: #555;display: block;margin-top: 10px;margin-bottom: 10px;}
    .code{padding: 10px; }
    .code-msg{float: right;margin-right: 10px;margin-top: 10px;color: #333;}
    .code-main{width: 98%;background: #f8f8f8;margin-bottom: 20px;border-raidus: 5px;box-shadow: 0 0 5px #eee;padding: 20px;padding-top: 30px;}
</style>