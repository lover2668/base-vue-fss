<template>
    <!-- 一级菜单 -->
    <div class="sidebar_drawer" v-if="showDrawer">
        <ul class="child-menu">
            <li v-for="(item,index) in menuList" :key="index" class="child-menu-item">
                <template v-if="item.hasOwnProperty('subs')">
                    <span class="menu-item-title">{{item.title}}</span>
                    <div class="menu-item-content">
                        <ul>
                            <li v-for="(i,num) in item.subs" :key="num">
                                <a href="javascript: void(0)" class="child-menu-item-a" @click="(e)=>handleMenuItemClick2(e,i)">{{i.title}}</a>
                            </li>
                        </ul>
                    </div>
                </template>
                <a v-else href="javascript: void(0)" class="child-menu-item-a" @click="(e)=>handleMenuItemClick2(e,item)">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                //子菜单是否显示的控制
                showDrawer: false,
                //控制菜单是否显示
                menuList: [],
            }
        },
        created(){
            //全部菜单数据的定义
            this.$InitMenu("menuList");
            //初始化默认显示档案管理下内容
            bus.$on("isShowDrawer", res => {
                this.showDrawer = res;
            });
            bus.$on("drawerData", res => {
                this.menuList = res.subs;
            });
        },
        methods: {
            //菜单跳转事件的触发
            handleMenuItemClick2(ele, data){
                this.$router.push(data.index);
                this.showDrawer = !this.showDrawer;
                bus.$emit('upShowDrawer', this.showDrawer);
            }
        }
    }
</script>

<style scoped>
/* 子菜单框体 */
.sidebar_drawer{
    min-width: 290px;
    height: calc(100% - 100px);
    background-color: #fff;
    border: 1px solid #ddd;
    position: absolute;
    top: 52px;
    left: 200px;
    z-index: 1000;
    border-radius: 5px;
    box-shadow: 0 0 5px #eee;
    padding: 10px;
    overflow-y: scroll;
}
.child-menu{
    width: 100%;
    height: 100%;
    list-style-type: none;
    border-top: 1px solid #ddd;
}
.child-menu>li.child-menu-item{
    width: calc(100% - 10px);
    padding: 5px;
    position: relative;
    border-bottom: 1px solid #ddd;
}
.child-menu>li.child-menu-item:after{
    content: "";
    clear: both;
    visibility: hidden;
    display: block;
}
.menu-item-title{
    display: inline-block;
    width: 110px;
    height: 100%;
}
.menu-item-content{
    width: calc(100% - 114px);
    float: right;
    border-left: 1px solid #ddd;
}
.child-menu-item-a{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: #333;
    width: 100%;
    text-indent: .5em;
}
.child-menu-item-a:hover{
    background-color: #4D80C2;
    color: #fff;
    border-radius: 2px;
}
</style>
