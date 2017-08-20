/**
 * Created by Administrator on 2017/8/17 0017.
 */
var res_qushi = document.getElementById('res_qushi');
var res_qushi_chart = echarts.init(res_qushi);
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle:{
                color:'rgba(0,0,0,0)'
            }
        }

    },
    legend: {
        data:['bar1','bar2','bar3'],
        top:'20px',
        textStyle:{
            color:"#fff"
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: { color: '#666' }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color:'#fff'
            }
        },
        data: ['7/21','7/22','7/23','7/24','7/25','7/26','7/27']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: { color: '#666' }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color:'#fff'
            }
        },
        minInterval:0,
        splitNumber:4,
        splitLine: { show: false }
    },
    series: [
        {
            name: 'bar1',
            type: 'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            lineStyle:{
                normal:{
                    width:1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 70, 131)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 158, 68)'
                    }])
                }
            },
            data: [35, 50, 66, 50, 48, 52, 100]
        },
        {
            name: 'bar2',
            type: 'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            lineStyle:{
                normal:{
                    width:1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: [15, 30, 46, 30, 28, 32, 30]
        },
        {
            name: 'bar3',
            type: 'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(9,109,203)'
                }
            },
            lineStyle:{
                normal:{
                    width:1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(9,109,203)'
                    }, {
                        offset: 1,
                        color: 'rgb(83,202,244)'
                    }])
                }
            },
            data: [2, 15, 26, 7, 6, 12, 14]
        }
    ]
};

res_qushi_chart.setOption(option);
window.addEventListener('resize',function(){
    ip_chart.resize();

});