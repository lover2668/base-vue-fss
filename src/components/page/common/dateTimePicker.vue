<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>时间日期组件</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
                <!-- *********************************************时间组件********************************************** -->
                <el-tab-pane label="时间组件" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            时间组件提供以下四种类型：<br/>
                            1、固定时间点<br/>
                            2、任意时间点<br/>
                            3、固定时间范围<br/>
                            4、任意时间范围
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            固定时间点：
                            <el-time-select v-model="value1" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select><br/><br>
                            任意时间点：
                            <el-time-picker v-model="value2" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker>
                            <el-time-picker arrow-control v-model="value3" :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker><br/><br/>
                            固定时间范围:
                            <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"></el-time-select>
                            <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"></el-time-select><br/><br/>
                            任意时间范围：
                            <el-time-picker is-range v-model="value4" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
                            <el-time-picker is-range arrow-control v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
固定时间点：
&lt;el-time-select v-model="value1" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"&gt;&lt;/el-time-select&gt;

任意时间点：
&lt;el-time-picker v-model="value2" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"&gt;&lt;/el-time-picker&gt;
&lt;el-time-picker arrow-control v-model="value3" :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"&gt;&lt;/el-time-picker&gt;

固定时间范围:
&lt;el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"&gt;&lt;/el-time-select&gt;
&lt;el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"&gt;&lt;/el-time-select&gt;

任意时间范围：
&lt;el-time-picker is-range v-model="value4" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"&gt;&lt;/el-time-picker&gt;
&lt;el-time-picker is-range arrow-control v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"&gt;&lt;/el-time-picker&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            value1: '',
            value2: new Date(2016, 9, 10, 18, 40),
            value3: new Date(2016, 9, 10, 18, 40),
            startTime: '',
            endTime: '',
            value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************日期组件********************************************** -->
                <el-tab-pane label="日期组件" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            提供基础日期组件，若需了解更多查阅Element官网文档
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <span class="demonstration">默认</span>
                            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                            <span class="demonstration" style="margin-left: 10px;">带快捷选项</span>
                            <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                            <br/><br/>
                            <div class="block">
                                <span class="demonstration">日期范围默认</span>
                                <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                            </div>
                            <div class="block">
                                <span class="demonstration">日期范围带快捷选项</span>
                                <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
                            </div>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
默认：&lt;el-date-picker v-model="value1" type="date" placeholder="选择日期"&gt;&lt;/el-date-picker&gt;
带快捷选项：&lt;el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期"
        :picker-options="pickerOptions"&gt;&lt;/el-date-picker&gt;
日期范围默认：&lt;el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期"&gt;&lt;/el-date-picker&gt;
日期范围带快捷选项：&lt;el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期" :picker-options="pickerOptions"&gt;&lt;/el-date-picker&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
};
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <!-- *********************************************时间日期组件********************************************** -->
                <el-tab-pane label="时间日期" name="second-three">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">

                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <div class="block">日期和时间点默认：
                                <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                            </div>
                            <div class="block">日期和时间点带快捷选项：
                                <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions"></el-date-picker>
                            </div>
                            <div class="block">日期和时间点设置默认时间：
                                <el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00"></el-date-picker>
                            </div>
                            <div class="block">默认
                                <el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                            </div>
                            <div class="block">带快捷选项
                                <el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
                                                end-placeholder="结束日期"></el-date-picker>
                            </div>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
<pre>
日期和时间点默认：&lt;el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"&gt;&lt;/el-date-picker&gt;
日期和时间点带快捷选项：&lt;el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions"&gt;&lt;/el-date-picker&gt;
日期和时间点设置默认时间：&lt;el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00"&gt;&lt;/el-date-picker&gt;
日期和时间范围默认：&lt;el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"&gt;&lt;/el-date-picker&gt;
日期和时间范围带快捷选项：&lt;el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期"&gt;&lt;/el-date-picker&gt;
</pre>
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default {
    data(){
        return {
            value1: '',
            value2: new Date(2016, 9, 10, 18, 40),
            value3: new Date(2016, 9, 10, 18, 40),
            value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            }
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
                value1: '',
                value2: new Date(2016, 9, 10, 18, 40),
                value3: new Date(2016, 9, 10, 18, 40),
                startTime: '',
                endTime: '',
                value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                }
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
    .block{margin-bottom: 10px;padding-left: 20px;}
</style>