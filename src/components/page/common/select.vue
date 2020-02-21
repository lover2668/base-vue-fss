<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>简单下拉显示</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- *********************************************单选组件********************************************** -->
                <el-tab-pane label="简单单选下拉demo" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            针对简单的下拉选择框，只需按照固定的格式进行调用即操作如下描述:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、selOptions：指定当前下拉选的数据，数据格式为、[{key: "key1", value:"value1"},{key: "key2",value: "value2"},...]<br/>
                            2、enableValue：列表默认参数的指定，参数为数据的key值<br/>
                            3、isCheck：是否多选的指定，true/false<br/>
                            4、isChange：参数改变的触发函数<br/>
                            注意：参数的值必须定义在当前页面data中进行了定义，若数据为后台请求，则在页面加载时对下拉组件数据进行初始化定义,若页面为多下拉选则需import引入和初始化多次
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <y-select :selOptions="refOptions" :enableValue="enableValue" :isCheck="!isCheck" :isChange="handleChange"></y-select>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-select :selOptions="refOptions" :enableValue="enableValue" :isCheck="!isCheck" :isChange="handleChange"&gt;&lt;/y-select&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            refOptions: [       //下拉组件数据
                {key: "col1", value: "列1"},
                {key: "col2", value: "列2"},
                {key: "col3", value: "列3"},
                {key: "col4", value: "列4"},
                {key: "col5", value: "列5"},
                {key: "col6", value: "列6"},
                {key: "col7", value: "列7"},
                {key: "col8", value: "列8"}
            ],
            enableValue: "col1"     //下拉默认参数指定
        }
    },
    methods: {
        handleChange(err){      //参数改变触发
            this.$message(err);
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************多选组件********************************************** -->
                <el-tab-pane label="简单多选下拉" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            多选下拉选择框的定义，添加步骤如下:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、selOptions：指定当前下拉选的数据，数据格式为、[{key: "key1", value:"value1"},{key: "key2",value: "value2"},...]<br/>
                            2、enableValue：列表默认参数的指定，参数为数据的key值<br/>
                            3、isCheck：true，多选的指定<br/>
                            4、isChange：参数改变的触发函数<br/>
                            注意：参数的值必须定义在当前页面data中进行了定义，若数据为后台请求，则在页面加载时对下拉组件数据进行初始化定义
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-select :selOptions="refOptions" :enableValue="enableValue" :isCheck="isCheck" :isChange="handleChange2"></y-select>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-select :selOptions="refOptions" :enableValue="enableValue" :isCheck="isCheck" :isChange="handleChange2"&gt;&lt;/y-select&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            refOptions: [       //下拉组件数据
                {key: "col1", value: "列1"},
                {key: "col2", value: "列2"},
                {key: "col3", value: "列3"},
                {key: "col4", value: "列4"},
                {key: "col5", value: "列5"},
                {key: "col6", value: "列6"},
                {key: "col7", value: "列7"},
                {key: "col8", value: "列8"}
            ],
            enableValue2: ["col1","col2"],,     //下拉默认参数指定
            isCheck: true
        }
    },
    methods: {
        handleChange(err){      //参数改变触发
             this.$message(e.toString())
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************带检索组件********************************************** -->
                <el-tab-pane label="检索下拉单选" name="second-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            多选下拉选择框的定义，添加步骤如下:<br/>
                            1、利用import 对下拉组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、selOptions：指定当前下拉选的数据，数据格式为、[{key: "key1", value:"value1"},{key: "key2",value: "value2"},...]<br/>
                            2、enableValue：列表默认参数的指定，参数为数据的key值<br/>
                            3、isCheck：true，多选的指定<br/>
                            4、isChange：参数改变的触发函数<br/>
                            5、isSearch：是否具有搜索的指定<br/>
                            注意：参数的值必须定义在当前页面data中进行了定义，若数据为后台请求，则在页面加载时对下拉组件数据进行初始化定义
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-select :selOptions="refOptions" :enableValue="enableValue" :isSearch="isSearch" :isCheck="!isCheck" :isChange="handleChange2"></y-select>
                            <y-select :selOptions="refOptions" :enableValue="enableValue" :isSearch="isSearch" :isCheck="isCheck" :isChange="handleChange2"></y-select>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-select :selOptions="refOptions" :enableValue="enableValue" :isSearch="isSearch" :isCheck="!isCheck" :isChange="handleChange2"&gt;&lt;/y-select&gt;<br/>
                                &lt;y-select :selOptions="refOptions" :enableValue="enableValue" :isSearch="isSearch" :isCheck="isCheck" :isChange="handleChange2"&gt;&lt;/y-select&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            refOptions: [       //下拉组件数据
                {key: "col1", value: "列1"},
                {key: "col2", value: "列2"},
                {key: "col3", value: "列3"},
                {key: "col4", value: "列4"},
                {key: "col5", value: "列5"},
                {key: "col6", value: "列6"},
                {key: "col7", value: "列7"},
                {key: "col8", value: "列8"}
            ],
            enableValue2: ["col1","col2"],,     //下拉默认参数指定
            isCheck: true,    //是否具有多选
            isSearch: true    //是否具有搜索
        }
    },
    methods: {
        handleChange(err){      //参数改变触发
             this.$message(e.toString())
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
        name: 'setselect',
        data(){
            return {
                activeName: 'first-ele',
                refOptions: [
                    {key: "col1", value: "列1"},
                    {key: "col2", value: "列2"},
                    {key: "col3", value: "列3"},
                    {key: "col4", value: "列4"},
                    {key: "col5", value: "列5"},
                    {key: "col6", value: "列6"},
                    {key: "col7", value: "列7"},
                    {key: "col8", value: "列8"}
                ],
                enableValue2: ["col1","col2"],
                enableValue: "col1",
                isCheck: true,
                isSearch: true
            }
        },
        methods:{
            handleClick(tab, event) {
                //console.log(tab, event);
            },
            handleChange(err){
                this.$message(err);
            },
            handleChange2(e){
                this.$message(e.toString())
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