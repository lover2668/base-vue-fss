<template>
    <el-card class="box-card" style="height: 100%">
        <div id="mountNode"></div>
    </el-card>
</template>

<script>
import G6 from '@antv/g6';
export default{
    name: 'customTable',
    data(){
        return {
          graph: null,
          initData: {
            // 点集
            nodes: [
              {id: 'node1', x: 100, y: 200, label: '起始点',groupId: "group1"},
              {id: 'node2', x: 300, y: 200, label: '目标点',groupId: "group1"},
              {id: 'node3', x: 500, y: 200, label: '目标点',groupId: "group2"},
              {id: 'node4', x: 700, y: 200, label: '目标点',groupId: "group2"}
            ],
            // 边集
            edges: [
              {
                source: 'node1',  // 起始点 id
                target: 'node2',  // 目标点 id
                label: '我是连线1'   // 边的文本
              },
              {
                source: 'node2',  // 起始点 id
                target: 'node3',  // 目标点 id
                label: '我是连线2'   // 边的文本
              },
              {
                source: 'node3',  // 起始点 id
                target: 'node4',  // 目标点 id
                label: '我是连线3'   // 边的文本
              }
            ]
          }
        }
    },
    created(){
      this.$nextTick(_ => {
        this.handleDrawInitData();
      });
    },
    methods: {
      /*
       * 样式的指定分为两种：
       *    1、数据中进行指定,通过style属性的添加，如下
              nodes: [
                {id: "node1", label: "node1", style: {file: "#fff", fontSize: 14}}
              ]
       *    2、参数中进行统一指定，通过defaultNode,或者defaultEdge进行指定
                const graph = new G6.Graph({
                  container: "docId",
                  width: 1000,
                  height: 600,
                  defaultNode: {
                      shape: "circle",        //指定模块的形状
                      style: {                //模块演示的指定
                          fill: "#faf",   
                          fontSize: 14
                      }    
                  },
                  defaultEdge: {
                      shape: 'line-with-arrow',
                      style: {
                        fill: '#fff',
                        fontSize: 14,
                      },
                    },
                });      
       **/
      //初始化图表
      handleDrawInitData(){
        //G6对象声明并进行全局赋值
        this.graph = new G6.Graph({
          container: 'mountNode', // 指定挂载容器
          width: 1000,             // 图的宽度
          height: 600,             // 图的高度
          //添加动画
          animate: true,
          
          // fitView: true,           //设置是否将图例适配到画布上，若不设会出现图例超出画布的现象
          // fitViewPadding: [20, 40, 50, 20],  //设置画布四周的宽度留白
          //布局相关参数的配置
          layout: {
            type: "force",        //指定为力导向布局
            preventOverlap: true, //防止节点重叠
            linkDistance: 100,    //指定边距离为100
          },

          //交互管理配置画布及节点的操作等
          modes: {
            //默认的模式
            default: ['drag-canvas', 'zoom-canvas', 'drag-node'],    //允许画布拖拽、缩放，允许节点拖拽
            //编辑模式，编辑模式不允许拖拽画布
            edit: []
          },

          //设置节点各状态下的元素样式：鼠标相关的设置
          nodeStateStyles: {
            // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
            hover: {
              fill: 'lightsteelblue',
            },
            // 鼠标点击节点，即 click 状态为 true 时的样式
            click: {
              stroke: '#000',
              lineWidth: 3,
            },
          },
          edgeStateStyles: {  //节点连线的样式设置
            click: {
              stroke: "steelblue"
            }
          },

          //节点默认状态下的参数配置（图例模板的显示）
          defaultNode: {
            //节点大小
            size: 30, 
            //节点样式配置
            style: {
              fill: "steelblue",  //节点填充色
              stroke: "#666",     //节点描边色
              lineWidth: 1,       //节点描边宽度
            },
            //节点显示状态
            // shape: 'node',  
            //节点上的标签文本配置
            labelCfg: {     
              style: {
                //文本颜色
                fill: "#faf",
                fontSize: 12
              }
            }
          },
          //边线默认状态下的设置
          defaultEdge: {
            //样式设置
            style: {
              opacity: 0.6,   //透明度
              stroke: 'grey'  //边框颜色
            },
            //边上标签文本设置
            labelCfg: {
              autoRotate: true  //边上的标签文本根据边的方向旋转
            }
          }
        });
        //图例进行初始化
        this.handleInitG6();
      },
      //图例初始化
      handleInitG6(){
        // this.graph.data(this.initData);  // 加载数据
        // this.graph.render();        // 渲染
        //图标事件的添加
        // this.addEventListener();

        //
        let self = this;
        let response = this.handleGetG6Data();
        response.then(res => {
          let data = res.data;
          self.graph.data(data);  // 加载数据
          self.graph.render();        // 渲染
          //图表事件的添加
          self.handleAddEventListener(self.graph);
        });
      },
      //远程数据的获取
      async handleGetG6Data(){
        let response = this.$axios.get('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json');
        return response;
      },
      handleAddEventListener(graph){
        // 鼠标进入节点
        graph.on('node:mouseenter', e => {
          // 获取鼠标进入的节点元素对象
          const nodeItem = e.item;  
          // 设置当前节点的 hover 状态为 true
          graph.setItemState(nodeItem, 'hover', true);  
        });
        // 鼠标离开节点
        graph.on('node:mouseleave', e => {
          // 获取鼠标离开的节点元素对象
          const nodeItem = e.item;  
          // 设置当前节点的 hover 状态为 false
          graph.setItemState(nodeItem, 'hover', false); 
        });
        // 点击节点
        graph.on('node:click', e => {
          // 先将所有当前是 click 状态的节点置为非 click 状态
          const clickNodes = graph.findAllByState('node', 'click');
          clickNodes.forEach(cn => {
            graph.setItemState(cn, 'click', false);
          });
          // 获取被点击的节点元素对象
          const nodeItem = e.item;  
          // 设置当前节点的 click 状态为 true
          graph.setItemState(nodeItem, 'click', true); 
        });
        // 点击边
        graph.on('edge:click', e => {
          // 先将所有当前是 click 状态的边置为非 click 状态
          const clickEdges = graph.findAllByState('edge', 'click');
          clickEdges.forEach(ce => {
            graph.setItemState(ce, 'click', false);
          });
          const edgeItem = e.item;  // 获取被点击的边元素对象
          graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
        });
      },
      //图表事件的添加
      addEventListener(graph){
        this.graph.setItemState('node1', 'selected', true);
        this.graph.on('click', (ev)=>{
          console.log(ev);
        });
      },
    }
}
</script>

<style scoped>
</style>