exports.install = function (Vue, options) {
    /** 菜单内容的添加
     * @Param key 调用组件见中当前data环境中需要承载参数的变量
     * @Author yangzeng 2019.11.20 */
    Vue.prototype.$InitMenu = function(key){
        let self = this;
        this.$my.getSource(this,this.$my.menu_path).then( res => {
            if(res.status == 200){
                let result = self.$qs.parse(res.data);
                self[key] = result.items;
            }
        });
    };

    /**
     * 获取当前登陆用户的access_token
     * @Param key 调用组件见中当前data环境中需要承载参数的变量
     * @Author yangzeng 2019.7.17 */
    Vue.prototype.$accessToken = function(){
        return localStorage.getItem("user_token");
    };

    /**
     * 文件服务地址的获取
     * @Param key 调用组件见中当前data环境中需要承载参数的变量
     * @Author yangzeng 2019.08.20 */
    Vue.prototype.$filePath = function(key){
        let self = this;
        this.$my.getSource(this,this.$my.path_url).then( _ => {
            self[key] = _.data.baseUrl + _.data.sysUrl.download;
        });
    };

    /**
     * 地图初始化
     * @Param key 调用组件见中当前data环境中需要承载参数的变量
     * @Author yangzeng 2019.7.18 */
    Vue.prototype.$Map = function(el,lng,lat,zoom){
        // 百度地图API功能
        var map = new BMap.Map(el);
        let point = new BMap.Point(lng,lat);
        map.centerAndZoom(point, zoom);
        map.enableScrollWheelZoom(true);
        // 创建标注
        // var marker = new BMap.Marker(point); 
        // map.addOverlay(marker);
        //比例缩放控件// 左上角，添加比例尺
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT,showAddressBa: false});
        //左上角，添加默认缩放平移控件
        var top_left_navigation = new BMap.NavigationControl();
        map.addControl(top_left_control);
        map.addControl(top_left_navigation);
        map.setMapStyle({style:'googlelite'});//精简风格
        return map;
    }
    /**
     * 柱状图实例模板
     * @Param key 调用组件见中当前data环境中需要承载参数的变量
     * @Author yangzeng 2019.7.18 */
    Vue.prototype.$column = function(doc,titleText,xKey,yTip,dataTypeFlg,data){
        this.Charts.chart(doc,{
            chart: {
                type: 'column'
            },
            title: {
                text: titleText
            },
            xAxis: {
                categories: xKey,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: yTip
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    borderWidth: 0,
                    showInLegend: dataTypeFlg
                }
            },
            series: data
        });
    }
    /**
     * 饼状图实例的创建
     * @Param key 调用组件见中当前data环境中需要承载参数的变量
     * @Author yangzeng 2019.7.18 */
    Vue.prototype.$pie = function(doc,titleText,tipText,data){
        this.Charts.chart(doc, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: titleText
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                        style: {
                            color: (this.Charts.theme && this.Charts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: tipText,
                colorByPoint: true,
                data: data
            }]
        });
    }
};