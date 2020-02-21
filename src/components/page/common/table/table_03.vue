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
                        </p>
                        <span class="head-title">样例：</span>
                        <div class="ele">
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
            showPagination: true,   //分页显示与否默认显示
            tableData: {
                openConent: true,
                header: [
                    {key: "id",value: "商品id",isShow: true},
                    {key: "name",value: "名称",isShow: true},
                    {key: "category",value: "描述",isShow: false},
                    {key: "desc",value: "产地",isShow: false},
                    {key: "address", value: "地址",isShow: true},
                    {key: "shop",value: "店名",isShow: true},
                    {key: "shopId",value: "商品编号",isShow: false},
                ],
                data: [
                    {id: '12987122',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987123',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987125',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987126',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }
                ]
            }
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
                openConent: true,
                header: [
                    {key: "id",value: "商品id",isShow: true},
                    {key: "name",value: "名称",isShow: true},
                    {key: "category",value: "描述",isShow: false},
                    {key: "desc",value: "产地",isShow: false},
                    {key: "address", value: "地址",isShow: true},
                    {key: "shop",value: "店名",isShow: true},
                    {key: "shopId",value: "商品编号",isShow: false},
                ],
                data: [
                    {id: '12987122',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987123',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987125',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }, {
                        id: '12987126',name: '好滋好味鸡蛋仔',category: '江浙小吃、小吃零食',desc: '荷兰优质淡奶，奶香浓而不腻',
                        address: '上海市普陀区真北路',shop: '王小虎夫妻店',shopId: '10333'
                    }
                ]
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