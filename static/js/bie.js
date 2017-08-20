/**
 * Created by Administrator on 2017/5/4.
 */
var worldMapContainer = document.getElementById('bie');

var myChart8 = echarts.init(worldMapContainer);
var option8 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
/*
    visualMap: {
        show: false,
        min: 30,
        max: 900,
        inRange: {
            colorLightness: [0, 1]
        }
    },*/
    color:['#C0FF3E', '#9FB6CD','#87CEFF','#FFFF00','rgb(255,192,0)','#3A5FCD'],
    series : [
        {
            name:'状态值',
            type:'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[
                {value:200, name:'未管理'},
                {value:335, name:'重要'},
                {value:310, name:'次要'},
                {value:274, name:'警告'},
                {value:235, name:'严重'},
                {value:400, name:'正常'}

            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgb(255, 255, 255)',
                        fontSize:14
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgb(255, 255, 255)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'

                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart8.setOption(option8);
window.addEventListener('resize',function(){
    myChart8.resize();
    console.log(1)
});
