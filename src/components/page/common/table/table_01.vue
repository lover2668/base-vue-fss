<template>
        <div class="text item">
                <!-- ********************************简单数据表格***************************** -->
                    <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            针对简单表的使用描述:<br/>
                            1、利用import 对组件进行引入<br/>
                            2、在&lt;script&gt;中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele" style="padding-left: 30px;">
                            <y-table :data="tableData"></y-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-table :data="tableData"&gt;&lt;/y-table&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            tableData: {
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col6", value: "邮编",display: false}      //display: 控制当前列是否显示
                ],
                data: [     //表格数据
                    {col1: 111,col2: 112,col3: 113,col4:114, col5: 115, col6: 116},
                    {col1: 121,col2: 122,col3: 123,col4:124, col5: 125, col6: 126},
                    {col1: 131,col2: 132,col3: 133,col4:134, col5: 135, col6: 136},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146}
                ],
                callback: {     //回调函数定义
                    rowClick: this.handlerClickRows
                }
            },
        }
    },
    methods: {
        //表格点击回调方法的定义
        handlerClickRows(row, column, event){
            this.$message(column.toString())
        }
    }
}
</pre>
                            </div>
                        </div>
                    </div>
        </div>
</template>

<script>
export default{
    data(){
        return {
            title: "自定义数据表格",
            activeName: 'first-ele',
            showPagination: true,   //分页显示与否默认显示
            tableData: {
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col6", value: "邮编",display: false}
                ],
                data: [
                    {col1: 111,col2: 112,col3: 113,col4:114, col5: 115, col6: 116},
                    {col1: 121,col2: 122,col3: 123,col4:124, col5: 125, col6: 126},
                    {col1: 131,col2: 132,col3: 133,col4:134, col5: 135, col6: 136},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146}
                ],
                rowCallback: this.handlerClickRows
            },
        }
    },
    methods: {
        handlerClickRows(row, column, event){
            this.$message("第"+row._index.toString()+"行，行数据为："+row)
        },
    }
}
</script>

<style scoped>
.text {font-size: 14px;}
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