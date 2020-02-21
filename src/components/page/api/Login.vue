<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login-tips">Tips : 欢迎您的登陆。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                grant_type: "password",
                client_id: "app",
                client_secret: "app",
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            console.log(window.localStorage.getItem("user_token"));
        },
        methods: {
            //登陆方法
            submitForm(formName) {
                let self = this;
                let path=this.$my.path_login+"/oauth/token?grant_type="+this.grant_type+"&username="+this.ruleForm.username
                    +"&password="+this.ruleForm.password+"&client_id="+this.client_id+"&client_secret="+this.client_secret;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('user_name',"zhangsan");
                        localStorage.setItem('user_token',"123");
                        localStorage.setItem("userinfo",{});
                		this.$router.push("/");
                        /*
                       this.$axios.post(path).then( res =>{
                            let _data = res.data;
                            if(_data.status == 0){
                                localStorage.setItem('user_name',self.ruleForm.username);
                                localStorage.setItem('user_token',_data.access_token);
                                self.setDataMessage(_data.access_token);
                            }else{
                                this.$message(_data.message);
                            }
                        }).catch(err=>{
                            if(!!err.response)  this.$message(err.response.data.message);
                            else this.$message("服务出现错误："+err.toString());
                        });
                        */
                    } else {
                        this.$message("验证失败，输入格式错误！。");
                        return false;
                    }
                });
            },
            //用户信息存储
            setDataMessage(token){
                this.$axios.post(this.$my.path_login+"/user?access_token="+token).then(res=>{
                    localStorage.setItem("userinfo",JSON.stringify(res.data));
                    this.$router.push("/");
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../../assets/img/login-bg.jpg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
