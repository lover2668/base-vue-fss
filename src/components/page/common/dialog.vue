<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>消息提醒相关</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
                <!-- *********************************************基本用法********************************************** -->
                <el-tab-pane label="基本用法Dialog" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">

                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
                            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                                <span>自定义内容区域</span>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                </span>
                            </el-dialog>
                        </div>
                        <span class="head-title">样例代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;!-- 操作标签 --&gt;
&lt;el-button type="text" @click="dialogVisible = true"&gt;点击打开 Dialog&lt;/el-button&gt;
&lt;!-- 弹窗 --&gt;
&lt;el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose"&gt;
    &lt;span&gt;自定义内容区域&lt;/span&gt;
    &lt;span slot="footer" class="dialog-footer"&gt;
        &lt;el-button @click="dialogVisible = false"&gt;取 消&lt;/el-button&gt;
        &lt;el-button type="primary" @click="dialogVisible = false"&gt;确 定&lt;/el-button&gt;
    &lt;/span&gt;
&lt;/el-dialog&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data() {
        return {
            dialogVisible: false    //控制显示与否
        };
    },
    methods: {
        //关闭事件的触发
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
};
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************自定义内容********************************************** -->
                <el-tab-pane label="自定义内容Dialog" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            由element ui 提供的基础用法
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <!--表格弹层-->
                            <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的（表格支持的属性）</el-button>&nbsp;&nbsp;&nbsp;
                            <el-dialog title="Dialog Attribute" :visible.sync="dialogTableVisible">
                                <y-table :data="tableData" :pagination="showPagination"></y-table>
                            </el-dialog>
                            <!--表单弹层-->
                            <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
                            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                                <el-form :model="form">
                                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                                        <el-input v-model="form.name" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                                        <el-select v-model="form.region" placeholder="请选择活动区域">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                </div>
                            </el-dialog>
                        </div>
                        <span class="head-title">样例代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;!--表格弹层--&gt;
&lt;el-dialog title="Dialog Attribute" :visible.sync="dialogTableVisible"&gt;
    &lt;y-table :data="tableData" :pagination="showPagination"&gt;&lt;/y-table&gt;
&lt;/el-dialog&gt;<br/>
&lt;!--表格弹层--&gt;
&lt;el-dialog title="收货地址" :visible.sync="dialogFormVisible"&gt;
    &lt;el-form :model="form"&gt;
        &lt;el-form-item label="活动名称" :label-width="formLabelWidth"&gt;
            &lt;el-input v-model="form.name" autocomplete="off"&gt;&lt;/el-input&gt;
        &lt;/el-form-item&gt;
        &lt;el-form-item label="活动区域" :label-width="formLabelWidth"&gt;
            &lt;el-select v-model="form.region" placeholder="请选择活动区域"&gt;
                &lt;el-option label="区域一" value="shanghai"&gt;&lt;/el-option&gt;
                &lt;el-option label="区域二" value="beijing"&gt;&lt;/el-option&gt;
            &lt;/el-select&gt;
        &lt;/el-form-item&gt;
    &lt;/el-form&gt;
    &lt;div slot="footer" class="dialog-footer"&gt;
        &lt;el-button @click="dialogFormVisible = false"&gt;取 消&lt;/el-button&gt;
        &lt;el-button type="primary" @click="dialogFormVisible = false"&gt;确 定&lt;/el-button&gt;
    &lt;/div&gt;
&lt;/el-dialog&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data() {
        return {
            showPagination: false,   //分页显示与否默认显示
            tableData: {
                isSort: true,   //是否支持排序
                //表头定义
                header: [
                    {key: "col1",value: "参数"},
                    {key: "col2",value: "说明"},
                    {key: "col3", value: "类型"},
                    {key: "col4",value: "可选值"},
                    {key: "col5",value: "默认值"},
                ],
                data: [
                    {col1: "visible", col2: "是否显示 Dialog，支持 .sync 修饰符", col3: "boolean", col4: "—", col5: "false"},
                    {col1: "title", col2: "Dialog 的标题，也可通过具名 slot （见下表）传入", col3: "string", col4: "—", col5: "—"},
                    {col1: "width", col2: "Dialog 的宽度", col3: "string", col4: "—", col5: "50%"},
                    {col1: "fullscreen", col2: "是否为全屏 Dialog", col3: "boolean", col4: "—", col5: "false"},
                    {col1: "top", col2: "Dialog CSS 中的 margin-top 值", col3: "string", col4: "—", col5: "15vh"},
                    {col1: "modal", col2: "是否需要遮罩层", col3: "boolean", col4: "—", col5: "true"},
                    {col1: "modal-append-to-body", col2: "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上", col3: "boolean", col4: "—", col5: "true"},
                    {col1: "lock-scroll", col2: "是否在 Dialog 出现时将 body 滚动锁定", col3: "boolean", col4: "—", col5: "true"},
                    {col1: "custom-class", col2: "Dialog 的自定义类名", col3: "string", col4: "—", col5: "—"},
                    {col1: "close-on-click-modal", col2: "是否可以通过点击 modal 关闭 Dialog", col3: "boolean", col4: "—", col5: "true"}
                ],
            },
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                delivery: false,
            },
            formLabelWidth: '120px'
        };
    }
};
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************嵌套定义内容********************************************** -->
                <el-tab-pane label="嵌套Dialog" name="three-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            由element ui 官网提供
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
                            <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
                                <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="outerVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
                                </div>
                            </el-dialog>
                        </div>
                        <span class="head-title">样例代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-dialog title="外层 Dialog" :visible.sync="outerVisible"&gt;
    &lt;el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body&gt;&lt;/el-dialog&gt;
    &lt;div slot="footer" class="dialog-footer"&gt;
        &lt;el-button @click="outerVisible = false"&gt;取 消&lt;/el-button&gt;
        &lt;el-button type="primary" @click="innerVisible = true"&gt;打开内层 Dialog&lt;/el-button&gt;
    &lt;/div&gt;
&lt;/el-dialog&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data() {
        return {
            outerVisible: false,
            innerVisible: false
        };
    }
};
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
        data() {
            return {
                activeName: "first-ele",
                dialogVisible: false,
                showPagination: false,   //分页显示与否默认显示
                tableData: {
                    isSort: true,   //是否支持排序
                    //表头定义
                    header: [
                        {key: "col1",value: "参数"},
                        {key: "col2",value: "说明"},
                        {key: "col3", value: "类型"},
                        {key: "col4",value: "可选值"},
                        {key: "col5",value: "默认值"},
                    ],
                    data: [
                        {col1: "visible", col2: "是否显示 Dialog，支持 .sync 修饰符", col3: "boolean", col4: "—", col5: "false"},
                        {col1: "title", col2: "Dialog 的标题，也可通过具名 slot （见下表）传入", col3: "string", col4: "—", col5: "—"},
                        {col1: "width", col2: "Dialog 的宽度", col3: "string", col4: "—", col5: "50%"},
                        {col1: "fullscreen", col2: "是否为全屏 Dialog", col3: "boolean", col4: "—", col5: "false"},
                        {col1: "top", col2: "Dialog CSS 中的 margin-top 值", col3: "string", col4: "—", col5: "15vh"},
                        {col1: "modal", col2: "是否需要遮罩层", col3: "boolean", col4: "—", col5: "true"},
                        {col1: "modal-append-to-body", col2: "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上", col3: "boolean", col4: "—", col5: "true"},
                        {col1: "lock-scroll", col2: "是否在 Dialog 出现时将 body 滚动锁定", col3: "boolean", col4: "—", col5: "true"},
                        {col1: "custom-class", col2: "Dialog 的自定义类名", col3: "string", col4: "—", col5: "—"},
                        {col1: "close-on-click-modal", col2: "是否可以通过点击 modal 关闭 Dialog", col3: "boolean", col4: "—", col5: "true"}
                    ]
                },
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    delivery: false,
                },
                formLabelWidth: '120px',
                outerVisible: false,
                innerVisible: false
            };
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    };
</script>

<style scoped>
    .text {font-size: 14px;}
    .item {margin-bottom: 18px; }
    .clearfix:after {display: table;content: "";}
    .clearfix:after {clear: both}
    .box-card { width: 100%; }
    .demoModel{width: 98%;margin: 0 auto;}
    .head-title{font-size: 14px;font-weight: bold;color: #555;display: block;margin-top: 10px;margin-bottom: 10px;}
    .code{padding: 10px; }
    .code-msg{float: right;margin-right: 10px;margin-top: 10px;color: #333;}
    .code-main{width: 98%;background: #f8f8f8;margin-bottom: 20px;border-raidus: 5px;box-shadow: 0 0 5px #eee;padding: 20px;padding-top: 30px;}
</style>