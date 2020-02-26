<template>
    <!-- 一级菜单 -->
    <div class="sidebar">
        <ul class="menu-list">
            <!-- 一级菜单列表 -->
            <li class="list-item-li" v-for="(item, index) in menuList" :key="index">
                <!-- <template v-if="item.hasOwnProperty('show') && item.show">
                    <a v-if="index == 0" href="javascript: void(0)" :class="{'menu-list-item': true, 'is-active': true} " 
                        @click="(e)=>handleClickItem(e,item)">
                        <i :class="'menu-item-icon '+ item.icon"></i>
                        <span class="menu-item-content">{{item.title}}</span>
                        <span class="menu-item-bar el-icon-arrow-down" v-if="item.hasOwnProperty('subs')"></span>
                    </a>
                    <a v-else href="javascript: void(0)" class="menu-list-item" @click="(e)=>handleClickItem(e,item)">
                        <i :class="'menu-item-icon '+ item.icon"></i>
                        <span class="menu-item-content">{{item.title}}</span>
                        <span class="menu-item-bar el-icon-arrow-down" v-if="item.hasOwnProperty('subs')"></span>
                    </a> 
                    <ul class="child-menu-list" data-show="false" v-if="item.hasOwnProperty('subs')" style="display: none;">
                        <li v-for="(i,num) in menuList[index].subs" :key="num" style="position: relative;" class="child-menu-list-item">
                            <a href="javascript: void(0)" v-if="i.hasOwnProperty('subs')" @click="(e)=>handleChildItemClick(i,num,e)">
                                <i class="menu-bar"></i>{{i.title}}
                                <i class="menu-bar-right el-icon-arrow-right"></i>
                            </a>
                            <a href="javascript: void(0)" v-else @click="(e)=>handleChildItemClick(i,num,e)"><i class="menu-bar" ></i>{{i.title}}</a>
                        </li>
                    </ul>
                </template> -->
                <a href="javascript: void(0)" class="menu-list-item" @click="(e)=>handleClickItem(e,item)">
                    <i :class="'menu-item-icon '+ item.icon"></i>
                    <span class="menu-item-content">{{item.title}}</span>
                    <span class="menu-item-bar el-icon-arrow-down" v-if="item.hasOwnProperty('subs')"></span>
                </a>
                <ul class="child-menu-list" data-show="false" v-if="item.hasOwnProperty('subs')" style="display: none;">
                    <li v-for="(i,num) in menuList[index].subs" :key="num" style="position: relative;" class="child-menu-list-item">
                        <a href="javascript: void(0)" v-if="i.hasOwnProperty('subs')" @mouseover="(e)=>handleOpenCHildMenuList(i,e)" @mouseleave="(e)=>handleCloseChildMenuList(e)">
                            <i class="menu-bar"></i>{{i.title}}
                            <i class="menu-bar-right el-icon-arrow-right"></i>
                        </a>
                        <a href="javascript: void(0)" v-else @click="(e)=>handleChildItemClick(i,num,e)"><i class="menu-bar" ></i>{{i.title}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                //控制菜单是否显示
                isDisplayed: false,
                collapse: false,
                items: [],
                defaultProps: {
                    children: 'subs',
                    label: 'title'
                },
                menuList: [],
                //菜单三四级显示的控制
                showDrawer: false,
                menuIndex: "",  //当前触发的二级菜单
            }
        },
        created(){
            //全部菜单数据的定义
            // this.$InitMenu("menuList");
            //初始化默认显示档案管理下内容,
            // bus.$on("isShowDrawer", (e)=>{
            //     this.isShowDrawer = e;
            // });
            // //子菜单点击的触发
            // bus.$on('upShowDrawer', (e) => {
            //     this.isShowDrawer = e;
            // });
            //初始化默认显示的菜单
            this.handleDefaultMenuList();
            //二级菜单数据的过滤
            bus.$on('menuItem', res => {
                if(res.hasOwnProperty("subs"))  this.menuList = res.subs;
            });
            //选中菜单的样式去除
            bus.$on('closeDropBox', () => {

            });
        },
        methods: {
            //默认显示菜单的控制
            handleDefaultMenuList(){
                let self = this;
                this.$my.getSource(this, this.$my.menu_path).then(res => {
                    if(res.status == 200){
                        let data = res.data.items;
                        self.menuList = data[1].subs;
                    }
                });
            },
            //菜单离开后
            handleCloseChildMenuList(e){
                let top = $(e.target).offset().top;
                let bottom = $(e.target).offset().top + $(e.target).height();
                if(e.pageY <= top || e.pageY >= bottom) bus.$emit("hideChildMenu",null);
            },
            //鼠标滑过时需处理的事件
            handleOpenCHildMenuList(data, ele){
                let document = $(ele.target).parents("li")[0];
                bus.$emit("showChildMenu", {data: data, el: document});
            },
            //一级菜单元素的点击事件
            handleClickItem(e, data){
                //子菜单是否隐藏的控制
                let doc = e.target;
                let _child = $(doc).parents("li").find("ul.child-menu-list");
                if(_child.length > 0){
                    //存在子菜单
                    if(_child.attr("data-show") == "false"){
                        //设置为显示时
                        _child.attr("data-show","true");
                        _child.show(100);
                    }else{
                        //设置为隐藏时
                        _child.attr("data-show","false");
                        _child.hide(100);
                    }
                }else{
                    //不存在子菜单
                    bus.$emit("upShowDrawer", null);
                    return this.$router.push("/"+data.index);
                };
            },
            //二级菜单点击事件的触发
            handleChildItemClick(data, index, doc){
                let self = this;
                //判断子菜单是否存在，若存在子菜单则进行子菜单的显示，若不存在则直接进行地址的跳转
                data.hasOwnProperty("subs") ? function(){
                    //若存在子元素则对子元素进行切换的控制
                    if(self.menuIndex == "" || data.index != self.menuIndex){
                        bus.$emit("isShowDrawer", true);
                        self.showDrawer = true;
                        //选择点击后元素样式的调整
                        self.updateMenuItemStyle(doc);
                    }else{
                        bus.$emit("isShowDrawer", !self.showDrawer);
                        self.showDrawer = !self.showDrawer;
                        //选择点击后元素样式的调整
                        if(self.showDrawer) self.updateMenuItemStyle(doc);
                        else{
                            $(doc.target).parents("li.child-menu-list-item").css("background-color", "#fff",);
                            $("li.child-menu-list-item>a").css("color", "#333");
                        } 
                    }   
                    self.menuIndex = data.index;
                    bus.$emit("drawerData", data);
                }() : function(){
                    bus.$emit("upShowDrawer", null);
                    self.$router.push(data.index);
                }();
            },
            //子菜单显示样式切换
            updateMenuItemStyle(e){
                let child_item = $(e.target).parents("li.child-menu-list-item");
                //回复当前标签默认样式
                $("li.child-menu-list-item").css("background-color", "#fff");
                $("li.child-menu-list-item>a").css("color", "#333");
                //选择点击后元素样式的调整
                child_item.css("background-color", "#ddd");
                child_item.children("a").css("color", "#487CC1");
            }
        }
    }
</script>

<style scoped>
.is-active{background: #fff !important;border-right: 4px solid #487CC1;}
.is-active .menu-item-icon,.is-active .menu-item-content,.is-active .menu-item-bar{color: #487CC1 !important}
.is-active .child-menu-list-item{border-right: 5px solid #487CC1}
.sidebar{
    position: absolute;
    left: 0;
    top: 50px;
    bottom:0;
    background-color: #F5F5F5;
    border-right: 1px solid #ddd;
    /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
    /*火狐下隐藏滚动条*/
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar{ width: 0; }
.sidebar > ul {height:100%; width: 199px;list-style-type: none;}
/* 自定义菜单样式 */
.isDisplay{display: none;}
.menu-list{border-right: 1px solid #ccc;}
.menu-list>li{
    width: 100%;
    height: auto;
    position: relative;
    height: auto;
}
.menu-list-item{
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 5px;
    height: 48px;
    /* border-bottom: 1px solid #E5E5E5; */
    border-top: 1px solid #E5E5E5;
}
.menu-list-item:hover{
    background-color: #fff;
}
.menu-list-item:hover>.menu-item-icon,.menu-list-item:hover>.menu-item-content,.menu-list-item:hover>.menu-item-bar{
    color: #487CC1;
}
.menu-list-item>.menu-item-icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    position: absolute;
    top: 3px;
    color: #333;
}
.menu-list-item>.menu-item-content{
    display: inline-block;
    width: calc(100% - 45px); 
    color: #333;
    position: absolute;
    left: 40px;
    top: 0;
    height: 48px;
    line-height: 48px;
}
.menu-list-item>.menu-item-bar{
    position: absolute;
    right: 10px;
    top: 5px;
    height: 40px;
    line-height: 40px;
    color: #333;
}

/*二级菜单列表定义*/
.child-menu-list{
    background-color: #fff;
    box-sizing: border-box;
    list-style-type: none;
    margin-top: -3px;
}
.child-menu-list>li{
    border-bottom: 1px dotted #E4E4E4;
    padding-left: 25px;
}
.child-menu-list>li:last-child{border-bottom: 1px dotted transparent;}
.child-menu-list>li>a{
    color: #333;
    border-left: 1px dotted #9DBDD6;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    position: relative;
    width: 100%;
}
.child-menu-list>li>a:hover{color: #487CC1;}
.menu-bar{
    display: inline-block;
    width: 8px;
    height: 25px;
    border-bottom: 1px dotted #9DBDD6;
    position: relative;
    top: -5px;
    margin-right: 7px;
}
</style>
