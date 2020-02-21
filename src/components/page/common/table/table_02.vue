<template>
        <div class="demoModel">
                        <span class="head-title">描述：</span>
                        <p class="title">
                            针对简单表的使用描述:<br/>
                            1、利用import 对组件进行引入<br/>
                            2、在script 中对引入的组件进行定义<br/>
                            3、在需要使用下拉的地方引入定义的标签<br/>
                            参数说明：<br/>
                            1、data：表格总数居列表详见js参数列表<br/>
                            2、pagination：指定分页是否显示<br/>
                            3、针对数据参数分为两种格式：一种为传入请求地址进行内部调用，二位传入数据直接做数据渲染（二优先级高于一）<br/>
                            4、操作按钮的颜色显示参考按钮组的样式定义，指定type类型即可，参数如：defalut（默认），primary（主要按钮）、success（成功按钮）、info（信息按钮）、warning（警告按钮）、danger（危险按钮）
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
                            <y-table :data="tableData" :pagination="showPagination"></y-table>
                        </div>
                        <span class="head-title">代码：</span>
                        <div class="code">
                            <span class="code-msg">html</span>
                            <div class="code-main">
                                &lt;y-table :data="tableData" :pagination="showPagination"&gt;&lt;/y-table&gt;
                            </div>
                            <span class="code-msg">script</span>
                            <div class="code-main">
<pre>
export default{
    data(){
        return {
            showPagination: true,   //分页显示与否默认显示
            tableData2: {
                url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                isSort: true,   //是否支持排序
                isCheck: true,  //是否存在checkbox
                pageSize: 10,   //每页显示记录条数
                checkData: {    //初始化指定选中的行 - 当前参数仅在ajax请求时有用
                    key: "",    //相同参数计算的key值（默认为表的主键）
                    data: []    //用于做对比的参数
                },
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col5", value: "邮编",display: false}
                ],
                rowBtns: [      //局部按钮
                    {name: "编辑", fn: this.handleEdit,type: "default"},
                    {name: "删除", fn: this.handleDelete, type:"danger"}
                ],
                externalBtns: [     //全局按钮
                    {name: "全部删除", fn: this.handleDeleteAll, type: "primary"}
                ]
            }
        }
    },
    methods: {
        //单行编辑按钮的触发，index：当前行下标以0开始，row：当前行的数据
        handleEdit(index, row) {
            console.log(row);
        },
        //单行删除按钮的触发，index：当前行的下标以0开始，row：当前行的数据
        handleDelete(index, row) {
            console.log(row);
        },
        //全部删除按钮事件定义，datas：返回复选的所有行的数据
        handleDeleteAll(datas){
            console.log(datas);
        }
    }
}
</pre>
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
                // url: this.$my.path2+"/zcgl/xc",       //数据请求地址
                isSort: true,   //是否支持排序
                isCheck: true,  //是否存在checkbox
                header: [       //表头定义
                    {key: "col1",value: "日期"},
                    {key: "col2",value: "姓名"},
                    {key: "col3", value: "省份"},
                    {key: "col4",value: "时区"},
                    {key: "col5",value: "地址"},
                    {key: "col6", value: "邮编",display: false}
                ],
                data: [     //表格数据
                    {col1: 111,col2: 112,col3: 113,col4:114, col5: 115, col6: 116},
                    {col1: 121,col2: 122,col3: 123,col4:124, col5: 125, col6: 126},
                    {col1: 131,col2: 132,col3: 133,col4:134, col5: 135, col6: 136},
                    {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146}
                ],
                rowBtns: [      //局部按钮
                    {name: "编辑", fn: this.handleEdit,type: "default"},
                    {name: "删除", fn: this.handleDelete, type:"danger"}
                ],
                externalBtns: [     //全局按钮
                    {name: "全部删除", fn: this.handleDeleteAll, type: "primary"}
                ]
            },
        }
    },
    methods: {
        handlerClickRows(row, column, event){
            this.$message("第"+row._index.toString()+"行，行数据为："+row)
        },
        //单行编辑按钮的触发，index：当前行下表以0开始，row：当前行的数据
        handleEdit(index, row) {
            console.log(row);
        },
        //单行删除按钮的触发，index：当前行的下表以0开始，row：当前行的数据
        handleDelete(index, row) {
            console.log(row);
        },
        //全部删除按钮事件定义，datas：返回复选的所有行的数据
        handleDeleteAll(datas){
            console.log(datas);
        },
        //自定义分页事件
        handlerClickPagination(e,obj){
            obj.pageNo = e;
            obj.tableData = [{col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},
                {col1: 141,col2: 142,col3: 143,col4:144, col5: 145, col6: 146},];
        }
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