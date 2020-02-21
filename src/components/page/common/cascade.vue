<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>级联选择器</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName">
                <!-- *********************************************基础用法********************************************** -->
                <el-tab-pane label="基础用法" name="first-ele">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <div class="block">默认 click 触发子菜单：
                                <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
                            </div>
                            <div class="block">hover 触发子菜单：
                                <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange"></el-cascader>
                            </div>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                默认 click 触发子菜单：&lt;el-cascader :options="options" v-model="selectedOptions" @change="handleChange"&gt;&lt;/el-cascader&gt;<br/>
                                hover 触发子菜单：&lt;el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange"&gt;&lt;/el-cascader&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            options: [
                {value: 'zhinan',label: '指南',children: [
                    {value: 'shejiyuanze',label: '设计原则',children: [
                        {value: 'yizhi',label: '一致'},
                        {value: 'fankui',label: '反馈'},
                        {value: 'xiaolv',label: '效率'},
                        {value: 'kekong',label: '可控'}
                    ]},
                    {value: 'daohang',label: '导航',children: [
                        {value: 'cexiangdaohang',label: '侧向导航'},
                        {value: 'dingbudaohang',label: '顶部导航'}]
                    }
                ]},
                {value: 'zujian',label: '组件',children: [
                    {value: 'basic',label: 'Basic',children: [
                        {value: 'layout',label: 'Layout 布局'},
                        {value: 'color',label: 'Color 色彩'},
                        {value: 'typography',label: 'Typography 字体'},
                        {value: 'icon',label: 'Icon 图标'},
                        {value: 'button',label: 'Button 按钮'}
                    ] },
                    {value: 'form',label: 'Form',children: [
                        {value: 'radio',label: 'Radio 单选框'},
                        {value: 'checkbox',label: 'Checkbox 多选框'},
                        {value: 'input',label: 'Input 输入框' },
                        {value: 'input-number',label: 'InputNumber 计数器'},
                        {value: 'select',label: 'Select 选择器'},
                        {value: 'cascader',label: 'Cascader 级联选择器'},
                        {value: 'switch',label: 'Switch 开关'},
                        {value: 'slider',label: 'Slider 滑块'},
                        {value: 'time-picker',label: 'TimePicker 时间选择器'},
                        {value: 'date-picker',label: 'DatePicker 日期选择器'},
                        {value: 'datetime-picker',label: 'DateTimePicker 日期时间选择器'},
                        {value: 'upload',label: 'Upload 上传'},
                        {value: 'rate',label: 'Rate 评分'},
                        {value: 'form',label: 'Form 表单'}
                    ]},
                    {value: 'data',label: 'Data',children: [
                        {value: 'table',label: 'Table 表格'},
                        {value: 'tag',label: 'Tag 标签'},
                        {value: 'progress',label: 'Progress 进度条'},
                        {value: 'tree',label: 'Tree 树形控件'},
                        {value: 'pagination',label: 'Pagination 分页'},
                        {value: 'badge',label: 'Badge 标记'}
                    ]},
                    {value: 'notice',label: 'Notice',children: [
                        {value: 'alert',label: 'Alert 警告'},
                        {value: 'loading',label: 'Loading 加载'},
                        {value: 'message',label: 'Message 消息提示'},
                        {value: 'message-box',label: 'MessageBox 弹框'},
                        {value: 'notification',label: 'Notification 通知'}
                    ]},
                    {value: 'navigation',label: 'Navigation',children: [
                        {value: 'menu',label: 'NavMenu 导航菜单'},
                        {value: 'tabs',label: 'Tabs 标签页'},
                        {value: 'breadcrumb',label: 'Breadcrumb 面包屑'},
                        {value: 'dropdown',label: 'Dropdown 下拉菜单'},
                        {value: 'steps',label: 'Steps 步骤条'}
                    ]},
                    {value: 'others',label: 'Others',children: [
                        {value: 'dialog',label: 'Dialog 对话框'},
                        {value: 'tooltip',label: 'Tooltip 文字提示'},
                        {value: 'popover',label: 'Popover 弹出框'},
                        {value: 'card',label: 'Card 卡片'},
                        {value: 'carousel',label: 'Carousel 走马灯'},
                        {value: 'collapse',label: 'Collapse 折叠面板'}
                    ]}
                ]},
                {value: 'ziyuan',label: '资源',children: [
                    {value: 'axure',label: 'Axure Components'},
                    {value: 'sketch',label: 'Sketch Templates'},
                    {value: 'jiaohu',label: '组件交互文档'}
                ]}
            ],
            selectedOptions: [],
            selectedOptions2: []
        }
    },
    methods:{
        handleChange(value) {
            console.log(value);
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- *********************************************可搜索格式********************************************** -->
                <el-tab-pane label="可搜索格式" name="second-code">
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            将filterable赋值为true即可打开搜索功能。
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <div class="block">只可选择最后一级菜单的选项：
                                <el-cascader filterable :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
                            </div>
                            <div class="block">可选择任意一级菜单的选项：
                                <el-cascader filterable change-on-select expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange"></el-cascader>
                            </div>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                只可选择最后一级菜单的选项：&lt;el-cascader filterable :options="options" v-model="selectedOptions" @change="handleChange"&gt;&lt;/el-cascader&gt;<br/>
                                可选择任意一级菜单的选项：&lt;el-cascader filterable change-on-select expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange"&gt;&lt;/el-cascader&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            options: [
                {value: 'zhinan',label: '指南',children: [
                    {value: 'shejiyuanze',label: '设计原则',children: [
                        {value: 'yizhi',label: '一致'},
                        {value: 'fankui',label: '反馈'},
                        {value: 'xiaolv',label: '效率'},
                        {value: 'kekong',label: '可控'}
                    ]},
                    {value: 'daohang',label: '导航',children: [
                        {value: 'cexiangdaohang',label: '侧向导航'},
                        {value: 'dingbudaohang',label: '顶部导航'}]
                    }
                ]},
                {value: 'zujian',label: '组件',children: [
                    {value: 'basic',label: 'Basic',children: [
                        {value: 'layout',label: 'Layout 布局'},
                        {value: 'color',label: 'Color 色彩'},
                        {value: 'typography',label: 'Typography 字体'},
                        {value: 'icon',label: 'Icon 图标'},
                        {value: 'button',label: 'Button 按钮'}
                    ] },
                    {value: 'form',label: 'Form',children: [
                        {value: 'radio',label: 'Radio 单选框'},
                        {value: 'checkbox',label: 'Checkbox 多选框'},
                        {value: 'input',label: 'Input 输入框' },
                        {value: 'input-number',label: 'InputNumber 计数器'},
                        {value: 'select',label: 'Select 选择器'},
                        {value: 'cascader',label: 'Cascader 级联选择器'},
                        {value: 'switch',label: 'Switch 开关'},
                        {value: 'slider',label: 'Slider 滑块'},
                        {value: 'time-picker',label: 'TimePicker 时间选择器'},
                        {value: 'date-picker',label: 'DatePicker 日期选择器'},
                        {value: 'datetime-picker',label: 'DateTimePicker 日期时间选择器'},
                        {value: 'upload',label: 'Upload 上传'},
                        {value: 'rate',label: 'Rate 评分'},
                        {value: 'form',label: 'Form 表单'}
                    ]},
                    {value: 'data',label: 'Data',children: [
                        {value: 'table',label: 'Table 表格'},
                        {value: 'tag',label: 'Tag 标签'},
                        {value: 'progress',label: 'Progress 进度条'},
                        {value: 'tree',label: 'Tree 树形控件'},
                        {value: 'pagination',label: 'Pagination 分页'},
                        {value: 'badge',label: 'Badge 标记'}
                    ]},
                    {value: 'notice',label: 'Notice',children: [
                        {value: 'alert',label: 'Alert 警告'},
                        {value: 'loading',label: 'Loading 加载'},
                        {value: 'message',label: 'Message 消息提示'},
                        {value: 'message-box',label: 'MessageBox 弹框'},
                        {value: 'notification',label: 'Notification 通知'}
                    ]},
                    {value: 'navigation',label: 'Navigation',children: [
                        {value: 'menu',label: 'NavMenu 导航菜单'},
                        {value: 'tabs',label: 'Tabs 标签页'},
                        {value: 'breadcrumb',label: 'Breadcrumb 面包屑'},
                        {value: 'dropdown',label: 'Dropdown 下拉菜单'},
                        {value: 'steps',label: 'Steps 步骤条'}
                    ]},
                    {value: 'others',label: 'Others',children: [
                        {value: 'dialog',label: 'Dialog 对话框'},
                        {value: 'tooltip',label: 'Tooltip 文字提示'},
                        {value: 'popover',label: 'Popover 弹出框'},
                        {value: 'card',label: 'Card 卡片'},
                        {value: 'carousel',label: 'Carousel 走马灯'},
                        {value: 'collapse',label: 'Collapse 折叠面板'}
                    ]}
                ]},
                {value: 'ziyuan',label: '资源',children: [
                    {value: 'axure',label: 'Axure Components'},
                    {value: 'sketch',label: 'Sketch Templates'},
                    {value: 'jiaohu',label: '组件交互文档'}
                ]}
            ],
            selectedOptions: [],
            selectedOptions2: []
        }
    },
    methods:{
        handleChange(value) {
            console.log(value);
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
            return {
                title: "自定义数据表格",
                activeName: 'first-ele',
                options: [
                    {value: 'zhinan',label: '指南',children: [
                        {value: 'shejiyuanze',label: '设计原则',children: [
                            {value: 'yizhi',label: '一致'},
                            {value: 'fankui',label: '反馈'},
                            {value: 'xiaolv',label: '效率'},
                            {value: 'kekong',label: '可控'}
                        ]},
                        {value: 'daohang',label: '导航',children: [
                            {value: 'cexiangdaohang',label: '侧向导航'},
                            {value: 'dingbudaohang',label: '顶部导航'}]
                        }
                    ]},
                    {value: 'zujian',label: '组件',children: [
                        {value: 'basic',label: 'Basic',children: [
                            {value: 'layout',label: 'Layout 布局'},
                            {value: 'color',label: 'Color 色彩'},
                            {value: 'typography',label: 'Typography 字体'},
                            {value: 'icon',label: 'Icon 图标'},
                            {value: 'button',label: 'Button 按钮'}
                        ] },
                        {value: 'form',label: 'Form',children: [
                            {value: 'radio',label: 'Radio 单选框'},
                            {value: 'checkbox',label: 'Checkbox 多选框'},
                            {value: 'input',label: 'Input 输入框' },
                            {value: 'input-number',label: 'InputNumber 计数器'},
                            {value: 'select',label: 'Select 选择器'},
                            {value: 'cascader',label: 'Cascader 级联选择器'},
                            {value: 'switch',label: 'Switch 开关'},
                            {value: 'slider',label: 'Slider 滑块'},
                            {value: 'time-picker',label: 'TimePicker 时间选择器'},
                            {value: 'date-picker',label: 'DatePicker 日期选择器'},
                            {value: 'datetime-picker',label: 'DateTimePicker 日期时间选择器'},
                            {value: 'upload',label: 'Upload 上传'},
                            {value: 'rate',label: 'Rate 评分'},
                            {value: 'form',label: 'Form 表单'}
                        ]},
                        {value: 'data',label: 'Data',children: [
                            {value: 'table',label: 'Table 表格'},
                            {value: 'tag',label: 'Tag 标签'},
                            {value: 'progress',label: 'Progress 进度条'},
                            {value: 'tree',label: 'Tree 树形控件'},
                            {value: 'pagination',label: 'Pagination 分页'},
                            {value: 'badge',label: 'Badge 标记'}
                        ]},
                        {value: 'notice',label: 'Notice',children: [
                            {value: 'alert',label: 'Alert 警告'},
                            {value: 'loading',label: 'Loading 加载'},
                            {value: 'message',label: 'Message 消息提示'},
                            {value: 'message-box',label: 'MessageBox 弹框'},
                            {value: 'notification',label: 'Notification 通知'}
                        ]},
                        {value: 'navigation',label: 'Navigation',children: [
                            {value: 'menu',label: 'NavMenu 导航菜单'},
                            {value: 'tabs',label: 'Tabs 标签页'},
                            {value: 'breadcrumb',label: 'Breadcrumb 面包屑'},
                            {value: 'dropdown',label: 'Dropdown 下拉菜单'},
                            {value: 'steps',label: 'Steps 步骤条'}
                        ]},
                        {value: 'others',label: 'Others',children: [
                            {value: 'dialog',label: 'Dialog 对话框'},
                            {value: 'tooltip',label: 'Tooltip 文字提示'},
                            {value: 'popover',label: 'Popover 弹出框'},
                            {value: 'card',label: 'Card 卡片'},
                            {value: 'carousel',label: 'Carousel 走马灯'},
                            {value: 'collapse',label: 'Collapse 折叠面板'}
                        ]}
                    ]},
                    {value: 'ziyuan',label: '资源',children: [
                        {value: 'axure',label: 'Axure Components'},
                        {value: 'sketch',label: 'Sketch Templates'},
                        {value: 'jiaohu',label: '组件交互文档'}
                    ]}
                ],
                selectedOptions: [],
                selectedOptions2: []
            }
        },
        methods:{
            handleChange(value) {
                console.log(value);
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
    .block{margin-bottom: 10px;width: 45%;display: inline-block;}
</style>