<template>
    <div class="sidebar">
        <ul class="menu-list">
            <li class="list-item-li" v-for="(item, index) in menuList" :key="index">
                <template v-if="item.hasOwnProperty('show') && item.show">
                    <a v-if="index == 0" href="javascript: void(0)" :class="{'menu-list-item': true, 'is-active': true} " @click="(e)=>handleClickItem(e,item)">
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
                        <li v-for="(i,num) in menuList[index].subs" :key="num">
                            <a href="javascript: void(0)"><i class="menu-bar"></i>{{i.title}}</a>
                        </li>
                    </ul>
                </template>
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
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            //全部菜单数据的定义
            this.$InitMenu("menuList");
            //初始化默认显示档案管理下内容
        },
        methods: {
            //菜单点击事件的触发
            // handleNodeClick(data) {
            //     console.log(data);
            // },
            //菜单元素的点击事件
            handleClickItem(e, data){
                //子菜单是否隐藏的控制
                let doc = e.target;
                let _child = $(doc).parents("li").find("ul.child-menu-list");
                if(_child.length > 0){
                    if(_child.attr("data-show") == "false"){
                        //设置为显示时
                        _child.attr("data-show","true");
                        _child.animate({
                            "height": 49 * data.subs.length + "px",
                        });
                        _child.show();
                    }else{
                        //设置为隐藏时
                        _child.attr("data-show","false");
                        _child.animate({
                            "height": "0",
                        });
                        _child.hide(100);
                    }
                };
            }
        }
    }
</script>

<style scoped>
.is-active{background: #fff !important;border-right: 4px solid #487CC1;}
.is-active .menu-item-icon,.is-active .menu-item-content,.is-active .menu-item-bar{color: #487CC1 !important}
.sidebar{
    position: absolute;
    left: 0;
    top: 50px;
    bottom:0;
    width: 200px;
    background-color: #F5F5F5;
    border-right: 1px solid #CCCCCC;
    /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
    /*火狐下隐藏滚动条*/
    overflow-y: auto;
} /*overflow-y: scroll;*/
.sidebar::-webkit-scrollbar{ width: 0; }
.sidebar > ul {height:100%; list-style-type: none;}

/* 自定义菜单样式 */
.isDisplay{display: none;}
.menu-list{border-right: 1px solid #ccc;border-bottom: 1px solid #ccc}
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
