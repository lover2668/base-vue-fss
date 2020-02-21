<template>
    <div>
        <ul v-for="(item,index) in menu_list" class="G6-menu-list">
            <li class="G6-menu-list-item">
                <el-tooltip v-if="index == 3" class="item" effect="dark" :content="item.label" placement="right">
                    <a @click="handleItemClick(item.type)" :class="item.icon">{{item.label}}</a>
                </el-tooltip>
                <el-tooltip v-else class="item" style="border-bottom: 2px solid #fff;" effect="dark" :content="item.label" placement="right">
                    <a @click="handleItemClick(item.type)" :class="item.icon">{{item.label}}</a>
                </el-tooltip>
            </li>
        </ul>
    </div>
</template>

<script>
import G6 from '@antv/g6';
import bus from './g6_bus';
export default{
    name: 'customTable',
    data(){
        return {
            menu_list: [
                {label: "选择",icon: "", type: "pointer"}, //el-icon-position
                {label: "四边形",icon: "", type: "polygon"},
                {label: "椭圆",icon: "", type: "pie"},
                {label: "连线",icon: "", type: "line"}
            ]
        }
    },
    methods: {
        /*
         * 操作菜单点击事件的触发 */ 
        handleItemClick(e){
            bus.$emit("menuClick", e);
        }
    }
}
</script>

<style scoped>
/* 菜单条列表定义 */
.G6-menu-list{
    width: 100%;
    height: 100%;
    list-style-type: none;
}
.G6-menu-list>li{
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    font-size: 12px;
}
.G6-menu-list>li a{
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
}
</style>