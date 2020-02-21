<template>
    <div style="height: 100%;">
        注意：<br/>
        采集点方案根据客户类型不同控制是否显示：<el-switch v-model="isShow.one" active-color="#13ce66" inactive-color="#ff4949"></el-switch><br/>
        管理对象是否为考核关口的控制(控制计量点是否显示)：<el-switch v-model="isShow.two" active-color="#13ce66" inactive-color="#ff4949"></el-switch><br/>
        <!-- 电价方案区域 -->
        <el-card class="box-card" shadow="never" style="margin-bottom: 5px">
            <div slot="header" class="clearfix">
                <span>电价方案</span>
            </div>
            <el-table :data="tableData.fromOne" border style="width: 100%" highlight-current-row :header-cell-style="{background:'#d8d8d8',color:'#606266'}">
                <el-table-column prop="data1" label="售电点标识" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data2" label="售电点名称" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data3" label="电价方案标识" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data4" label="执行电价" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data5" label="电源数目" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data6" label="类型" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data7" label="无功补偿" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data8" label="有功自备电源" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data9" label="变更说明" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
        </el-card>
        <!-- 采集点信息 -->
        <el-card class="box-card" shadow="never" v-if="isShow.one == true" style="margin-bottom: 5px">
            <div slot="header" class="clearfix">
                <span>采集点方案</span>
                <el-button style="float: right; padding: 3px 0;margin-left: 10px;" type="text" @click="handleCloseCjData">[ 删除 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text" @click="handleEditCjDialog">[ 修改 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text" @click="handleOpoenCjDialog">[ 新增 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text">[ 引用 ]</el-button>
            </div>
            <el-table :data="tableData.fromTwo" border style="width: 100%" @row-click="handleTableFromTwoClick" highlight-current-row :header-cell-style="{background:'#d8d8d8',color:'#606266'}">
                <el-table-column prop="data1" label="采集点编号" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data2" label="采集点名称" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data3" label="采集点类型" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data4" label="采集点用途" :show-overflow-tooltip="true"></el-table-column>
                <template v-if="isShow.two">
                    <el-table-column prop="data5_1" label="上游网架编号" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="data5_2" label="上游网架类型" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="data5_3" label="下游网架编号" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="data5_4" label="下游网架类型" :show-overflow-tooltip="true"></el-table-column>
                </template>
                <el-table-column prop="data5" label="是否特殊表（中顺表）" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data6" label="变更说明" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
        </el-card>
        <!-- 采集点编辑内容 -->
        <el-dialog title="计量方案-采集点信息" :visible.sync="dialogVisible.one" width="30%" :before-close="handleClose" :close-on-click-modal="false">
            <el-form ref="cjForm" :model="form.cjForm" :rules="form.cjRules" label-width="120px">
                <el-form-item label="采集点类型" prop="data3">
                    <el-select v-model="form.cjForm.data3" placeholder="请选择">
                        <el-option label="用电客户采集点" value="用电客户采集点"></el-option>
                        <el-option label="关口采集点" value="关口采集点"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="采集点用途" prop="data4">
                    <el-select v-model="form.cjForm.data4" placeholder="请选择">
                        <el-option label="结算" value="结算"></el-option>
                        <el-option label="考核" value="考核"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否特殊表" prop="data5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <template v-if="isShow.two">
                    <el-form-item label="上游网架类型" prop="data5_1">
                        <el-select v-model="form.cjForm.data5" placeholder="请选择">
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="上游网架编号" prop="data5_2">
                        <el-select v-model="form.cjForm.data5" placeholder="请选择">
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="下游网架类型" prop="data5_3">
                        <el-select v-model="form.cjForm.data5" placeholder="请选择">
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="下游网架编号" prop="data5_4">
                        <el-select v-model="form.cjForm.data5" placeholder="请选择">
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联络类型" prop="data5_5">
                        <el-select v-model="form.cjForm.data5" placeholder="请选择">
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>
                    </el-form-item>
                </template>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible.one = false">取 消</el-button>
                <el-button type="primary" @click="cjdSubmitForm('cjForm')">添 加</el-button>
            </span>
        </el-dialog>
        <!-- 计量点信息 -->
        <el-card class="box-card" shadow="never" v-if="!isShow.two">
            <div slot="header" class="clearfix">
                <span>计量点方案</span>
                <el-button style="float: right; padding: 3px 0;margin-left: 10px;" type="text" @click="handleDelJiLiangData">[ 删除 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text">[ 修改 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text" @click="handleOpenJldDialog">[ 新增 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text">[ 增下级 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text">[ 增转供 ]</el-button>
                <el-button style="float: right; padding: 3px 0" type="text">[ 特殊关系维护 ]</el-button>
            </div>
            <el-table :data="tableData.fromThree" border style="width: 100%" highlight-current-row @row-click="handleTableFromThreeClick" :header-cell-style="{background:'#d8d8d8',color:'#606266'}">
                <el-table-column prop="data1" label="采集点编号" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data2" label="计量点编号" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data3" label="计量点名称" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data4" label="级数" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data5" label="计算方式" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data6" label="电量计算方式" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data7" label="执行电价" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="data8" label="变更说明" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
        </el-card>
        <!-- 计量点编辑内容 -->
        <el-dialog title="计量方案-计量点信息" :visible.sync="dialogVisible.two" width="70%" :before-close="handleClose" :close-on-click-modal="false">
            <el-form ref="jldForm" :model="form.jldForm" :rules="form.jldRules" label-width="120px">
                <el-form-item label="计量点编号" prop="data3">
                    <el-select v-model="form.cjForm.data3" placeholder="请选择">
                        <el-option label="用电客户采集点" value="用电客户采集点"></el-option>
                        <el-option label="关口采集点" value="关口采集点"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="计量点名称" prop="data4">
                    <el-select v-model="form.cjForm.data4" placeholder="请选择">
                        <el-option label="结算" value="结算"></el-option>
                        <el-option label="考核" value="考核"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="采集方向" prop="data5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="计量方式" prop="data5_1">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="线路" prop="data5_2">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="台区" prop="data5_3">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电量计算方式" prop="data5_4">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主用途类型" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="变损分摊协议值" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="定量定比值" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="定比扣减标准" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="执行顺序" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="执行电价" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="成本分摊单位" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="变损分摊标志" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="变损计费标志" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="线损分摊标志" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="线损计费标志" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="计量点地址" prop="data5_5">
                    <el-select v-model="form.cjForm.data5" placeholder="请选择">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible.two = false">取 消</el-button>
                <el-button type="primary" @click="jldSubmitForm('cjForm')">添 加</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //tab的显示类型
                tabPosition: "left",
                //表格数据的定义
                tableData: {
                    fromOne: [
                        {data1: 123456781, data2: "煤炭1有限公司售电点", data3: "317178520", data4: "大宗工业（14210000）", 
                        data5: "柱式变", data6: "单电源", data7: "100", data8: "无", data9: "新增"},
                        {data1: 123456782, data2: "煤炭2有限公司售电点", data3: "317178520", data4: "大宗工业（14210000）", 
                        data5: "柱式变", data6: "单电源", data7: "100", data8: "无", data9: "新增"},
                        {data1: 123456783, data2: "煤炭3有限公司售电点", data3: "317178520", data4: "大宗工业（14210000）", 
                        data5: "柱式变", data6: "单电源", data7: "100", data8: "无", data9: "新增"}
                    ],
                    fromTwo: [
                        {data1: 123456789, data2: "地方采集点", data3: "用电客户采集点", data4: "结算", data5: "", data6: "新增",
                            data5_1: null, data5_2: null, data5_3: null, data5_4: null}
                    ],
                    fromThree: [
                        {data1: 123456789, data2: "987654321", data3: "测试计量点", data4: "1", data5: "高供高计", data6: "实抄（装表计量）", 
                         data7: "大宗工业（14210001）", data8: "新增"}
                    ]
                },
                //控制表格显示
                isShow: {
                   one: true,
                   two: false
                },
                //弹层显示与否的控制
                dialogVisible: {
                   one: false,
                   two: false
                },
                //表单
                form: {
                    formType: 0,        //0 保存，1、修改
                    cjRules: {
                        data3: [
                            { required: true, message: '请选择采集点用途', trigger: 'change' },
                        ],
                        data4: [
                            { required: true, message: '请选择采集点用途', trigger: 'change' },
                        ],
                        data5_1: [
                            { required: true, message: '请选择上游网架类型', trigger: 'change' },
                        ],
                        data5_2: [
                            { required: true, message: '请选择上游网架编号', trigger: 'change' },
                        ],
                        data5_3: [
                            { required: true, message: '请选择下游网架类型', trigger: 'change' },
                        ],
                        data5_4: [
                            { required: true, message: '请选择下游网架编号', trigger: 'change' },
                        ]
                    },
                    cjForm: {data3: null, data4: null, data5: null, data5_1: null, data5_2: null, data5_3: null, data5_4: null, data5_5: null},
                    jldRules: {

                    },
                    jldForm: {}
                },
                //删除元素登记
                editTable: {
                    fromTwo: null,
                    fromThree: null
                }
            }
        },
        methods:{
            //采集点弹层关闭方法的控制
            handleClose(){
                this.$confirm('确认关闭？').then(_ => {
                    this.dialogVisible.one = false;
                    this.dialogVisible.two = false;
                    done();
                }).catch(_ => {});
            },
            //采集点弹窗打开的控制
            handleOpoenCjDialog(){
                this.form.formType = 0;
                //判断是否为考核关口，存在默认值
                if(this.isShow.two){
                    this.form.cjForm.data3 = "关口采集点";
                    this.form.cjForm.data4 = "考核";
                }
                this.dialogVisible.one = true;
            },
            //采集点表单提交的验证
            cjdSubmitForm(formName) {
                this.$refs["cjForm"].validate((valid) => {
                if (valid) {
                    let _index = this.tableData.fromTwo[this.tableData.fromTwo.length - 1].data1;
                    this.tableData.fromTwo.push({
                        data1: ++_index, 
                        data2: null, 
                        data3: this.form.cjForm["data3"], 
                        data4: this.form.cjForm["data4"], 
                        data5: this.form.cjForm["data5"] == null ? "" : this.form.cjForm["data5"], 
                        data6: "新增",
                        data5_1: this.form.cjForm["data5_1"],
                        data5_2: this.form.cjForm["data5_2"],
                        data5_3: this.form.cjForm["data5_3"],
                        data5_4: this.form.cjForm["data5_4"]
                    });
                    for(let i in this.form.cjForm){
                        this.form.cjForm[i] = null;
                    }
                    this.$my.successMsg(this, "保存成功！");
                    this.dialogVisible.one = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            //采集点表格行点击事件
            handleTableFromTwoClick(row, column, event){
                this.editTable.fromTwo = row;
            },
            //采集点编辑事件的添加,数据修改
            handleEditCjDialog(){
                this.form.formType = 1;
                let self = this;
                this.editTable.fromTwo == null ? function(){
                    self.$my.confrirm(self, {message: "请先选择采集点数据！"})
                }() : function(){
                    self.form.cjForm.data3 = self.editTable.fromTwo.data3;
                    self.form.cjForm.data4 = self.editTable.fromTwo.data4;
                    self.form.cjForm.data5 = self.editTable.fromTwo.data5;
                    self.dialogVisible.one = true;
                }(); 
            },
            //采集点数据删除事件
            handleCloseCjData(){
                let self = this;
                this.editTable.fromTwo == null ? function(){
                    self.$my.confrirm(self, {message: "请先选择采集点数据！"})
                }() : function(){
                    let newData = [];
                    self.$confirm('是否真的删除当前采集点信息？').then(_ => {
                        self.tableData.fromTwo.forEach(_ => {
                            if(_.data1 != self.editTable.fromTwo.data1) newData.push(_);
                        })
                        self.tableData.fromTwo = newData;
                        self.editTable.fromTwo = null;
                        done();
                    }).catch(_ => {});
                }();  
            },
            //计量表格点击事件触发
            handleTableFromThreeClick(row, column, event){
                this.editTable.fromThree = row;
            },
            //计量点删除事件的触发
            handleDelJiLiangData(){
               let self = this;
               this.editTable.fromThree == null ? function(){
                   //参数不存在进行提示
                   self.$my.confrirm(self, {message: "请先选择计量点数据！"})
               }() : function(){
                    //参数存在询问是否需要真的删除，若为true则发送请求删除数据
                    let newData = [];
                    self.$confirm('是否真的删除当前采集点信息？').then(_ => {
                        self.tableData.fromThree.forEach(_ => {
                            if(_.data1 != self.editTable.fromThree.data1) newData.push(_);
                        })
                        self.tableData.fromThree = newData;
                        self.editTable.fromThree = null;
                        done();
                    }).catch(_ => {});
               }();
            },
            //计量点表单的打开
            handleOpenJldDialog(){
                this.dialogVisible.two = true;
            },
            //计量点表单的保存
            jldSubmitForm(){
                this.dialogVisible.two = false;
            }
        }
    }
</script>
<style scoped>
    
</style>
