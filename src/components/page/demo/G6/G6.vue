<template>
    <div class="G6-box" id="G6">
        <!-- 操作条 -->
        <g-menu class="G6-menu"></g-menu>
        <!-- 编辑框 -->
        <g-editor v-if="isShowEdit" class="G6-editer" @toBack="handleCloseEdit"></g-editor>
        <!-- 显示区域 -->
        <g-draw v-if="isShow" class="mountNode" :width="G6_width"></g-draw>
    </div>
</template>

<script>
import GMenu from './menu';
import GEditor from './editor';
import GDraw from './draw';
export default{
    name: 'G6_table',
    components: {GMenu,GEditor,GDraw},
    data(){
        return {
            // 宽度的定义
            G6_width: null,
            //图例显示的控制
            isShow: false,
            // 编辑框显示的控制
            isShowEdit: true
        }
    },
    created(){
        this.$nextTick(_ => {
            // 图表参数定义
            this.handleInitParam();
        });
    },
    methods: {
        // 图表初始化
        handleInitParam(){
            let doc = document.getElementById("G6");
            this.G6_width = doc.offsetWidth;
            this.isShow = true;
        },
        // 窗口关闭控制
        handleCloseEdit(){
            this.isShowEdit = false;
        }
    }
}
</script>

<style scoped>
.G6-box{
    width: 100%;
    height: 100%;
    position: relative;
    background: url('../../../../assets/img/G6/g6_background.jpg');/* no-repeat*/
}
/* 菜单条定义 */
.G6-box>.G6-menu{
    position: absolute;
    width: 40px;
    min-height: 50px;
    border-radius: 5px;
    left: 15px;
    top: 15px;
    box-shadow: 0 0 5px #fff;
    background: #f6f6f6;
    z-index: 1000;
}
/* 编辑框定义 */
.G6-box>.G6-editer{
    position: absolute;
    /*min-width: 300px;*/
    width: 300px;
    min-height: 300px;
    border-radius: 5px;
    box-shadow: 0 0 5px #e6e6e6;
    background: #f6f6f6;
    right: 15px;
    top: 15px;
    z-index: 1000;
}
/* 图表框定义 */
.G6-box>.mountNode{
    width: 100%;
}
</style>