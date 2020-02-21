<template>
    <div class="G6-editor-box">
        <div class="editor-title">
            <span class="title-bar">项目内容：</span>
            <span class="close-btn" @click="handleToBack">❌</span>
        </div>
        <el-form class="editor-form" ref="form" :model="form" label-width="80px">
        	<el-form-item label="项目名称">
        		<el-input v-model="form.name" ></el-input>
        	</el-form-item>
        	<el-form-item label="项目类型">
        		<el-select v-model="form.type" placeholder="请选择活动区域">
        			<el-option label="类型一" value="shanghai"></el-option>
        			<el-option label="类型二" value="beijing"></el-option>
        		</el-select>
        	</el-form-item>
        	<el-form-item label="是否启用">
		    	<el-switch v-model="form.isLoading"></el-switch>
		  	</el-form-item>
		  	<el-form-item label="项目描述">
    			<el-input type="textarea" v-model="form.note"></el-input>
  			</el-form-item>
  			<el-form-item>
    			<el-button type="success" @click="onSubmit">保存</el-button>
    			<el-button type="default" @click="onReset">重置</el-button>
  			</el-form-item>
        </el-form>
    </div>
</template>

<script>
import G6 from '@antv/g6';
import bus from './g6_bus';
export default{
    name: 'customTable',
    data(){
        return {
        	form: {
        		name: null,
        		type: null,
        		isLoading: null,
        		note: null
        	}
        }
    },
    methods: {
        // 表单提交
   		onSubmit(){
            // let param = this.$qs.stringify(this.form);
            let param = JSON.stringify(this.form);
   			this.$my.confrirm(this,{
                message: "提交参数为： " + param
            });
   		},
        // 重置按钮的点击
        onReset(){
            Object.keys(this.form).forEach(e => {
                this.form[e] = null;
            });
        },
        // 表单关闭
        handleToBack(){
            this.$emit("toBack", null);
        },
    }
}
</script>

<style scoped>
/*操作头*/
.G6-editor-box>.editor-title{
    width: 100%;
    height: 28px;
    line-height: 28px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fff;
    position: relative;
}
.editor-title>.title-bar{
    width: 100px;
    height: 25px;
    text-align: center;
    display: inline-block;
    font-weight: bold;
    color: #666;
}
.editor-title>.close-btn{
    position: absolute;
    right: 8px;
    font-size: 13px;
    cursor: pointer;
}
/*表单区域*/
.G6-editor-box>.editor-form{
    padding-right: 10px;
}
</style>