<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>输入框组件</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
                <!-- *********************************************基础用法********************************************** -->
                <el-tab-pane label="基础用法" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            当前tab标签下的内容为input的基本用法：<br/>
                            1、标准输入框<br/>
                            2、禁用状态框<br/>
                            3、可清空输入框<br/>
                            4、密码框
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <p><span>基本输入框：</span> <el-input v-model="input" placeholder="请输入内容" class="y-input"></el-input> </p>
                            <p><span>禁用状态框：</span> <el-input v-model="input2" placeholder="请输入内容" :disabled="true" class="y-input"></el-input> </p>
                            <p><span>可清空输入框：</span> <el-input v-model="input3" placeholder="请输入内容" clearable class="y-input"></el-input> </p>
                            <p><span>密码框：</span> <el-input v-model="input4" placeholder="请输入内容" show-password class="y-input"></el-input> </p>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                基本输入框：&lt;el-input v-model="input" placeholder="请输入内容" class="y-input"&gt;&lt;/el-input&gt;<br/>
                                禁用状态框：&lt;el-input v-model="input2" placeholder="请输入内容" :disabled="true" class="y-input"&gt;&lt;/el-input&gt;<br/>
                                可清空输入框：&lt;el-input v-model="input3" placeholder="请输入内容" clearable class="y-input"&gt;&lt;/el-input&gt;<br/>
                                密码框：&lt;el-input v-model="input4" placeholder="请输入内容" show-password class="y-input"&gt;&lt;/el-input&gt;<br/>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            input: "",
            input2: "",
            input3: "",
            input4: ""
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************带icon的输入框********************************************** -->
                <el-tab-pane label="附带Icon的输入框" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            本实例展示附带图标的输入框，设置方式分为：属性、slot方式两种
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <div class="demo-input-suffix">属性方式：
                                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input" class="y-input"></el-input>&nbsp;
                                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" class="y-input"> </el-input>
                            </div>
                            <div class="demo-input-suffix">slot 方式：
                                <el-input placeholder="请选择日期" v-model="input3" class="y-input">
                                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                                </el-input>&nbsp;
                                <el-input placeholder="请输入内容" v-model="input4" class="y-input">
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                属性方式：<br/>
                                    &lt;el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input" class="y-input"&gt;&lt;/el-input&gt;&nbsp;<br/>
                                    &lt;el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" class="y-input"&gt;&lt;/el-input&gt;<br/><br/>
                                slot 方式：<br/>
                                    &lt;el-input placeholder="请选择日期" v-model="input3" class="y-input"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;i slot="suffix" class="el-input__icon el-icon-date"&gt;&lt;/i&gt;<br/>
                                    &lt;/el-input&gt;&nbsp;<br/>
                                    &lt;el-input placeholder="请输入内容" v-model="input4" class="y-input"&gt;<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;i slot="prefix" class="el-input__icon el-icon-search"&gt;&lt;/i&gt;<br/>
                                    &lt;/el-input&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            input: "",
            input2: "",
            input3: "",
            input4: ""
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************文本域********************************************** -->
                <el-tab-pane label="文本域" name="three-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            本实例展示文本域相关的使用，用法如下：<br/>
                            1、标准文本域<br/>
                            2、可自适用文本内容的文本域
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele textarea-box">
                            <p>
                                <span>标准文本域(文本高度可用:rows 进行控制)：</span>
                                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                            </p>
                            <p>
                                <span>可自适用文本内容的文本域：</span>
                                <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea3"></el-input> <br/><br/>
                                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2"></el-input>
                            </p>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                标准文本域(文本高度可用:rows 进行控制)：<br/>
                                &lt;el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"&gt;&lt;/el-input&gt; <br/><br/>
                                可自适用文本内容的文本域：<br/>
                                &lt;el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea3"&gt;&lt;/el-input&gt; <br/>
                                &lt;el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2"&gt;&lt;/el-input&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            textarea: "",
            textarea2: "",
            textarea3: ""
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************复合输入框********************************************** -->
                <el-tab-pane label="复合输入框" name="four-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            可前置或后置元素，一般为标签或按钮
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <div>
                                <el-input placeholder="请输入内容" v-model="input1">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                            </div>
                            <div style="margin-top: 15px;">
                                <el-input placeholder="请输入内容" v-model="input2">
                                    <template slot="append">.com</template>
                                </el-input>
                            </div>
                            <div style="margin-top: 15px;">
                                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                                        <el-option label="餐厅名" value="1"></el-option>
                                        <el-option label="订单号" value="2"></el-option>
                                        <el-option label="用户电话" value="3"></el-option>
                                    </el-select>
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                            </div>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
&lt;el-input placeholder="请输入内容" v-model="input1"&gt;
    &lt;template slot="prepend"&gt;Http://&lt;/template&gt;
&lt;/el-input&gt;
&lt;el-input placeholder="请输入内容" v-model="input2"&gt;
    &lt;template slot="append"&gt;.com&lt;/template&gt;
&lt;/el-input&gt;
&lt;el-input placeholder="请输入内容" v-model="input3" class="input-with-select"&gt;
    &lt;el-select v-model="select" slot="prepend" placeholder="请选择"&gt;
        &lt;el-option label="餐厅名" value="1"&gt;&lt;/el-option&gt;
        &lt;el-option label="订单号" value="2"&gt;&lt;/el-option&gt;
        &lt;el-option label="用户电话" value="3"&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
    &lt;el-button slot="append" icon="el-icon-search"&gt;&lt;/el-button&gt;
&lt;/el-input&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            input1: "",
            input2: "",
            input3: "",
            select: ""
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************带输入建议********************************************** -->
                <el-tab-pane label="带输入建议" name="five-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            带检索提示的输入框，使用如下：<br/>
                            1、激活立即列出建议<br/>
                            2、输入后匹配显示建议<br/>
                            3、自定义建议列表<br/>
                            4、服务端获取建议列表
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <div class="sub-title">激活立即列出建议</div>
                            <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容"@select="handleSelect"></el-autocomplete><br/><br/>
                            <div class="sub-title">输入后匹配显示建议</div>
                            <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete><br/><br/>
                            <div class="sub-title">自定义建议列表</div>
                            <el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
                                <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
                                <template slot-scope="{ item }">
                                    <div class="name">{{ item.value }}</div>
                                    <span class="addr">{{ item.address }}</span>
                                </template>
                            </el-autocomplete><br/><br/>
                            <div class="sub-title">服务端获取建议列表</div>
                            <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
激活立即列出建议
&lt;el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容"@select="handleSelect"&gt;&lt;/el-autocomplete&gt;
输入后匹配显示建议
&lt;el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"&gt;&lt;/el-autocomplete&gt;
自定义建议列表
&lt;el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"&gt;
    &lt;i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"&gt;&lt;/i&gt;
    &lt;template slot-scope="{ item }"&gt;
        &lt;div class="name"&gt;{ { item.value } }&lt;/div&gt;
        &lt;span class="addr"&gt;{ { item.address } }&lt;/span&gt;
    &lt;/template&gt;
&lt;/el-autocomplete&gt;
服务端获取建议列表
&lt;el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"&gt;&lt;/el-autocomplete&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            restaurants: [],
            state1: '',
            state2: '',
            state: '',
            timeout:  null
        }
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [{ "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },........];  //检索框数据
        },
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************文本域限制内容长度********************************************** -->
                <el-tab-pane label="文本域限制内容长度" name="six-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            本里为针对输入内容的字符串长度进行限制
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input><br/><br/>
                            <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit&gt;&lt;/el-input&gt;<br/>
                                &lt;el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit&gt;&lt;/el-input&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            textarea: "",
            text: ""
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
                input: "",
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                textarea: "",
                textarea2: "",
                textarea3: "",
                select: "",
                text: "",
                restaurants: [],
                state1: '',
                state2: '',
                state: '',
                timeout:  null
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
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

    /*样例标签*/
    .ele>p{padding: 10px;}
    .ele>p>span{display: inline-block; width: 100px; line-height: 30px;text-align: right;margin-right: 10px;}
    .y-input{width: 220px;}
    /*文本域样式定义*/
    .textarea-box>p>span{width: 100%;display: block;text-align: left;}
    /*复合输入框*/
    .el-select .el-input {width: 130px;}
    .input-with-select .el-input-group__prepend {background-color: #fff;}
    /*带输入建议*/
    .sub-title{display: inline-block;margin-right: 10px;margin-left: 20px;}

    /*自定义模板*/
    li { line-height: normal; padding: 7px;}
    .name { text-overflow: ellipsis;overflow: hidden;}
    .addr {font-size: 12px;color: #b4b4b4;}
    .highlighted .addr { color: #ddd;}
</style>