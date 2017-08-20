/**
 * Created by Administrator on 2017/5/4.
 */
var gaojin_tongji0 = document.getElementById('gaojin_tongji0');

var gaojin_tongji0_chart = echarts.init(gaojin_tongji0);
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    calculable :true,
    color:['#C0FF3E', '#9FB6CD','#87CEFF','#FFFF00'],
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : ['15%','50%'],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:[
                {value:1976, name:'草本 2976'},
                {value:1092, name:'木本 1092'},
                {value:241, name:'藤本 241'},
                {value:59, name:'菌藻 59'}
            ],
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#06d7ea',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }

        }

    ]
};
gaojin_tongji0_chart.setOption(option);
window.addEventListener('resize',function(){
    gaojin_tongji0_chart.resize();

});
