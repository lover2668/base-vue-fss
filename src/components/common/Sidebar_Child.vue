<template>
    <!-- 一级菜单 -->
    <div class="sidebar_drawer" :style="'top:'+menuTop+'px'" v-if="showDrawer" @mouseleave="handleItemMouseleave()">
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
                menuTop: 0
            }
        },
        created(){
            //捕获显示
            bus.$on('showChildMenu', res => {
                this.menuList = res.data.subs;
                this.menuTop = $(res.el).offset().top;
                this.showDrawer = true;
            });
            //捕获关闭
            bus.$on("hideChildMenu", res => {
                this.showDrawer = false;
            });
        },
        methods: {
            //菜单点击跳转事件的触发
            handleMenuItemClick2(ele, data){
                this.$router.push(data.index);
                this.showDrawer = !this.showDrawer;
                bus.$emit('upShowDrawer', this.showDrawer);
            },
            //菜单鼠标离开时的事件监听
            handleItemMouseleave(){
                this.showDrawer = false;
                bus.$emit("closeDropBox", null);
            }
        }
    }
</script>

<style scoped>
/* 子菜单框体 */
.sidebar_drawer{
    min-width: 200px;
    height: auto;
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
