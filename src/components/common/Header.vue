<template>
    <div class="header">
        <!-- 折叠按钮
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div> -->
        <!-- 文本描述 -->
        <div class="logo">电力营销管理系统</div>
        <!-- 一级菜单区域 -->
        <div>
            <ul class="top-menu">
                <li v-for="(item, index) in menuData" :key="index">
                    <a href="javascript: void(0)" v-if="index == showItem" class="top-menu-item top-active" @click="(e)=>handleCheckTopMenu(e,item)">{{item.title}}</a>
                    <a href="javascript: void(0)" v-else class="top-menu-item" @click="(e)=>handleCheckTopMenu(e,item)">{{item.title}}</a>
                </li>
            </ul>
        </div>

        <!-- 右侧用户信息内容区域 -->
        <div class="header-right">
            <div class="header-user-con" style="position: relative;width: 130px;">
                <!-- <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div> -->
                <div class="user-avator" style="display: inline-block;position: absolute; top: 5px;"><img src="../../assets/img/img.jpg"></div>
                <el-dropdown class="user-name" trigger="click" @command="handleCommand" style="display: inline-block;position: absolute; left: 50px;top: 18px;">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="#" target="_blank">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: 'linxin',
                message: 2,
                //新菜单数据定义
                menuData: [],
                //默认的选中参数
                showItem: 1
            }
        },
        created(){
            let self = this;
            this.$my.getSource(this, this.$my.menu_path).then(res => {
                if(res.status == 200){
                    let menuData = [];
                    res.data.items.forEach(_ => {
                        if(_.hasOwnProperty('show') && _.show)  self.menuData.push(_);
                    });
                }
            });
        },
        computed:{
            username(){
                let username = localStorage.getItem('user_name');
                return username ? username : this.name;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    window.localStorage.clear();
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                // this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
            //顶部菜单的点击事件
            handleCheckTopMenu(e, data){
                $(".top-menu-item").removeClass("top-active");
                $(e.target).addClass("top-active");
                bus.$emit("menuItem", data);
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 22px;
    color: #fff;
    background: #163c6d !important;
}
.collapse-btn{
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 50px;
}
.header .logo{
    float: left;
    width:190px;
    line-height: 50px;
    padding-left: 10px;
    /* background: #0D2E5D; */
}
.header-right{
    float: right;
    padding-right: 50px;
}
.header-user-con{
    display: flex;
    height: 50px;
    align-items: center;
}
.btn-fullscreen{
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell, .btn-fullscreen{
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge{
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell{
    color: #fff;
}
.user-name{
    /* margin-left: 10px; */
}
.user-avator{
    /* margin-left: 20px; */
}
.user-avator img{
    display: inline-block;
    width:40px;
    height:40px;
    border-radius: 50%;
}
.el-dropdown-link{
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item{
    text-align: center;
}

/* 一级菜单内容区域添加 */
.top-menu{
    width: calc(100% - 520px);
    position: absolute;
    left: 210px;
    height: 100%;
}
.top-menu:after{
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
}
.top-menu>li{
    float: left;
    height: 100%;
    line-height: 100%;
}
.top-menu>li>a{
    display: inline-block;
    height: 48px;
    line-height: 48px;
    color: #fff;
    font-size: 18px;
    width: 95px;
    text-align: center;
}
.top-menu>li>a:hover{
    background-color: #2E5893;
    border-bottom: 2px solid #54BDED;
}

/* 一级菜单选中的控制 */
.top-active{
    background-color: #2E5893;
    border-bottom: 2px solid #54BDED; 
}
</style>
