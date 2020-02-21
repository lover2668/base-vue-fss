<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>树形组件</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- *********************************************基础用法********************************************** -->
                <el-tab-pane label="基础用法" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            参数描述：<br/>
                            1、data：展示的数据<br/>
                            2、:props：配置选项<br/>
                            3、@node-click：点击事件的添加
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"&gt;&lt;/el-tree&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }],
            defaultProps: {     //指定标签和子元素的key值
                children: 'children',
                label: 'label'
            }
        }
    },
    methods:{
        handleNodeClick(data) {
            console.log(data);
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************复选树形组件********************************************** -->
                <el-tab-pane label="复选树形结构(未完成)" name="second-code" disabled>
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            <!--多选下拉选择框的定义，添加步骤如下:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、selOptions：指定当前下拉选的数据，数据格式为、[{key: "key1", value:"value1"},{key: "key2",value: "value2"},...]<br/>
                            2、enableValue：列表默认参数的指定，参数为数据的key值<br/>
                            3、isCheck：true，多选的指定<br/>
                            4、isChange：参数改变的触发函数<br/>
                            注意：参数的值必须定义在当前页面data中进行了定义，若数据为后台请求，则在页面加载时对下拉组件数据进行初始化定义-->
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <!--<el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></el-tree>-->
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                <!--&lt;el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"&gt;&lt;/el-tree&gt;-->
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>

</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************带检索树形组件********************************************** -->
                <el-tab-pane label="带检索的树形组件（未完成）" name="second-three" disabled>
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            <!--多选下拉选择框的定义，添加步骤如下:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、selOptions：指定当前下拉选的数据，数据格式为、[{key: "key1", value:"value1"},{key: "key2",value: "value2"},...]<br/>
                            2、enableValue：列表默认参数的指定，参数为数据的key值<br/>
                            3、isCheck：true，多选的指定<br/>
                            4、isChange：参数改变的触发函数<br/>
                            5、isSearch：是否具有搜索的指定<br/>
                            注意：参数的值必须定义在当前页面data中进行了定义，若数据为后台请求，则在页面加载时对下拉组件数据进行初始化定义-->
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">

                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">

                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>

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
        name: 'setselect',
        data(){
            return {
                activeName: 'first-ele',
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1
            }
        },
        methods:{
            handleClick(tab, event) {
                //console.log(tab, event);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            loadNode(node, resolve) {
                console.log(node);
                console.log(resolve);
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
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