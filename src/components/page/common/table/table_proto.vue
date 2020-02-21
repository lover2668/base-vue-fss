<template>
        <div class="demoModel">
            <span class="head-title">详细参数描述</span>
            <p class="title">
                针对自定义表格的参数进行详细的描述:
                1、data：标签属性，定义表格的表头、数据、样式等信息，详情如下data表格参数描述
                2、pagination：分页的指定，用于分页的开启和关闭，参数不给定默认分页不现实，参数 true / false
            </p>
            <span class="head-title">data参数描述：</span>
            <div class="ele">
                <y-table :data="tableData"></y-table>
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
                pageSize: 100,
                header: [
                    {key: "properties",value: "属性"},
                    {key: "type", value: "类型"},
                    {key: "paramter",value: "例子"},
                    {key: "description",value: "说明"},
                ],
                data: [
                    {properties: "header",type: "[]", paramter: "[{key: 'name', value: '姓名' },{key: 'age', value: '年龄'} ...]",description: "对应表格的表头的定义,分为两种形式，一种为自定义参数，即在参数列表中" +
                            "自己定义header 的内容，若通过后台传递了header的参数则可以不进行定义（服务端传参时数据格式必须为： { message: { count: 20, list: [], " +
                            "pageCurrent: 1, pageSize: 10 ,tableHeader: []}, status: 0 }）" },
                    {properties: "data", type: "[]", paramter: "[{name: 'zhangsan', age: 11 },{name: 'lisi', age: 12},....]", description: "表格数据，表格渲染后显示的内容，若同url 参数一起出现则，以data属性为准，不进行数据请求的操作"},
                    {properties: "rowCallback", type: "function", paramter: "this.handlerRowClick", description: "表格行的点击事件，当定义当前属性时，给表格每行绑定click事件，" +
                            "this.handlerRowClick为当前上下环境中methods中定义的方法，但行点击的事件仅仅适用与简单的表格，若存在行内按钮组（rowBtns）则当前点击事件失效。"},
                    {properties: "paginationClickEvnent", type: "function", paramter: "this.paginationClickEvnent", description: "分页的点击事件的回调，仅仅适用与自定义data数据时，打开分页时针对分页的操作，" +
                            "若不指定data 参数而是通过url的方式进行请求数据，则当前参数可以不使用，paginationClickEvnent在methods中进行定义"},
                    {properties: "url", type: "string", paramter: "http://localhost8080/", description: "当前数据的请求路径的指定，若使用当前内容时则不能对data属性进行定义，否则当前属性无效。" +
                            " 需注意：请求的参数格式必须为如下：{ message: { count: 20, list: [], pageCurrent: 1, pageSize: 10 }, status: 0 }）"},
                    {properties: "pageNo", type: "number", paramter: "1", description: "当前页标，若以指定url请求则不需设置"},
                    {properties: "count", type: "number", paramter: "100", description: "数据总长度，若以指定url格式渲染则不需设置"},
                    {properties: "pageSize", type: "number", paramter: "10", description: "页长参数，若以指定url格式渲染则不需要设置"},
                    {properties: "isSort", type: "boolean", paramter: "true / false", description: "是否开启排序功能"},
                    {properties: "isCheck", type: "boolean", paramter: "true / false", description: "是否启用复选功能"},
                    {properties: "rowBtns", type: "[]", paramter: "[" +
                            "                    {name: '编辑‘, fn: this.handleEdit,type: 'default'}," +
                            "                    {name: '删除', fn: this.handleDelete, type:'danger'}" +
                            "                ]", description: "表格行操作按钮，若指定当前参数则，rowCallback 属性失效 ( 暂时未处理事件冒泡 )"},
                    {properties: "externalBtns", type: "[]", paramter: "10", description: "表格全局操作按钮，若指定当前参数，则默认会打开isCheck 属性"},
                    {properties: "openConent", type: "boolean", paramter: "true/false", description: "是否开启表格行折叠功能"},
                ]
            }
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