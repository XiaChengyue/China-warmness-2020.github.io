//首页event图
(function(){
    var myChart = echarts.init(document.querySelector(".event"));
    //跳转代码
myChart.on('click', function(params) {
    console.log(params.name);
    window.open(params.data.url);
});
var earth='path://M947.108756 511.648694c0-240.108606-194.801924-434.755236-435.1032-434.755236-240.305873 0-435.111994 194.64663-435.111994 434.755236 0 221.801619 166.222901 404.794749 380.984293 431.422296 12.106792 2.55127 26.852794 4.038062 44.415686 4.038062 4.930457 0 9.685034-0.259424 14.27692-0.729505C754.768563 943.931606 947.108756 750.242528 947.108756 511.648694zM884.893338 517.799924c-1.251751-21.692093-4.117408-42.925497-8.48125-63.560906 0.387337-7.368204 0.492666-14.349071 0.2952-20.839071 5.396141 25.231293 8.241812 51.407945 8.241812 78.248547C884.9499 513.703701 884.926516 515.752712 884.893338 517.799924zM139.053218 511.648694c0-26.351534 2.74374-52.061502 7.95021-76.867284 16.10568 17.224122 54.066743 16.817798 63.324466-8.917554 16.564569 9.871507 38.824677 11.669088 38.824677 31.400111 0 65.118849 2.319028 134.932116 61.48951 136.010585 1.66607 0.021785 32.998427 11.87355 47.909917 50.543531 5.155904 13.365538 25.549677 0 47.914314 0 11.16483 0 0 18.808248 0 59.480272 0 40.514331 87.352575 102.896636 87.352575 102.896636-0.404726 26.818217 0.696328 48.503115 2.928215 65.827569-19.717432-0.362954-36.334165 2.250074-49.388714 6.693662C272.196747 848.12916 139.053218 695.432289 139.053218 511.648694zM603.819307 872.916555c-1.933289-9.465183-10.391954-14.648468-25.824691-10.592418 12.313851-52.435848 18.300192-81.808734 44.006564-104.111013 37.193383-32.239142 4.428997-68.090635-23.874013-63.865499-22.307875 3.367717-8.210433-27.618874-28.121134-29.332712-19.910701-1.66607-45.912871-41.267221-74.568443-54.893982-15.189901-7.213309-30.11798-26.544003-53.544497-27.410016-20.763722-0.805054-51.107949 17.555897-51.107949 3.402493 0-45.588091-4.61627-78.118835-5.565027-91.110227-0.766081-10.437323-6.822974-3.515616 21.245995-2.841074 15.276243 0.409123 7.814302-30.681998 22.93465-31.896174 14.850531-1.175003 50.237539 13.900975 59.253226 7.892249 8.375721-5.595206 61.567857 139.617739 61.567857 24.003126 0-13.718099-7.104983-37.568728 0-50.56092 28.099349-51.339991 54.405313-93.181823 52.042915-99.302673-1.340691-3.446064-28.747909-6.291534-50.677241 1.066277-7.400782 2.471125 2.353804 14.061866-8.275589 16.537388-39.825598 9.193567-75.012541-10.73772-62.690696-29.472018 12.617645-19.199982 58.334849-8.375322 62.342532-46.893007 2.305837-22.062841 4.216541-47.615317 5.495274-66.606441 53.59926 8.381317 47.69926-69.55724-31.998305-77.899584 161.233284 1.886321 297.86145 106.006727 347.998057 250.511153-2.535881-2.312632-5.485881-3.718479-8.892971-4.061446-24.096063-60.184395-82.583209-16.628726-62.74306 36.455483-106.305525 81.712999-79.094174 138.703759-44.167654 171.339032 18.378539 17.155369 35.900659 42.956076 47.309324 61.485713-12.417581 36.205653 45.75278 21.707682 74.441329-39.73446C833.914302 741.574005 732.115122 840.463158 603.819307 872.916555z'
var heart='path://M912.244 230.695c-114.529-97.079-280.677-50.813-361.045 42.605-59.602-79.381-181.23-164.423-339.671-101.361-205.974 81.951-259.759 383.466 4.902 571.391 84.483 59.969 186.926 97.008 246.575 112.23 36.23 9.302 67.701 15.915 67.701 15.915s2.107-9.086 14.226-10.465c12.13-1.356 10.169-15.345 25.74-18.174 15.556-2.807 17.958-12.703 17.958-12.703s-175.165-28.38-314.753-138.613c-168.801-133.236-136.794-283.697-67.595-364.481 76.61-89.491 189.342-94.535 266.26-49.908 71.402 41.486 108.737 100.767 102.921 157.358-5.507 53.619-34.649 34.183-43.425 8.541-12.347-36.158 3.995-64.132 9.017-76.907-9.586-13.417-18.711-24.834-30.236-33.518-10.405 19.887-23.075 47.41-17.198 82.736 9.171 55.14 74.172 90.822 93.631 37.586 9.55-26.191 15.546-78.478-6.708-130.526 37.573-35.825 86.54-67.178 169.013-50.787 77.538 15.367 139.982 103.43 106.442 205.339-42.081 127.886-173.844 126.505-173.844 126.505s0.69 31.424-13.357 46.769c-23.074 25.167-4.127 41.794-14.676 54.974-10.443 13.178-2.711 49.812-2.711 49.812s110.127-17.222 214.663-93.344c121.331-88.35 180.67-316.955 46.173-430.971z'
var person='path://M507.2 537.28c-108.544 0-196.544-89.6-196.544-200.064 0-110.528 88-200.064 196.544-200.064 108.544 0 196.544 89.6 196.544 200.064-0.064 110.528-88 200.064-196.544 200.064m134.4 36.608A274.176 274.176 0 0 0 775.68 337.28C775.68 186.368 655.424 64 507.2 64S238.656 186.368 238.656 337.28c0 102.72 55.68 192.192 138.048 238.848-135.424 54.784-231.232 189.44-231.232 346.816 0 20.48 16.32 37.12 36.48 37.12 20.096 0 36.48-16.64 36.48-37.12 0.192-164.992 131.648-298.688 293.888-298.688 160.32 0 290.688 130.752 293.76 293.184a36.8 36.8 0 0 0 36.096 42.624c20.096 0 36.48-16.64 36.48-37.12-0.128-159.616-98.624-295.808-237.056-349.056'
var colorList = [
    '#1491a8', '#134857', '#11659a', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
    '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ];

option = {

    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        zoom:2,
        force: {
            repulsion: 500,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{
            "name": "昔日你助我脱贫，今日我助你抗疫",
            "symbolSize": 48,
            "symbol":heart,
            "url":'http://cpc.people.com.cn/n1/2020/0207/c69113-31575989.html',
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[0],
                    "color": colorList[0]
                }
            }
        },{
            "name": "通江爱心人士向抗疫一线捐赠牛奶500件 “向工作人员致敬！”",
            "symbolSize": 48,
            "symbol":heart,
            "url":'http://local.newssc.org/system/20200212/002859140.htm',
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[0],
                    "color": colorList[0]
                }
            }
        },{
            "name": "“我们守护你” 爱心企业向抗疫一线人员捐赠13.62万件牛奶",
            "symbolSize": 48,
            "symbol":heart,
            "url":'http://news.sina.com.cn/o/2020-02-17/doc-iimxyqvz3629471.shtml',
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[0],
                    "color": colorList[0]
                }
            }
        },
        {
            "name": "爱心助力不停步 疫情无情人有情",
            "symbolSize": 48,
            "symbol":heart,
            "url":'http://lnradio.com/difang/haicheng/202001/288614.html',
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[0],
                    "color": colorList[0]
                }
            }
        },
        {
            "name": "疫情中的温暖，爱心人士捐赠口罩",
            "symbolSize": 48,
            "symbol":heart,
            "url":'https://new.qq.com/omn/20200131/20200131A0EKQ900.html',
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[0],
                    "color": colorList[0]
                }
            }
        },{
            "name": "感谢中国医生的帮助",
            "value": 5449,
            "symbol":earth,
            "url":'http://world.people.com.cn/n1/2020/0603/c1002-31733040.html',
            "symbolSize": 73,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[1],
                    "color": colorList[1]
                }
            }
        },{
            "name": "大国担当！中国医疗专家团队支援塔吉克斯坦",
            "value": 5449,
            "symbol":earth,
            "url":'https://baijiahao.baidu.com/s?id=1667847184835818638&wfr=spider&for=pc',
            "symbolSize": 73,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[1],
                    "color": colorList[1]
                }
            }
        },{
            "name": "中国人民解放军向黎巴嫩军队提供抗疫物资援助",
            "value": 5449,
            "symbol":earth,
            "url":'http://news.taizhou.com.cn/2020-05/30/content_6341688.html',
            "symbolSize": 73,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[1],
                    "color": colorList[1]
                }
            }
        },{
            "name": "中国将在两年内提供20亿美元国际援助",
            "value": 5449,
            "symbol":earth,
            "url":'http://szsb.sznews.com/MB/content/202005/19/content_860511.html',
            "symbolSize": 73,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[1],
                    "color": colorList[1]
                }
            }
        },{
            "name": "中国支援见证“风月同天”",
            "value": 5449,
            "symbol":earth,
            "url":'http://world.people.com.cn/n1/2020/0512/c1002-31705907.html',
            "symbolSize": 73,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[1],
                    "color": colorList[1]
                }
            }
        }, {
            "name": "钟南山挂帅出征！",
            "value": 2289,
            "symbol":person,
            "symbolSize": 67,
            "draggable": true,
            "url":'https://xw.qq.com/cmsid/20200124A07NYX00',
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[2],
                    "color": colorList[2]
                }
            }
        }
        , {
            "name": "冲在抗疫前线的李兰娟院士",
            "value": 2289,
            "symbol":person,
            "symbolSize": 67,
            "draggable": true,
            "url":'https://baijiahao.baidu.com/s?id=1659321843949403672&wfr=spider&for=pc',
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[2],
                    "color": colorList[2]
                }
            }
        }, {
            "name": "彭银华，那个永远无法出席婚礼的新郎",
            "value": 2289,
            "symbol":person,
            "symbolSize": 67,
            "draggable": true,
            "url":'http://www.fx361.com/page/2020/0422/6591241.shtml',
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[2],
                    "color": colorList[2]
                }
            }
        }, {
            "name": "金银潭院长张定宇，身患绝症的抗疫英雄",
            "value": 2289,
            "symbol":person,
            "symbolSize": 67,
            "draggable": true,
            "url":'http://www.lizhigushi.com/lizhixiaogushi/a21434.html',
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[2],
                    "color": colorList[2]
                }
            }
        }, {
            "name": "快递小哥：逆行让平凡变得伟大",
            "value": 2289,
            "symbol":person,
            "symbolSize": 67,
            "draggable": true,
            "url":'http://www.chinanews.com/gn/2020/04-19/9161319.shtml',
            "itemStyle": {
                "normal": {
                    "shadowBlur": 100,
                    "shadowColor": colorList[2],
                    "color": colorList[2]
                }
            }
        }
        ]
    }]
}
    myChart.setOption(option);
})();
//中国援助图
(function() {
    var myChart = echarts.init(document.querySelector(".column .map"));
 
// 使用 echarts 绘制世界地图的实例作为纹理
var canvas = document.createElement('canvas');
var mapChart = echarts.init(canvas, null, {
  width: 4096, height: 2048
});
var geoCoordMap = { '芬兰': [24.909912, 60.169095], 
'美国': [-100.696295, 33.679979], 
'日本': [139.710164, 35.706962], 
'韩国': [126.979208, 37.53875], 
'瑞士': [7.445147, 46.956241],
'东南亚': [117.53244, 5.300343], 
'澳大利亚': [135.193845, -25.304039], 
'德国': [13.402393, 52.518569], 
'英国': [-0.126608, 51.208425], 
'加拿大': [-102.646409, 59.994255],
'美国': [-95.712891,37.09024],
'意大利': [12.56738,41.87194],
'纳米比亚': [18.49041,-22.95764],
'塞尔维亚': [21.005859,44.016521],
'美国': [-95.712891,37.09024],
'法国': [2.21374,46.227638],
'斯洛伐克': [19.699024,48.669026],
'捷克': [15.472962,49.817492],
'尼加拉瓜': [-85.207229,12.865416],
'巴基斯坦': [69.345116,30.375321],
'卢森堡': [6.129583,49.815273],
'西班牙': [-3.74922,40.463667],
'丹麦': [9.501785,56.26392],
'老挝': [102.495496,19.85627],
'伊朗': [53.688046,32.427908],
'马来西亚': [101.975766,4.210484],
'巴拉圭': [-58.443832,-23.442503],
'荷兰': [5.291266,52.132633],
'斯洛文尼亚': [14.995463,46.151241],
'波兰': [19.145136,51.919438],
'摩洛哥': [-7.09262,31.791702],
'哈萨克斯坦': [66.923684,48.019573], 
'埃塞尔比亚': [40.489673,9.145],
'中国': [116.4551,40.2539]
}
var BJData = [ 
    [{name:'中国'}, {name:'日本',value:1305}],
    [{name:'中国'}, {name:'韩国',value:500}],
    [{name:'中国'}, {name:'英国',value:500}],
    [{name:'中国'}, {name:'意大利',value:264.76}],
    [{name:'中国'}, {name:'塞尔维亚',value:1000}],
    [{name:'中国'}, {name:'纳米比亚',value:606}],    
     [{name:'中国'}, {name:'美国',value:260}],
     [{name:'中国'}, {name:'捷克',value:110}],
     [{name:'中国'}, {name:'法国',value:100}],
     [{name:'中国'}, {name:'斯洛伐克',value:100}],
     [{name:'中国'}, {name:'马来西亚',value:60}],
     [{name:'中国'}, {name:'卢森堡',value:64.57}],
     [{name:'中国'}, {name:'巴基斯坦',value:98.5}],
     [{name:'中国'}, {name:'尼加拉瓜',value:100}],
     [{name:'中国'}, {name:'埃塞尔比亚',value:54.6}],
     [{name:'中国'}, {name:'西班牙',value:51.7622}],
     [{name:'中国'}, {name:'丹麦',value:50}],
     [{name:'中国'}, {name:'老挝',value:40.5}],
     [{name:'中国'}, {name:'伊朗',value:40}],
     [{name:'中国'}, {name:'巴拉圭',value:10}],
     [{name:'中国'}, {name:'荷兰',value:3}],
     [{name:'中国'}, {name:'斯洛文尼亚',value:3}],
     [{name:'中国'}, {name:'德国',value:2}],
     [{name:'中国'}, {name:'波兰',value:2}],
     [{name:'中国'}, {name:'摩洛哥',value:2}],
     [{name:'中国'}, {name:'哈萨克斯坦',value:1.5934}]
 ];
 var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    
 var convertData = function (data) {
     console.log(data);
     var res = [];
     for (var i = 0; i < data.length; i++) {
         var dataItem = data[i];
         var fromCoord = geoCoordMap[dataItem[0].name];
         var toCoord = geoCoordMap[dataItem[1].name];
         if (fromCoord && toCoord) {
             res.push({
                 fromName: dataItem[0].name,
                 toName: dataItem[1].name,
                 coords: [fromCoord, toCoord],
                 value: dataItem[1].value
             });
         }
     }
     return res;
 };
 
 
 var dser = [];
 var series = [];
 [['中国', BJData]].forEach(function(item, i) {
    dser.push({ 
    type: 'effectScatter',         
    coordinateSystem: 'geo', 
    zlevel: 3,
    rippleEffect: {
        brushType: 'stroke' 
    },
    label: {
        fontSize:24,  
        show: true,
        position: 'right', 
        formatter: '{b}'  
    },
    itemStyle: {
        normal: {
            color: '#ffffff'
        }
    },
    tooltip:{
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            return "线路："+params.data.name+""+params.data.value[2];
        } 
    },
    data: item[1].map(function(dataItem) {
        return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name],
            symbolSize: dataItem[1].value /40
        };
    })
},{
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 3,
    rippleEffect: {
        brushType: 'stroke'
    },
   
    label: {
        normal: {
            show: true,
            position: 'left',
            fontSize:18,
            formatter: '{b}'
        }
    },
    itemStyle: {
        normal: {
            color: '#3170a7'
        }
    },
    data: [{
        name: item[0],
        value: geoCoordMap[item[0]],
        symbolSize:parseInt(Math.random()*20+10),
        label: {
            normal: {
                position: 'right'
            }
        }
    }]
})
series.push({
        type: 'lines3D',
        silent: false,
        effect: {
            show: true,
            period: 3,//速度
            trailLength: 0.1,//尾部阴影     
            symbol:planePath     
        },
        lineStyle: {//航线的视图效果
            color: '#9ae5fc',
            width: 1,
            opacity: 0.6
        },
        data: convertData(item[1])// 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    })
});


mapChart.setOption({
    geo: {
        silent:false,
        type: 'map',
        map: 'world',
        left:0,
        top:50,
        right: 0,
        bottom: 0,
        boundingCoords: [[-180, 90], [180, -90]],
        zoom:0,
        roam: true,
        itemStyle: {
            borderColor:'#000d2d',
            normal: {
                areaColor: '#2f4554',
                borderColor:'#000c2d'
            },
            emphasis: {
                areaColor: '#4e7ca1' 
            }
        },
        label:{
            fontSize:24
        }
    },
    series:dser

});
 
option = {
    title:{
     text:'China\'s masks donation to the world',
     subtext:'data from:Chinese Foreign Ministry',
     textStyle:{
     color:'#2f4554'
     },
     subtextStyle:{
        color:'#2f4554'
     },
     left:50,
     show:true
    },
    tooltip : {
        show: true,
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            if(params.seriesType=="effectScatter") {
                return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines3D"){
                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        }
    },

    
  globe:{
    show:true,
    baseTexture: mapChart,
   silent:false,
      shading:"lambert",
     top: 25,
     right:"10%",
    //视角控制
    viewControl:{
      projection:"perspective",
     damping:0.8,
      rotateSensitivity:1, //鼠标旋转灵敏度
      zoomSensitivity:1,//鼠标缩放灵敏度
      autoRotate:true,
      autoRotateAfterStill:1,//鼠标停止后多久恢复旋转(为0时暂停后不恢复旋转)
      distance: 150,
      //alpha:160,//视角绕 x 轴，即上下旋转的角度
      //beta:-20,//视角绕 y 轴，即左右旋转的角度。
      targetCoord: [116.46, 39.92]//定位到哪里
    }
  },
 series:series

};
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}
})();
$(function(){
	$('#dowebok').fullpage({
        sectionsColor: ['#7BAABE', '#2f4554', '#7BAABE', '#2f4554'],
        'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					right: "80%"
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('map').delay(500).animate({
					left: '-10%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
	});
});
//中国内部医疗捐助图
(function(){
    var myChart = echarts.init(document.querySelector(".chinamap"));
    var doctor = 'path://M992.768 755.712c-19.968-46.592-49.152-87.552-86.528-121.856-25.6-23.552-55.296-43.52-87.552-59.392 65.024-56.32 102.4-136.704 102.4-222.72 0-162.304-132.096-294.4-293.888-294.4h-2.048c-15.872 0.512-30.208 6.656-40.96 17.92s-16.896 26.112-16.384 41.984c0 9.216 2.56 17.92 6.656 25.6C520.192 84.48 443.392 48.128 357.888 48.128c-162.304 0-294.4 132.096-294.4 294.4 0 102.4 53.76 197.632 141.312 251.392-124.928 59.392-204.8 185.344-204.8 323.584 0 32.256 26.112 58.88 58.88 58.88 15.872 0 30.208-6.144 41.472-17.408s17.408-25.6 17.408-41.472c0-132.608 108.032-240.64 240.64-240.64s240.64 108.032 240.64 240.64c0 32.256 26.112 58.88 58.88 58.88 32.256 0 58.88-26.112 58.88-58.88 0-138.24-79.872-264.192-204.8-323.584 87.552-53.248 141.312-148.992 141.312-251.392 0-67.584-23.04-130.048-61.44-179.712 9.728 7.168 21.504 11.776 34.816 11.776h1.024c97.792 0 177.152 79.36 177.152 177.152s-79.36 177.152-177.152 177.152c-32.256 0-58.88 26.112-58.88 58.88v2.048c0 32.256 26.112 58.88 58.88 58.88 164.864 0 280.064 109.056 280.064 265.216 0 32.256 26.112 58.88 58.88 58.88s58.88-26.112 58.88-58.88c-1.536-56.832-12.288-110.08-32.768-158.208z m-457.728-413.184c0 97.792-79.36 177.152-177.152 177.152S180.736 440.32 180.736 342.528s79.36-177.152 177.152-177.152 177.152 79.36 177.152 177.152z'
    var chinaGeoCoordMap = {
        '黑龙江': [127.9688, 46.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 41.1216],
        "河北": [115.4995, 38.8006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [108.6162, 34.2004],
        "甘肃": [103.5901, 35.7043],
        "宁夏": [106.3586, 37.6775],
        "青海": [98.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.8582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [120.0062, 33.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [120.5313, 29.0773],
        "福建": [118.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [112.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [100.9199, 24.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.0893, 19.0516],
        '上海': [121.4648, 31.2891]
    };
    var chinaDatas = [
         [
                {
            name: '上海',
            value: 1649
        }],
        [
                {
            name: '云南',
            value: 1156
        }],
            [
                {
            name: '北京市',
            value: 1217
        }],
        [{
            name: '黑龙江',
            value: 1533
        }],
        [{
            name: '内蒙古',
            value: 798
        }],
        [{
            name: '吉林',
            value: 1179
        }],
        [{
            name: '辽宁',
            value: 2054
        }],
        [{
            name: '河北',
            value: 1100
        }],
        [{
            name: '山西',
            value: 1516
        }],
        [{
            name: '陕西',
            value: 1509
        }],
        [{
            name: '甘肃',
            value: 796
        }],
        [{
            name: '宁夏',
            value: 787
        }],
        [{
            name: '青海',
            value: 239
        }],
        [{
            name: '新疆',
            value: 509
        }],
        [{
            name: '西藏',
            value: 1463
        }],
        [{
            name: '四川',
            value: 1458
        }],
        [{
            name: '重庆',
            value: 1636
        }],
        [{
            name: '山东',
            value: 1775
        }],
        [{
            name: '河南',
            value: 1281
        }],
        [{
            name: '江苏',
            value: 2802
        }],
        [{
            name: '安徽',
            value: 1362
        }],
        [{
            name: '天津',
            value: 1289
        }],
        [{
            name: '浙江',
            value: 2018
        }],
        [{
            name: '福建',
            value: 1393
        }],
        [{
            name: '江西',
            value: 1201
        }],
        [{
            name: '湖南',
            value: 1498
        }],
        [{
            name: '贵州',
            value: 1443
        }],
        [{
            name: '广西',
            value: 961
        }],
        [{
            name: '海南',
            value: 843
        }],
        [{
            name: '广东',
            value: 2484
        }],
    ];
    
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [114.3896, 30.6628];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    name:dataItem[0].name,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };
    var series = [];
    [
        ['湖北', chinaDatas]
    ].forEach(function(item, i) {
        console.log(item)
        series.push({
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: convertData(item[1])
            }, {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 0 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function(params) { //圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 13
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: doctor,
                symbolSize: function(val) {
                    return 5 + val[2] / 90; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 3,
                    brushType: 'stroke',
                    scale: 5
                },
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        //offset:[5, 0],
                        color: '#fffff8',
                        formatter: '{b}',
                        textStyle: {
                            color: "#fffff8"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#fffff8"
                    }
                },
                symbol: 'circle',
                symbolSize: 10,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([5]),
                }],
            }
        );
    });
    
    option = {
        grid:{
left:0,
right:0,
bottom:0,
top:0
        },
            title : {
            text: '2020全国援鄂医疗队人数',
            subtext: '数据来源：人民日报',
            left: 'center',
            top:20,
            textStyle : {
                color: '#c7d2d4'
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 200, 0.82)',
            borderColor: '#7BAABE',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params) {
                            if(params.seriesType=="scatter"&&params.data.name !="湖北") {
                    return params.data.name+"："+params.data.value[2]+"人";
                }else if(params.seriesType=="lines"){
                    return params.data.name+"->湖北"+"<br />"+params.data.value+"人";
                }else{
                    return params.name;
                }
    
            }
        },
        backgroundColor: "#2f4554",
        visualMap: { //图例值控制
            min: 0,
            max: 2000,
            calculable: true,
            show: true,
            color: ['#2f90b9', '#ffffff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: '#2f4554', //地图背景色
                    borderColor: '#b0d5df', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 100, .5)' //悬浮背景
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
})();
//中国一省包一市图
(function(){
    var myChart = echarts.init(document.querySelector(".help"),'dark');  
    option = {
        backgroundColor:'#2f4554',
        title: {
            text: "一省包一市关系图及确诊情况",
            color:'#ffffff',
            subtext: "数据来源：丁香园",
            top: "top",
            left: "center",
            textStyle : {
                color: '#c7d2d4'
            }
        },
        tooltip: {},
        legend: [{
            formatter: function(name) {
                return echarts.format.truncateText(name, 50, '14px Microsoft Yahei');
            },
            type:'scroll',
            right:0,
            orient:'horizontal',
            tooltip: {
                show: true
            },
            selectedMode: 'true',
            bottom: 20,
            data: ['孝感市', '黄冈市', '随州市', '荆州市', '襄阳市', '黄石市', '宜昌市', '荆门市', '潜江市', '天门市','仙桃市','鄂州市','咸宁市','十堰市','恩施市','神农架林区']
        }],
    
        animationDuration: 3000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: '湖北省',
            type: 'graph',
            layout: 'force',
            lfet:0,
            force: {
                repulsion: 300
            },
            data: [{
                "name": "湖北省",
                "x": 0,
                 y: 0,
                "symbolSize": 40,
                "draggable": "true",
                "value": 27,
                "symbol":'rect'
    
            },  {
                "name": "孝感市",
                "symbolSize": 35.18,
                "category": "孝感市",
                "draggable": "true",
                "value": 3518
            }, {
                "name": "黄冈市",
                "symbolSize": 29.07,
                "category": "黄冈市",
                "draggable": "true",
                "value": 2907
            }, {
                "name": "随州市",
                "symbolSize": 13.07,
                "category": "随州市",
                "draggable": "true",
                "value": 1307
            }, {
                "name": "荆州市",
                "value": 1580,
                "symbolSize": 15.8,
                "category": "荆门市",
                "draggable": "true"
            }, {
                "name": "襄阳市",
                "symbolSize": 11.75,
                "category": "襄阳市",
                "draggable": "true",
                "value": 1175
            }, {
                "name": "黄石市",
                "symbolSize": 10.15,
                "category": "黄石市",
                "draggable": "true",
                "value": 1015
            }, {
                "name": "宜昌市",
                "value": 931,
                "symbolSize": 9.31,
                "category": "宜昌市",
                "draggable": "true"
            }, {
                "name": "仙桃市",
                "symbolSize": 5.75,
                "category": "仙桃市",
                "draggable": "true",
                "value": 575
            }, {
                "name": "天门市",
                "symbolSize": 4.96,
                "category": "天门市",
                "draggable": "true",
                "value": 496
            }, {
                "name": "潜江市",
                "value": 198,
                "symbolSize": 1.98,
                "category": "潜江市",
                "draggable": "true"
            }, {
                "name": "咸宁市",
                "symbolSize": 8.36,
                "category": "咸宁市",
                "draggable": "true",
                "value": 836
            }, {
                "name": "十堰市",
                "symbolSize": 6.72,
                "category": "十堰市",
                "draggable": "true",
                "value": 672
            }, {
                "name": "恩施土家族苗族自治州",
                "value": 252,
                "symbolSize": 2.52,
                "category": "恩施土家族苗族自治州",
                "draggable": "true"
            }, {
                "name": "神农架林区",
                "symbolSize": 0.11,
                "category": "神农架林区",
                "draggable": "true",
                "value": 11
            }, {
                "name": "荆门市",
                "value": 928,
                "symbolSize": 9.28,
                "category": "荆门市",
                "draggable": "true"
            }, {
                "name": "鄂州市",
                "symbolSize": 13.49,
                "category": "鄂州市",
                "draggable": "true",
                "value": 1349
            }, {
                "name": "重庆市",
                "value": 575,
                "symbolSize": 5.75,
                "category": "孝感市",
                "draggable": "true"
            }, {
                "name": "黑龙江省",
                "symbolSize": 9.45,
                "category": "孝感市",
                "draggable": "true",
                "value": 945
            }, {
                "name": "山东省",
                "symbolSize": 7.92,
                "category": "黄冈市",
                "draggable": "true",
                "value": 792
            }, {
                "name": "湖南省",
                "value": 1019,
                "symbolSize": 10.19,
                "category": "黄冈市",
                "draggable": "true"
            }, {
                "name": "江西省",
                "symbolSize": 9.27,
                "category": "随州市",
                "draggable": "true",
                "value": 927
            }, {
                "name": "河南省",
                "symbolSize": 12.76,
                "category": "随州市",
                "draggable": "true",
                "value": 1276
            }, {
                "name": "广东省",
                "value": 1596,
                "symbolSize": 15.96,
                "category": "荆州市",
                "draggable": "true"
            }, {
                "name": "海南省",
                "symbolSize": 1.69,
                "category": "荆州市",
                "draggable": "true",
                "value": 169
            }, {
                "name": "辽宁省",
                "symbolSize": 1.49,
                "category": "襄阳市",
                "draggable": "true",
                "value": 149
            }, {
                "name": "宁夏回族自治区",
                "value": 75,
                "symbolSize": 0.75,
                "category": "襄阳市",
                "draggable": "true"
            }, {
                "name": "江苏省",
                "symbolSize": 6.53,
                "category": "黄石市",
                "draggable": "true",
                "value": 653
    
            }, {
                "name": "福建省",
                "symbolSize": 3.58,
                "category": "宜昌市",
                "draggable": "true",
                "value": 358
    
            }, {
                "name": "内蒙古自治区",
                "symbolSize": 2.35,
                "category": "荆门市",
                "draggable": "true",
                "value": 235
    
            }, {
                "name": "浙江省",
                "symbolSize": 12.68,
                "category": "荆门市",
                "draggable": "true",
                "value": 1268
    
            }, {
                "name": "山西省",
                "symbolSize": 1.98,
                "category": "仙桃市",
                "draggable": "true",
                "value": 198
    
            }, {
                "name": "贵州省",
                "symbolSize": 1.47,
                "category": "鄂州市",
                "draggable": "true",
                "value": 147
    
            }, {
                "name": "云南省",
                "symbolSize": 1.85,
                "category": "咸宁市",
                "draggable": "true",
                "value": 185
    
            }, {
                "name": "广西壮族自治区",
                "symbolSize": 2.54,
                "category": "十堰市",
                "draggable": "true",
                "value": 254
    
            }, {
                "name": "天津市",
                "symbolSize": 1.92,
                "category": "恩施土家族苗族自治州",
                "draggable": "true",
                "value": 192
    
            }, {
                "name": "河北省",
                "symbolSize": 3.28,
                "category": "神农架林区",
                "draggable": "true",
                "value": 328
    
            }],
            links: [ {
                "source": "湖北省",
                "target": "襄阳市"
            }, {
                "source": "湖北省",
                "target": "仙桃市"
            }, {
                "source": "湖北省",
                "target": "孝感市"
            }, {
                "source": "湖北省",
                "target": "黄冈市"
            }, {
                "source": "湖北省",
                "target": "随州市"
            }, {
                "source": "湖北省",
                "target": "荆州市"
            }, {
                "source": "湖北省",
                "target": "黄石市"
            }, {
                "source": "湖北省",
                "target": "宜昌市"
            }, {
                "source": "湖北省",
                "target": "荆门市"
            }, {
                "source": "湖北省",
                "target": "鄂州市"
            }, {
                "source": "湖北省",
                "target": "天门市"
            }, {
                "source": "湖北省",
                "target": "潜江市"
            }, {
                "source": "湖北省",
                "target": "咸宁市"
            }, {
                "source": "湖北省",
                "target": "十堰市"
            }, {
                "source": "湖北省",
                "target": "恩施土家族苗族自治州"
            }, {
                "source": "湖北省",
                "target": "神农架林区"
            }, {
                "source": "孝感市",
                "target": "重庆市"
            }, {
                "source": "孝感市",
                "target": "黑龙江省"
            }, {
                "source": "黄冈市",
                "target": "山东省"
            }, {
                "source": "黄冈市",
                "target": "湖南省"
            }, {
                "source": "随州市",
                "target": "江西省"
            }, {
                "source": "随州市",
                "target": "河南省"
            }, {
                "source": "荆州市",
                "target": "广东省"
            }, {
                "source": "荆州市",
                "target": "海南省"
            }, {
                "source": "襄阳市",
                "target": "辽宁省"
            }, {
                "source": "襄阳市",
                "target": "宁夏回族自治区"
            }, {
                "source": "黄石市",
                "target": "江苏省"
            }, {
                "source": "宜昌市",
                "target": "福建省"
            }, {
                "source": "荆门市",
                "target": "内蒙古自治区"
            }, {
                "source": "荆门市",
                "target": "浙江省"
            }, {
                "source": "仙桃市",
                "target": "山西省"
            }, {
                "source": "天门市",
                "target": "山西省"
            }, {
                "source": "潜江市",
                "target": "山西省"
            }, {
                "source": "鄂州市",
                "target": "贵州省"
            }, {
                "source": "咸宁市",
                "target": "云南省"
            }, {
                "source": "十堰市",
                "target": "广西壮族自治区"
            }, {
                "source": "恩施土家族苗族自治州",
                "target": "天津市"
            }, {
                "source": "神农架林区",
                "target": "河北省"
            }],
             categories: [{
                'name': '湖北省'
            }, {
                'name': '孝感市'
            }, {
                'name': '黄冈市'
            }, {
                'name': '襄阳市'
            }, {
                'name': '随州市'
            }, {
                'name': '荆州市'
            }, {
                'name': '黄石市'
            }, {
                'name': '宜昌市'
            }, {
                'name': '荆门市'
            }, {
                'name': '仙桃市'
            }, {
                'name': '天门市'
            }, {
                'name': '潜江市'
            }, {
                'name': '鄂州市'
            },{
                'name': '咸宁市'
            },{
                'name': '十堰市'
            },{
                'name': '恩施土家族苗族自治州'
            },{
                'name': '神农架林区'
            }],
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {
    
                    show: true,
                    position: 'top',
    
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0,
                    type: "solid"
                }
            }
        }]
    };
    myChart.setOption(option);  
})();
//中国援助口罩图
(function(){
    var myChart = echarts.init(document.querySelector(".panel"));
    option = {
        color:['#2f4554'],
        title: {
            
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            type: 'scroll',
            selectorLabel:{
                color: 'skyblue'
            },
            data: ['mask（10thousand）', 'Nucleic Acid Detection Kit(10thousand)']
        },
        grid: {
      left: "0%",
      top: "25%",
      right: "0%",
      bottom: "0%",
      containLabel: true
        },
        yAxis: {
            type: 'value',
            boundaryGap: false,
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
                },
             
                axisLine: {
                    show: false,
                    lineStyle: {
                      color: "rgba(255,255,255,.1)",
                      width: 1,
                     type: "solid"
                    }
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
              
            
        },
        xAxis: {
            type: 'category',
            data: [ 'Asia','Europe','America','Africa'],
            axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
            },
            axisLine: {
                show: false
            }
        },
        series: [
            {
                name: 'mask（10thousand）',
                type: 'bar',
                barWidth: "20%",
                data: [2737.4,2251.2,370,717.2]

            },
            {
                name: 'Nucleic Acid Detection Kit(10thousand)',
                type: 'bar',
                barWidth: "35%",
                data: [54.4432,52.15,50,133.455]
            }
        ]
    };
    myChart.setOption(option);
})();
//中国援助其他图
(function(){
    var myChart = echarts.init(document.querySelector(".dpanel")); 
    var pathSymbols = {
        reindeer: 'path://M1023.968793 512.0972c0-282.258242-228.984556-511.073966-511.452563-511.073966-282.473122 0-511.462795 228.815722-511.462795 511.073966 0 260.737573 195.390741 475.854231 447.837044 507.156 14.231147 2.999101 31.564741 4.746785 52.209522 4.746785 5.795601 0 11.384509-0.304924 16.78207-0.857471C797.877943 1020.265179 1023.968793 792.575015 1023.968793 512.0972zM950.836169 519.328399c-1.471411-25.500029-4.8399-50.460814-9.969375-74.718637 0.455339-8.661681 0.579151-16.868022 0.346877-24.49726 6.343032 29.660502 9.687986 60.432236 9.687986 91.984698C950.902679 514.513057 950.875051 516.921751 950.836169 519.328399zM74.120572 512.0972c0-30.977405 3.225236-61.200685 9.345202-90.360825 18.931886 20.247766 63.554125 19.769915 74.436224-10.483039 19.471131 11.604504 45.637286 13.717484 45.637286 36.912165 0 76.550227 2.725897 158.618759 72.279247 159.886547 1.958471 0.025581 38.788778 13.957944 56.316786 59.416164 6.060619 15.711767 30.032959 0 56.321902 0 13.124008 0 0 22.110053 0 69.921714 0 47.626454 102.680569 120.959633 102.680569 120.959633-0.475804 31.525858 0.818588 57.017702 3.442161 77.38314-23.177287-0.426689-42.709813 2.645062-58.055262 7.868674C230.627375 907.644909 74.120572 728.142955 74.120572 512.0972zM620.440877 936.783561c-2.272604-11.126653-12.215375-17.220015-30.356301-12.451742 14.474677-61.640676 21.511461-96.169728 51.728602-122.387045 43.719746-37.898564 5.206218-80.04355-28.063232-75.076769-26.222433 3.958895-9.651149-32.467234-33.055594-34.481983-23.404445-1.958471-53.969486-48.511552-87.653346-64.530291-17.855443-8.479545-35.402894-31.203539-62.940184-32.221658-24.407215-0.946492-60.07615 20.637618-60.07615 3.999824 0-53.590889-5.426213-91.832236-6.541539-107.104012-0.900446-12.269607-8.020113-4.132845 24.974087-3.339838 17.956744 0.48092 9.185577-36.067997 26.959162-37.495409 17.456382-1.381367 59.052916 16.341056 69.650557 9.277668 9.845564-6.577352 72.371338 164.12683 72.371338 28.216717 0-16.126177-8.351641-44.163828 0-59.436629 33.030013-60.352424 63.952163-109.539311 61.175104-116.734697-1.575781-4.050986-33.792323-7.39594-59.569649 1.253462-8.699541 2.904963 2.766826 16.530355-9.727892 19.440434-46.814006 10.807404-88.175196-12.622623-73.691309-34.645701 14.831785-22.570509 68.571044-9.845564 73.282016-55.124718 2.710549-25.935927 4.956549-55.974003 6.45968-78.298935 63.004648 9.852726 56.069163-81.7677-37.613081-91.574381 189.525561 2.217349 350.128371 124.61565 409.062591 294.48692-2.980683-2.718734-6.448425-4.371258-10.453365-4.774413-28.324157-70.749511-97.074267-19.547874-73.752703 42.855112-124.959457 96.057172-92.973143 163.052434-51.9179 201.416569 21.603552 20.166931 42.200242 50.496628 55.610754 72.279247-14.596442 42.561444 53.781211 25.518448 87.503954-46.709636C890.911457 782.384621 771.249286 898.633281 620.440877 936.783561z',
        plane: 'path://"M508.110848 93.0816c232.774656 0 422.198272 189.423616 422.198272 422.197248S740.885504 937.476096 508.110848 937.476096c-232.773632 0-422.197248-189.422592-422.197248-422.197248S275.337216 93.0816 508.110848 93.0816M508.110848 32.768c-266.464256 0-482.510848 216.046592-482.510848 482.511872s216.046592 482.510848 482.510848 482.510848c266.466304 0 482.51392-216.045568 482.51392-482.510848S774.576128 32.768 508.110848 32.768L508.110848 32.768zM508.110848 153.396224c-199.907328 0-361.882624 161.97632-361.882624 361.883648 0 199.84896 161.975296 361.883648 361.882624 361.883648 199.846912 0 361.883648-162.034688 361.883648-361.883648C869.994496 315.372544 707.95776 153.396224 508.110848 153.396224zM639.694848 701.581312c-23.737344 26.622976-58.016768 42.292224-102.84032 47.003648l0 68.262912-57.135104 0 0-67.910656c-74.744832-7.658496-120.981504-51.126272-138.8288-130.287616l88.35072-23.02976c8.188928 49.770496 35.282944 74.627072 81.283072 74.627072 21.497856 0 37.402624-5.301248 47.53408-15.962112s15.19616-23.501824 15.19616-38.580224c0-15.607808-5.064704-27.450368-15.19616-35.460096-10.131456-8.067072-32.692224-18.258944-67.617792-30.62784-31.393792-10.894336-55.957504-21.61664-73.627648-32.334848-17.670144-10.602496-32.041984-25.503744-43.056128-44.648448-11.014144-19.203072-16.550912-41.58464-16.550912-67.028992 0-33.39776 9.894912-63.495168 29.569024-90.235904 19.673088-26.681344 50.654208-42.99776 92.945408-48.9472l0-52.712448 57.135104 0 0 52.71552c63.847424 7.658496 105.194496 43.763712 123.982848 108.376064l-78.68928 32.277504c-15.373312-44.29312-39.052288-66.439168-71.209984-66.439168-16.141312 0-29.099008 4.947968-38.815744 14.84288-9.7792 9.894912-14.666752 21.910528-14.666752 35.98848 0 14.37184 4.712448 25.387008 14.13632 33.102848 9.365504 7.65952 29.568 17.140736 60.43136 28.50816 33.926144 12.370944 60.54912 24.090624 79.809536 35.104768 19.318784 11.014144 34.692096 26.27072 46.235648 45.646848 11.486208 19.438592 17.258496 42.116096 17.258496 68.088832C675.328 641.79712 663.42912 675.017728 639.694848 701.581312z',
        train: 'path://M825.869732 355.065134v-8.631418a39.233716 39.233716 0 0 0-29.817625-38.056705l-113.581609-28.444444a702.675862 702.675862 0 0 0-340.940996 0l-113.777778 28.444444a39.233716 39.233716 0 0 0-29.621456 38.056705v8.631418a104.557854 104.557854 0 0 0-90.041379 51.984674A197.737931 197.737931 0 0 0 80.429119 512c0 75.524904 36.879693 156.934866 117.701149 156.934866v8.631418a39.233716 39.233716 0 0 0 29.621456 38.056705l113.777778 28.444444a702.675862 702.675862 0 0 0 340.940996 0l113.581609-28.444444a39.233716 39.233716 0 0 0 29.817625-38.056705v-8.631418c80.821456 0 117.701149-81.409962 117.701149-156.934866s-36.879693-156.934866-117.701149-156.934866z m-627.739464 274.636015c-53.94636 0-78.467433-61.008429-78.467433-117.701149s24.521073-117.701149 78.467433-117.701149z m588.505747 32.563985a19.616858 19.616858 0 0 1-14.908812 19.616858l-98.084291 24.717242a664.422989 664.422989 0 0 1-322.108812 0l-98.084292-24.717242a19.616858 19.616858 0 0 1-14.908812-19.616858V361.734866a19.616858 19.616858 0 0 1 14.908812-19.616858l98.084292-24.717242a664.422989 664.422989 0 0 1 322.108812 0l98.084291 24.717242a19.616858 19.616858 0 0 1 14.908812 19.616858z m96.122606-66.304981a65.716475 65.716475 0 0 1-56.888889 33.740996v-235.402298c53.94636 0 78.467433 61.008429 78.467433 117.701149a162.427586 162.427586 0 0 1-21.578544 83.960153z',
        ship: 'path://M861.184 602.112q0 14.336-9.216 23.04t-21.504 8.704q-16.384 0-24.576-10.752t-8.192-23.04l0-23.552-579.584 1.024 0 23.552q0 12.288-8.192 22.016t-22.528 9.728q-14.336 1.024-23.552-8.192t-10.24-23.552l0-24.576q-39.936-3.072-63.488-22.016t-36.352-43.008-16.384-47.616-3.584-34.816q0-30.72 12.288-57.344t31.232-46.592 42.496-31.744 45.056-11.776l705.536 0q21.504 0 44.544 11.776t41.472 31.744 30.208 46.592 11.776 57.344q0 32.768-13.312 59.904t-33.792 46.592-44.544 30.208-45.568 10.752l0 25.6zM230.4 343.04l-23.552 0 0 165.888 23.552 0 0-165.888zM291.84 343.04l-23.552 0 0 165.888 23.552 0 0-165.888zM351.232 343.04l-22.528 0 0 165.888 22.528 0 0-165.888zM411.648 343.04l-23.552 0 0 165.888 23.552 0 0-165.888zM167.936 343.04l-22.528 0 0 165.888 22.528 0 0-165.888zM770.048 318.464q-22.528 0-42.496 8.704t-34.816 23.552-23.552 34.816-8.704 42.496 8.704 42.496 23.552 34.816 34.816 23.552 42.496 8.704 42.496-8.704 34.816-23.552 23.552-34.816 8.704-42.496-8.704-42.496-23.552-34.816-34.816-23.552-42.496-8.704zM836.608 428.032q0 27.648-19.456 47.104t-47.104 19.456-47.104-19.456-19.456-47.104 19.456-47.104 47.104-19.456 47.104 19.456 19.456 47.104z',
        medical: 'path://M992.768 755.712c-19.968-46.592-49.152-87.552-86.528-121.856-25.6-23.552-55.296-43.52-87.552-59.392 65.024-56.32 102.4-136.704 102.4-222.72 0-162.304-132.096-294.4-293.888-294.4h-2.048c-15.872 0.512-30.208 6.656-40.96 17.92s-16.896 26.112-16.384 41.984c0 9.216 2.56 17.92 6.656 25.6C520.192 84.48 443.392 48.128 357.888 48.128c-162.304 0-294.4 132.096-294.4 294.4 0 102.4 53.76 197.632 141.312 251.392-124.928 59.392-204.8 185.344-204.8 323.584 0 32.256 26.112 58.88 58.88 58.88 15.872 0 30.208-6.144 41.472-17.408s17.408-25.6 17.408-41.472c0-132.608 108.032-240.64 240.64-240.64s240.64 108.032 240.64 240.64c0 32.256 26.112 58.88 58.88 58.88 32.256 0 58.88-26.112 58.88-58.88 0-138.24-79.872-264.192-204.8-323.584 87.552-53.248 141.312-148.992 141.312-251.392 0-67.584-23.04-130.048-61.44-179.712 9.728 7.168 21.504 11.776 34.816 11.776h1.024c97.792 0 177.152 79.36 177.152 177.152s-79.36 177.152-177.152 177.152c-32.256 0-58.88 26.112-58.88 58.88v2.048c0 32.256 26.112 58.88 58.88 58.88 164.864 0 280.064 109.056 280.064 265.216 0 32.256 26.112 58.88 58.88 58.88s58.88-26.112 58.88-58.88c-1.536-56.832-12.288-110.08-32.768-158.208z m-457.728-413.184c0 97.792-79.36 177.152-177.152 177.152S180.736 440.32 180.736 342.528s79.36-177.152 177.152-177.152 177.152 79.36 177.152 177.152z'
    };
    
    var labelSetting = {
        normal: {
            show: true,
            position: 'right',
            offset: [10, 0],
            textStyle: {
                fontSize: 16
            }
        }
    };
    
    
    option = {
       
        legend: {
            right:0,
            data: ['China']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            left: 20,
            bottom:5,
            top:10
        },
        yAxis: {
            data: ['helped contries', 'vedio conferences', 'donation(million$)', 'masks(hundred)', 'medical teams'],
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                margin: 30,
                fontSize: 14
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30
                }
            }
        },
        xAxis: {
            splitLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            axisLine: {show: false}
        },
        series: [{
            name: 'China',
            type: 'pictorialBar',
            label: labelSetting,
            symbolRepeat: true,
            symbolSize: ['80%', '60%'],
            barCategoryGap: '40%',
            color:"#2f4554",
            data: [{
                value: 127,
                symbol: pathSymbols.reindeer
            }, {
                value: 70,
                symbol: pathSymbols.ship
            }, {
                value: 20,
                symbol: pathSymbols.plane
            }, {
                value: 60.758,
                symbol: pathSymbols.train
            }, {
                value: 13,
                symbol: pathSymbols.medical
            }]
        }]
    };
   myChart.setOption(option);    
}())