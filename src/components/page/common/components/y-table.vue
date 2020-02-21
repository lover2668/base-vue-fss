<!-- 以第二种的请求方式进行请求的发送post2 -->
<template>
   <div>
       <!--全局操作按钮的控制-->
       <div v-if="externalBtns.length > 0" class="global_btns_list">
           <el-button v-for="t in externalBtns" v-if="t.display" @click="t.fn(selectionChanges)" :type="t.type">{{t.name}}</el-button>
       </div>
       <!--存在行点击事件-->
       <template v-if="isRowClickCallback">
           <el-table border :height="height" :data="tableData" :ref="refName" multiple style="width: 100%;height: 100%;" @row-click="callback.rowClick">
               <el-table-column fixed type="index" label="行号"></el-table-column>
               <!--折叠内容-->
               <el-table-column v-if="openConent" type="expand">
                   <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                           <template v-for="t in tableHeader">
                               <el-form-item v-if  :label="t.value"><span>{{t.key}}</span></el-form-item>
                           </template>
                       </el-form>
                   </template>
               </el-table-column>
               <!-- 表格列属性 -->
               <template v-for="item in tableHeader">
                   <el-table-column :show-overflow-tooltip="true" v-if="item.display" :sortable="item.isSort" :prop="item.key" :label="item.value" :fixed="isFixed" :width="item.width">
                       <template slot-scope="scope">
                           <span v-if="item.type == 'Date'">{{ scope.row[item.key] | DateFormat }}</span>
                           <span v-else-if="item.type == 'DateTime'">{{ scope.row[item.key] | DateTimeFormat }}</span>
                           <span v-else>{{scope.row[item.key]}}</span>
                       </template>
                   </el-table-column>
               </template>
           </el-table>
       </template>
       <!--没有行点击的触发-->
       <template v-else>
           <!--开启复选-->
           <el-table v-if="isCheck" border :height="height" :ref="refName" :data="tableData" multiple style="width: 100%;height: 100%;" @selection-change="handlerTableSelection" @select="handleSetSelectionData">
               <el-table-column type="selection" width="40" fixed="left"></el-table-column>
               <el-table-column  fixed="left" type="index" label="行号" width="50"></el-table-column>
               <!--折叠内容-->
               <el-table-column v-if="openConent" type="expand">
                   <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                           <el-form-item v-for="t in tableHeader" :label="t.value"><span>{{t.key}}</span></el-form-item>
                       </el-form>
                   </template>
               </el-table-column>
               <!-- 表格列属性 -->
               <template v-for="item in tableHeader">
                   <el-table-column :show-overflow-tooltip="true" v-if="item.display" :sortable="item.isSort" :prop="item.key" :label="item.value" :fixed="isFixed" :width="item.width">
                       <template slot-scope="scope">
                            <span v-if="item.type == 'Date'">{{ scope.row[item.key] | DateFormat }}</span>
                            <span v-else-if="item.type == 'DateTime'">{{ scope.row[item.key] | DateTimeFormat }}</span>
                            <span v-else-if="item.type == 'Year'">{{ scope.row[item.key] | getYear }}</span>
                            <span v-else>{{scope.row[item.key]}}</span>
                       </template>
                   </el-table-column>
               </template>
               <el-table-column label="操作" v-if="rowBtns.length > 0" :width="colum_width" fixed="right"><!-- :width="colum_width" -->
                   <template slot-scope="scope">
                       <el-link v-for="b in rowBtns" @click="b.fn(scope.$index, scope.row)" :type="b.type" :icon="b.icon" style="margin-right: 10px;">{{b.name}}</el-link>
                   </template>
               </el-table-column>
           </el-table>
           <!--关闭复选-->
           <el-table v-else border :data="tableData" :height="height" :ref="refName" multiple>
               <el-table-column type="index" label="行号" fixed="left" width="50"></el-table-column>
               <!--折叠内容-->
               <el-table-column v-if="openConent" type="expand" fixed="left">
                   <template slot-scope="props">
                       <el-form label-position="left" inline class="demo-table-expand">
                           <el-form-item v-for="t in tableHeader" :label="t.value"><span>{{t.key}}</span></el-form-item>
                       </el-form>
                   </template>
               </el-table-column>
               <!-- 表格列属性 -->
               <template v-for="item in tableHeader">
                   <el-table-column :show-overflow-tooltip="true" v-if="item.display" :sortable="item.isSort" :prop="item.key" :label="item.value" :width="item.width">
                       <template slot-scope="scope">
                           <span v-if="item.type == 'Date'">{{ scope.row[item.key] | DateFormat }}</span>
                           <span v-else-if="item.type == 'DateTime'">{{ scope.row[item.key] | DateTimeFormat }}</span>
                           <span v-else-if="item.type == 'Year'">{{ scope.row[item.key] | getYear }}</span>
                           <span v-else>{{scope.row[item.key]}}</span>
                       </template>
                   </el-table-column>
               </template>
               <el-table-column label="操作" v-if="rowBtns.length > 0" :width="colum_width" fixed="right">
                   <template slot-scope="scope">
                       <el-link v-for="b in rowBtns" @click="b.fn(scope.$index, scope.row)" :type="b.type" :icon="b.icon" style="margin-right: 10px;">{{b.name}}</el-link>
                   </template>
               </el-table-column>
           </el-table>
       </template>
       <!-- 分页区域 -->    
       <div class="customposition" v-if="showPagination">
           <el-pagination background layout="prev, pager, next" @current-change="handlerCurrentChange" :total="pageCount" :page-size="pageSize" :current-page="pageNo"></el-pagination>
           <p class="pageSizeBar">总数：<span class="pageSizeText">{{pageCount}}</span>条</p>
       </div>
   </div>
</template>
<script>
    export default {
        props: ["data", "pagination"],
        data(){
            return {
                e: this,
                url: "",            //数据请求地址
                editType: 0,
                height: null,
                refName: "custom_table",
                colum_width: "",
                isFixed: false,
                isSort: false,      //是否排序的指定
                isCheck: false,     //是否存在checkbox，默认关闭
                isIndex: false,     //记录编号指定
                isRowClickCallback: false,   //是否有行点击回调
                load: false,        //是否刷新的监控
                checkOnly: false,   //标记是check数据只能选择一条
                checkData: {},      //对复选状态切换的数据列表      {key: "AMS_ASSET_ID", data: checkDataList};     key:匹配的键    ，data：匹配的value（Array）
                param: this.data,   //参数列表
                openConent: false,  //标签内容的定义
                pageCount: 0,       //总数
                pageSize: 100,        //每页数量
                pageNo: 0,          //当前页数
                queryParam: {},      //外部检索参数         //外部检索条件在外部触发时需对其进行指定
                tableHeader: [],    //表头定义
                tableData: [],      //表格数据
                selectionChanges: [],//选中的数据
                rowBtns: [],        //局部（行）操作按钮的定义
                externalBtns: [],   //全局（整个表格）操作按钮定义
                checkDataList: [],  //复选取人选择的数据id
                currentChange: null,//分页参数发生改变时触发
                showPagination: this.pagination,    //分页是否显示
                callback: {         //行点击事件的定义
                    rowClick: null,     //当点击事件的定义
                    selection: null     //复选开启后存在的回调事件，需要时可以进行使用      只有当isCheck=true 时，当前方法才可以使用  selection: selectionCallback
                }
            }
        },
        watch: {
            load() {
                if (this.load)  this.handleGetData();
            },
        },
        //初始化参数赋值
        created(){
            //初始化表格基本参数
            this.handleInitTableParamter();
            //初始化操作按钮
            this.handleInitTableBtns();
            //数据请求
            if(this.isArray("data")){
                this.pageCount = this.param.hasOwnProperty("count") ? this.param.count : 0;
                this.pageNo = this.param.hasOwnProperty("pageNo") ? this.param.pageNo : 0;
                this.pageSize = this.param.hasOwnProperty("pageSize") ? this.param.pageSize : 10;
                this.tableData = this.setDataList(this.param.data);
            }else{
                if(this.editType == 0){
                    this.handleGetData({});
                }
            }
        },
        methods: {
            isArray(e){
                return this.param.hasOwnProperty(e) && this.param[e] instanceof Array && this.param[e].length > 0;
            },
            //初始化表格基础参数
            handleInitTableParamter(){
                //设置参数
                this.url = this.param.url;
                this.height = (!!this.param.height && this.param.height != "") ? this.param.height : null;
                this.isSort = this.param.hasOwnProperty("isSort") && !!this.param.isSort ? this.param.isSort : false;
                this.isCheck = this.param.hasOwnProperty("isCheck") ? this.param.isCheck : false;
                this.checkOnly = this.param.hasOwnProperty("checkOnly")?this.param.checkOnly:false;
                this.checkData = this.param.hasOwnProperty("checkData")?this.param.checkData:null;
                if(this.isCheck){
                    if(this.param.hasOwnProperty("selectionCallback") && typeof this.param.selectionCallback == 'function')  this.callback.selection = this.param.selectionCallback;
                }
                this.openConent = this.param.hasOwnProperty("openConent") ? this.param.openConent : false;
                //检索参数设置
                this.queryParam = this.param.hasOwnProperty("queryParam") ? this.param.queryParam : {};
                //表头的设置
                if(this.isArray("header")){
                    this.tableHeader = this.param.header;
                    for(let i in this.tableHeader){
                        if(!this.tableHeader[i].hasOwnProperty("display")) this.tableHeader[i]["display"] = true;
                    }
                }
            },
            //初始化表格按钮
            handleInitTableBtns(){
                //行操作按钮处理，若存在行操作按钮则需要禁用行点击的回调事件
                if(this.isArray("rowBtns")){
                    this.rowBtns = this.param.rowBtns;
                    this.colum_width = this.rowBtns.length * 100 + "px";
                    this.rowBtns.forEach(_ => {
                        if(!_.hasOwnProperty("display"))   _["display"] = true;
                    });
                }else{
                    //数据表格点击的回调方法抛出
                    if(this.param.hasOwnProperty("rowCallback") && typeof this.param.rowCallback == 'function'){
                        this.isRowClickCallback = true;
                        this.callback.rowClick = this.param.rowCallback;
                    }
                }
                //全局操作按钮的过滤
                if(this.isArray("externalBtns")) {
                    this.externalBtns = this.param.externalBtns;
                    this.externalBtns.forEach(_ => {
                        if(!_.hasOwnProperty("display"))  _["display"] = true;
                    });
                }
            },
            //根据分页的参数处理数据
            setDataList(data){
                let resluts = [];
                for(let i in data){
                    if(i >= this.pageSize) break;
                    data[i]["_index"] = parseInt(i)+1;
                    resluts.push(data[i]);
                }
                return resluts;
            },
            //表格数据请求
            handleGetData(){
                let self = this;
                this.$my.post(this, this.url, this.queryParam, function(data){
                    data = JSON.parse(data);
                    if(self.tableHeader.length == 0)    self.tableHeader = data.tableHeader;
                    //表格参数处理
                    self.pageCount = data.count;
                    self.pageNo = data.pageCurrent;
                    self.pageSize = data.pageSize;
                    //根据页内显示条数的配置对数据表格进行设置
                    self.tableData = self.setDataList(data.list);
                    self.load = false;
                    //对列表中的复选数据的状态的切换
                    self.checkTableDataTrue();
                    self.$emit("getTableData",data.list);
                })
            },
            //复选数据
            checkTableDataTrue(){
                this.tableData.forEach(res=>{
                    const checkData = this.checkData;
                    if(!!checkData && checkData.hasOwnProperty("key") && checkData.hasOwnProperty("data")){
                        if((checkData.data).includes(res[checkData.key])){
                            this.$nextTick(_=>{
                                //切换当前数据是否选中
                                this.$refs[this.refName].toggleRowSelection(res,true);
                            });
                        }
                    }
                })
            },
            //分页参数改变时触发
            handlerCurrentChange(e){
                if(this.isArray("data")){   //以定义的方式加载数据
                    this.param.paginationClickEvnent(e,this);
                }else{  //以请求的方式加载数据
                    this.pageNo = e;
                    let url = this.url+"?pageNo="+e+"&pageSize="+this.pageSize;
                    this.queryParam["page"]=e;
                    this.queryParam["rows"]=this.pageSize;
                    this.$emit("currentChange",this);
                    this.handleGetData();
                }
            },
            //监控页面selection参数的改变 - 废弃
            handlerTableSelection(s) {
                //全局操作按钮操作的参数
                this.selectionChanges = s;  
                //若存在复选参数的回调函数则对参数进行返回
                //判断复选参数是不是指定为唯一，false返回整个列表
                if(!this.checkOnly){
                    //自定义选中数据的返回。判断当前返回数据中_checked 是否为开启状态
                    this.handleRegFlag(s);
                    if(this.callback.hasOwnProperty("selection")&&typeof this.param.selectionCallback=='function')  this.callback.selection(s);
                }else{
                    if(s.length > 1)  {
                        this.$refs[this.refName].clearSelection(); 
                        this.$refs[this.refName].toggleRowSelection(s[s.length - 1],true);
                    }
                    this.callback.selection(s[s.length - 1]);
                }
            },
            //当前操作列表中选中的数据的返回
            handleSetSelectionData(selection, row){
                this.$emit("selectionData", {selection:selection, row:row});
            },
            //对selection参数中_checked参数true/false的判断
            handleRegFlag(s){
                if(this.tableData.length > 0){
                    let keys = [];
                    //获取数据所有key
                    Object.keys(this.tableData[0]).forEach(_ => {
                        keys.push(_);
                    });
                    //判断选中数据和源数据是否相同
                    let checkedList;
                    this.tableData.forEach(_ => {
                        checkedList = [];
                        let flg;
                        let checkedList2;
                        s.forEach(res => {
                            checkedList2 = [];
                            keys.forEach(k => {
                                //键值的按段，若有一个不一样则push1，当条对应数据标记位1，否则为0
                                if(_[k] == res[k]) checkedList2.push("true");
                                else if(_[k] != res[k]) checkedList2.push("false");
                            });
                            //判断当前记录是否存在false 若不存在则表明含有相同的参数
                            if(!checkedList2.includes("false")) checkedList.push("true");
                            else checkedList.push("false");
                        });
                        //若checkedList数组只要存在true  则说明selection找到了匹配的数据
                        if(checkedList.includes("true")) _["_checked"] = true;
                        else _["_checked"] = false;
                    });
                    this.$emit("selection", this.tableData);
                }
            }
        }
    }
</script>

<style scoped>
body .el-table th.gutter{display: table-cell!important;}
.customposition{text-align: right;margin: 20px 0;position: relative;}
.pageSizeBar{
    width: 200px;
    position: absolute;
    top: 5px;
    left: 10px;
    text-align: left;
    font-weight: bold;
}
.pageSizeText{font-weight: normal;margin-right: 10px;}
.global_btns_list{margin-bottom: 15px;}
.demo-table-expand>div{display: inline-block;width: 45%;}
.el-form--inline .el-form-item__label{font-weight: bold !important;}
.custom_btns{margin-right: 10px;}
</style>