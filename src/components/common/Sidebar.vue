<template>
    <div class="sidebar">
        <!-- <el-tree :data="items" class="tree-menu" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
        <ul class="menu-list">
            <li v-for="(item, index) in menuList" :key="index">
                <a href="javascript: void(0)">
                    <span>{{item.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
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
            let self = this;
            //当前菜单显示内容的获取
            bus.$on('menuItem', res => {
                let newMenuData = [];
                self.$my.getSource(self, self.$my.menu_path).then(d => {
                    let data = d.data.items;
                    data.forEach(key => {
                        if(key.index == res.index) newMenuData = key.subs;
                    })
                    self.items = newMenuData;
                });
            });
            //初始化默认显示档案管理下内容
            this.handleInitMenuData();

            //全部菜单数据的定义
            this.$InitMenu("menuList");
        },
        methods: {
            //初始化页面菜单参数处理
            handleInitMenuData(){
                let self = this,newData = [],defaultIndex="model1";
                this.$my.getSource(this, this.$my.menu_path).then(res => {
                    if(res.status == 200){
                        res.data.items.forEach(item => {
                            if(item.index == defaultIndex) self.items = item.subs;
                        })
                    }
                })
            },
            //菜单点击事件的触发
            // handleNodeClick(data) {
            //     console.log(data);
            // },
        }
    }
</script>

<style scoped>
.sidebar{position: absolute;left: 0;top: 50px;bottom:0;overflow-y: scroll;width: 200px;}
.sidebar::-webkit-scrollbar{ width: 0; }
.sidebar > ul {height:100%; list-style-type: none;}

/* 新页面样式调整
.tree-menu{
    background-color: #163C6D;
    color: #BFCBD9;
} */

/* 自定义菜单样式 */
.menu-list>li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
}
</style>
