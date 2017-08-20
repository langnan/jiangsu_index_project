/**
 * Created by Administrator on 2017/8/14 0014.
 */
var yewu_chart = echarts.init(document.getElementById('yewu_history'));
var option2 = {
    title: {
        text: '今日&昨日',
        left: '50%',
        textAlign: 'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'asix',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4'

        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
   /* legend: {
        right: 20,
        orient: 'vertical',
        data: ['今日','昨日'],
        textStyle:{
            fontSize:14
        }
    },*/
    xAxis: {
        type: 'category',
        data: ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00',"22:00"],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: 'rgba(255,255 ,255 ,0.1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color:'#fff'
            }
        },
        textStyle:{
            fontSize:14
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255 ,255 ,0.1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color:'#fff'
            }
        }
    },
    series: [{
        name: '今日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 14,
        data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(199, 237, 250,0.5)'
                }, {
                    offset: 1,
                    color: 'rgba(6, 215, 234,0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#06d7ea '
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }, {
        name: '昨日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(216, 244, 247,1)'
                }, {
                    offset: 1,
                    color: 'rgba(225, 124, 46,0.3)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#ff7d2e'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }]
};
yewu_chart.setOption(option2);
window.addEventListener('resize',function(){
    yewu_chart.resize();

});