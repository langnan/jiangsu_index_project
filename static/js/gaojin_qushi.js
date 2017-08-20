/**
 * Created by Administrator on 2017/8/15 0015.
 */
var gaojin_qushi_chart = echarts.init(document.getElementById('gaojin_qushi'));
var option = {
    /*tooltip : {
        trigger: 'asix',
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5,10],
        textStyle: {
            color: '#7588E4'
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },*/
    xAxis: {
        type: 'category',
        data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#7588E4'
            }
        },
        axisLabel: {
            margin: 18,
            textStyle: {
                fontSize: 14,
                color:"#fff"
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show:'false',
            lineStyle: {
            color: ['#666']
         }
         },
        axisTick: {
            show: false
        },
        axisLine: {

            lineStyle: {
                color: '#7588E4'
            }
        },
        axisLabel: {
            margin: 27,
            textStyle: {
                fontSize: 16,
                color:"#fff"
            }
        }
    },
    series: [
        {
            name: '数量',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 15,
            data:['12','4','8','4','6','8','10','16','11','10','8','3'],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,0,0,1,[{
                        offset: 0, color: 'rgba(117,136,228,0.5)'
                    },{
                        offset: 1, color: 'rgba(117,136,228,0.2)'
                    }],false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffd178'
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                        offset: 0, color: '#5B6DC1'
                    },{
                        offset: 1, color: '#4AA8FF'
                    }],false)
                }
            }
        }
    ]
};
   gaojin_qushi_chart.setOption(option);
window.addEventListener('resize',function(){
    gaojin_qushi_chart.resize();

});