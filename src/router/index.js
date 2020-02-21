import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

let routers = [
    {
        path: '/',redirect: '/dashboard'
    },{
        path: '/',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:[
            /*********************************About APP*********************************/
            {
                path: '/dashboard',
                component: resolve => require(['../components/page/api/Dashboard.vue'], resolve),
                meta: { title: '系统首页' }
            },
            {
                path: '/model1-1-3',
                component: resolve => require(['../components/page/model/dangAn/khda/fazd/index.vue'], resolve),
                meta: { title: '方案制定' }
            },





            /**********************************测试跳转*********************************/
            {
                path: '/testpage',
                component: resolve => require(['../components/page/demo/test.vue'], resolve),
                meta: { title: '测试页面' }
            },
            {
                path: '/testpage2',
                component: resolve => require(['../components/page/demo/test2.vue'], resolve),
                meta: { title: '测试页面' }
            },
            /***********************************Demo***********************************/
            {
                path: '/G6Demo',
                component: resolve => require(['../components/page/demo/G6/G6.vue'], resolve),
                meta: { title: '图表示例' }
            },
            /*********************************About API*********************************/
            {
                path: '/icon',
                component: resolve => require(['../components/page/api/Icon.vue'], resolve),
                meta: { title: '自定义图标' }
            },{
                path: '/table',
                component: resolve => require(['../components/page/api/BaseTable.vue'], resolve),
                meta: { title: '基础表格' }
            },{
                path: '/tabs',
                component: resolve => require(['../components/page/api/Tabs.vue'], resolve),
                meta: { title: 'tab选项卡' }
            },{
                path: '/form',
                component: resolve => require(['../components/page/api/BaseForm.vue'], resolve),
                meta: { title: '基本表单' }
            },{
                // 富文本编辑器组件
                path: '/editor',
                component: resolve => require(['../components/page/api/VueEditor.vue'], resolve),
                meta: { title: '富文本编辑器' }
            },{
                // markdown组件
                path: '/markdown',
                component: resolve => require(['../components/page/api/Markdown.vue'], resolve),
                meta: { title: 'markdown编辑器' }
            },{
                // 图片上传组件
                path: '/upload',
                component: resolve => require(['../components/page/api/Upload.vue'], resolve),
                meta: { title: '文件上传' }
            },{
                // vue-schart组件
                path: '/charts',
                component: resolve => require(['../components/page/api/BaseCharts.vue'], resolve),
                meta: { title: 'schart图表' }
            },{
                // 拖拽列表组件
                path: '/drag',
                component: resolve => require(['../components/page/api/DragList.vue'], resolve),
                meta: { title: '拖拽列表' }
            },{
                // 拖拽Dialog组件
                path: '/dialog',
                component: resolve => require(['../components/page/api/DragDialog.vue'], resolve),
                meta: { title: '拖拽弹框' }
            },{
                // 权限页面
                path: '/permission',
                component: resolve => require(['../components/page/api/Permission.vue'], resolve),
                meta: { title: '权限测试', }
            },{
                path: '/404',
                component: resolve => require(['../components/page/api/404.vue'], resolve),
                meta: { title: '404' }
            },{
                path: '/403',
                component: resolve => require(['../components/page/api/403.vue'], resolve),
                meta: {title: '403'}
            },
            /*********************************自定义组件的封装*********************************/
            {
                path: '/select',
                component: resolve => require(['../components/page/common/select.vue'], resolve),
                meta: {title: '下拉组件'}
            },{
                path: '/customTable',
                component: resolve => require(['../components/page/common/table.vue'], resolve),
                meta: {title: '自定义表格'}
            },{
                path: '/customMsg',
                component: resolve => require(['../components/page/common/message.vue'], resolve),
                meta: {title: '消息提醒相关'}
            },{
                path: '/showDialog',
                component: resolve => require(['../components/page/common/dialog.vue'], resolve),
                meta: {title: '弹层定义'}
            },{
                path: '/tree',
                component: resolve => require(['../components/page/common/tree.vue'], resolve),
                meta: {title: '树形结构'}
            },{
                path: '/input',
                component: resolve => require(['../components/page/common/input.vue'], resolve),
                meta: {title: '输入框'}
            },{
                path: '/dateTimePicker',
                component: resolve => require(['../components/page/common/dateTimePicker.vue'], resolve),
                meta: {title: '时间日期组件'}
            },{
                path: '/from',
                component: resolve => require(['../components/page/common/from.vue'], resolve),
                meta: {title: '表单'}
            },{
                path: '/fileUpload',
                component: resolve => require(['../components/page/common/fileUpload.vue'], resolve),
                meta: {title: '资源上传'}
            },{
                path: '/Cascader',
                component: resolve => require(['../components/page/common/cascade.vue'], resolve),
                meta: {title: '级联选择器'}
            }
        ]
    },{
        path: '/login',
        component: resolve => require(['../components/page/api/Login.vue'], resolve)
    },{
        path: '*',
        redirect: '/404'
    }
]

export default new Router({
    // mode: "history",
    mode: "hash",
    routes: routers
})
