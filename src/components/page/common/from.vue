<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>表单组件</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
                <!-- *********************************************简单表单********************************************** -->
                <el-tab-pane label="简单表单" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <el-form ref="form" :model="form" label-width="80px" class="from-box">
                                <el-form-item label="活动名称">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="活动区域">
                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动时间">
                                    <el-col :span="11">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="即时配送">
                                    <el-switch v-model="form.delivery"></el-switch>
                                </el-form-item>
                                <el-form-item label="活动性质">
                                    <el-checkbox-group v-model="form.type">
                                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="特殊资源">
                                    <el-radio-group v-model="form.resource">
                                        <el-radio label="线上品牌商赞助"></el-radio>
                                        <el-radio label="线下场地免费"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="活动形式">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                    <el-button>取消</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-form ref="form" :model="form" label-width="80px" class="from-box"&gt;<br/>
    &lt;el-form-item label="活动名称"&gt;<br/>
        &lt;el-input v-model="form.name"&gt;&lt;/el-input&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item label="活动区域"&gt;<br/>
        &lt;el-select v-model="form.region" placeholder="请选择活动区域"&gt;<br/>
            &lt;el-option label="区域一" value="shanghai"&gt;&lt;/el-option&gt;<br/>
            &lt;el-option label="区域二" value="beijing"&gt;&lt;/el-option&gt;<br/>
        &lt;/el-select&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item label="活动时间"&gt;<br/>
        &lt;el-col :span="11"&gt;<br/>
            &lt;el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"&gt;&lt;/el-date-picker&gt;<br/>
        &lt;/el-col&gt;<br/>
        &lt;el-col class="line" :span="2"&gt;-&lt;/el-col&gt;<br/>
        &lt;el-col :span="11"&gt;<br/>
            &lt;el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"&gt;&lt;/el-time-picker&gt;<br/>
        &lt;/el-col&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item label="即时配送"&gt;<br/>
        &lt;el-switch v-model="form.delivery"&gt;&lt;/el-switch&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item label="活动性质"&gt;<br/>
        &lt;el-checkbox-group v-model="form.type"&gt;<br/>
            &lt;el-checkbox label="美食/餐厅线上活动" name="type"&gt;&lt;/el-checkbox&gt;<br/>
            &lt;el-checkbox label="地推活动" name="type"&gt;&lt;/el-checkbox&gt;<br/>
            &lt;el-checkbox label="线下主题活动" name="type"&gt;&lt;/el-checkbox&gt;<br/>
            &lt;el-checkbox label="单纯品牌曝光" name="type"&gt;&lt;/el-checkbox&gt;<br/>
        &lt;/el-checkbox-group&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item label="特殊资源"&gt;<br/>
        &lt;el-radio-group v-model="form.resource"&gt;<br/>
            &lt;el-radio label="线上品牌商赞助"&gt;&lt;/el-radio&gt;<br/>
            &lt;el-radio label="线下场地免费"&gt;&lt;/el-radio&gt;<br/>
        &lt;/el-radio-group&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item label="活动形式"&gt;<br/>
        &lt;el-input type="textarea" v-model="form.desc"&gt;&lt;/el-input&gt;<br/>
    &lt;/el-form-item&gt;<br/>
    &lt;el-form-item&gt;<br/>
        &lt;el-button type="primary" @click="onSubmit"&gt;立即创建&lt;/el-button&gt;<br/>
        &lt;el-button&gt;取消&lt;/el-button&gt;<br/>
    &lt;/el-form-item&gt;<br/>
&lt;/el-form&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            title: "自定义数据表格",
            activeName: 'first-ele',
            form: {name: '',region: '',date1: '',date2: '',delivery: false,type: [],resource: '',desc: ''}
        }
    },
    methods:{
        onSubmit() {
            console.log('submit!');
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************行内表单********************************************** -->
                <el-tab-pane label="行内表单" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            行内表单的显示，多用于数据表格顶部，或者首页顶部检索
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <el-form :inline="true" :model="formInline" class="demo-form-inline from-box">
                                <el-form-item label="审批人">
                                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                </el-form-item>
                                <el-form-item label="活动区域">
                                    <el-select v-model="formInline.region" placeholder="活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">查询</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-form :inline="true" :model="formInline" class="demo-form-inline"&gt;
    &lt;el-form-item label="审批人"&gt;
        &lt;el-input v-model="formInline.user" placeholder="审批人"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="活动区域"&gt;
        &lt;el-select v-model="formInline.region" placeholder="活动区域"&gt;
            &lt;el-option label="区域一" value="shanghai"&gt;&lt;/el-option&gt;
            &lt;el-option label="区域二" value="beijing"&gt;&lt;/el-option&gt;
        &lt;/el-select&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item&gt;
        &lt;el-button type="primary" @click="onSubmit"&gt;查询&lt;/el-button&gt;
    &lt;/el-form-item&gt;
&lt;/el-form&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            formInline: {user: '',region: ''}
        }
    },
    methods:{
        onSubmit() {
            this.$message("submit");
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************表单验证********************************************** -->
                <el-tab-pane label="表单验证" name="three-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            基本的表单验证，由element 默认提通的校验
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm from-box">
                                <el-form-item label="活动名称" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="活动区域" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="活动时间" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-form-item prop="date2">
                                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="即时配送" prop="delivery">
                                    <el-switch v-model="ruleForm.delivery"></el-switch>
                                </el-form-item>
                                <el-form-item label="活动性质" prop="type">
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="特殊资源" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="线上品牌商赞助"></el-radio>
                                        <el-radio label="线下场地免费"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="活动形式" prop="desc">
                                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm from-box"&gt;
    &lt;el-form-item label="活动名称" prop="name"&gt;
        &lt;el-input v-model="ruleForm.name"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="活动区域" prop="region"&gt;
        &lt;el-select v-model="ruleForm.region" placeholder="请选择活动区域"&gt;
            &lt;el-option label="区域一" value="shanghai"&gt;&lt;/el-option&gt;
            &lt;el-option label="区域二" value="beijing"&gt;&lt;/el-option&gt;
        &lt;/el-select&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="活动时间" required&gt;
        &lt;el-col :span="11"&gt;
            &lt;el-form-item prop="date1"&gt;
                &lt;el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"&gt;&lt;/el-date-picker&gt;
            &lt;/el-form-item&gt;
        &lt;/el-col&gt;
        &lt;el-col class="line" :span="2"&gt;-&lt;/el-col&gt;
        &lt;el-col :span="11"&gt;
            &lt;el-form-item prop="date2"&gt;
                &lt;el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"&gt;&lt;/el-time-picker&gt;
            &lt;/el-form-item&gt;
        &lt;/el-col&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="即时配送" prop="delivery"&gt;
        &lt;el-switch v-model="ruleForm.delivery"&gt;&lt;/el-switch&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="活动性质" prop="type"&gt;
        &lt;el-checkbox-group v-model="ruleForm.type"&gt;
            &lt;el-checkbox label="美食/餐厅线上活动" name="type"&gt;&lt;/el-checkbox&gt;
            &lt;el-checkbox label="地推活动" name="type"&gt;&lt;/el-checkbox&gt;
            &lt;el-checkbox label="线下主题活动" name="type"&gt;&lt;/el-checkbox&gt;
            &lt;el-checkbox label="单纯品牌曝光" name="type"&gt;&lt;/el-checkbox&gt;
        &lt;/el-checkbox-group&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="特殊资源" prop="resource"&gt;
        &lt;el-radio-group v-model="ruleForm.resource"&gt;
            &lt;el-radio label="线上品牌商赞助"&gt;&lt;/el-radio&gt;
            &lt;el-radio label="线下场地免费"&gt;&lt;/el-radio&gt;
        &lt;/el-radio-group&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="活动形式" prop="desc"&gt;
        &lt;el-input type="textarea" v-model="ruleForm.desc"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item&gt;
        &lt;el-button type="primary" @click="submitForm('ruleForm')"&gt;立即创建&lt;/el-button&gt;
        &lt;el-button @click="resetForm('ruleForm')"&gt;重置&lt;/el-button&gt;
    &lt;/el-form-item&gt;
&lt;/el-form&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            ruleForm: {name: '',region: '',date1: '',date2: '',delivery: false,type: [],resource: '',desc: ''},
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************自定义验证********************************************** -->
                <el-tab-pane label="自定义验证" name="four-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            自定义验证表单，由自己指定验证的规则
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm from-box">
                                <el-form-item label="密码" prop="pass2">
                                    <el-input type="password" v-model="ruleForm2.pass2" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="checkPass2">
                                    <el-input type="password" v-model="ruleForm2.checkPass2" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="年龄" prop="age2">
                                    <el-input v-model.number="ruleForm2.age2"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm"&gt;
    &lt;el-form-item label="密码" prop="pass2"&gt;
        &lt;el-input type="password" v-model="ruleForm2.pass2" autocomplete="off"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="确认密码" prop="checkPass2"&gt;
        &lt;el-input type="password" v-model="ruleForm2.checkPass2" autocomplete="off"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label="年龄" prop="age2"&gt;
        &lt;el-input v-model.number="ruleForm2.age2"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item&gt;
        &lt;el-button type="primary" @click="submitForm('ruleForm2')"&gt;提交&lt;/el-button&gt;
        &lt;el-button @click="resetForm('ruleForm2')"&gt;重置&lt;/el-button&gt;
    &lt;/el-form-item&gt;
&lt;/el-form&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        var checkAge = (rule2, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule2, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass2 !== '') {
                    this.$refs["ruleForm2"].validateField('checkPass2');
                }
                callback();
            }
        };
        var validatePass2 = (rule2, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass2) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                pass2: '',
                checkPass2: '',
                age2: ''
            },
            rules2: {
                pass2: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass2: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age2: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************动态增减项********************************************** -->
                <el-tab-pane label="动态增减项" name="five-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            对表单添加动态控制
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic from-box">
                                <el-form-item prop="email" label="邮箱" :rules="rules3">
                                    <el-input v-model="dynamicValidateForm.email"></el-input>
                                </el-form-item>
                                <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.'+index+'.value'" :rules="rules4">
                                    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                                    <el-button @click="addDomain">新增域名</el-button>
                                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic form-box"&gt;
    &lt;el-form-item prop="email" label="邮箱" :rules="rules3"&gt;
        &lt;el-input v-model="dynamicValidateForm.email"&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.'+index+'.value'" :rules="rules4"&gt;
        &lt;el-input v-model="domain.value"&gt;&lt;/el-input&gt;&lt;el-button @click.prevent="removeDomain(domain)"&gt;删除&lt;/el-button&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item&gt;
        &lt;el-button type="primary" @click="submitForm('dynamicValidateForm')"&gt;提交&lt;/el-button&gt;
        &lt;el-button @click="addDomain"&gt;新增域名&lt;/el-button&gt;
        &lt;el-button @click="resetForm('dynamicValidateForm')"&gt;重置&lt;/el-button&gt;
    &lt;/el-form-item&gt;
&lt;/el-form&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            rules3: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            rules4: {required: true, message: '域名不能为空', trigger: 'blur'},
            dynamicValidateForm: {
                domains: [{value: ''}],
                email: ''
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                key: Date.now()
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
    export default{
        name: 'customTable',
        data(){
            var checkAge = (rule2, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule2, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass2 !== '') {
                        this.$refs["ruleForm2"].validateField('checkPass2');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule2, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass2) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                title: "自定义数据表格",
                activeName: 'first-ele',
                form: {name: '',region: '',date1: '',date2: '',delivery: false,type: [],resource: '',desc: ''},
                formInline: {user: '',region: ''},
                ruleForm: {name: '',region: '',date1: '',date2: '',delivery: false,type: [],resource: '',desc: ''},
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
                ruleForm2: {
                    pass2: '',
                    checkPass2: '',
                    age2: ''
                },
                rules2: {
                    pass2: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass2: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age2: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                rules3: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                rules4: {required: true, message: '域名不能为空', trigger: 'blur'},
                dynamicValidateForm: {
                    domains: [{value: ''}],
                    email: ''
                }
            }
        },
        methods:{
            onSubmit() {
                this.$message("submit");
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
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
    /*表单样式定义*/
    .from-box{ width: 50%; padding: 30px; border-radius: 5px; box-shadow: 0 0 5px #eee; }
</style>