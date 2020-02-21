<template>
    <div class="sidebar">
        <!-- 
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" 
            :collapse="collapse" background-color="#324157" text-color="#bfcbd9" 
            active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index" v-if="item.show">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>  -->

        <el-tree :data="items" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
                }
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // this.$InitMenu("items");
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // }),
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
            handleNodeClick(data) {
                console.log(data);
            },
        }
    }
</script>

<style scoped>
    .sidebar{display: block;position: absolute;left: 0;top: 60px;bottom:0;overflow-y: scroll;width: 200px;}
    .sidebar::-webkit-scrollbar{ width: 0; }
    .sidebar > ul {height:100%;}
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
        background-color: #163C6D !important;
    }
</style>
