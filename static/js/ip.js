/**
 * Created by Administrator on 2017/8/16 0016.
 */
var ip = document.getElementById('ip_use');

var ip_chart = echarts.init(ip);
/*var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
    }
};
option = {
    title: {
        text: '75%',
        x: 'center',
        y: '40',
        textStyle: {
            fontWeight: 'normal',
            color: "#0bb6f0",
            fontSize:14
        }
    },
    color: ['#eb644b', '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        center:['50%','40%'],
        radius: [35,30],
        itemStyle: dataStyle,
        hoverAnimation: false,

        data: [{
            value: 30,
            name: '01'
        }, {
            value: 70,
            name: 'invisible',
            itemStyle: placeHolderStyle
        }

        ]
    }

    ]
};*/
var option = {
    /*tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },*/
    grid: {
        bottom:30
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: true,
            textStyle: {
                color: '#fff',
                fontSize:'16'
            }

        },
        data: ['内网', '外联网', '互联网']
    }],
    yAxis: [{
        show: false
    }],
    series: [{
        name: '内网',
        center: [
            '23%',
            '50%'
        ],
        radius: [
            '45%',
            '50%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#e6459a'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#e6459a'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#dd6c66'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '外联网',
        center: [
            '50%',
            '50%'
        ],
        radius: [
            '45%',
            '50%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#e6459a'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#e6459a'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#dd6c66'
                },
                emphasis: {
                    color: '#dd6a67'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '互联网',
        center: [
            '76%',
            '50%'
        ],
        radius: [
            '45%',
            '50%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#e6459a'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#e6459a'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#dd6c66'
                },
                emphasis: {
                    color: '#666'
                }
            },
            hoverAnimation: false
        }]
    }]
};
ip_chart.setOption(option);
window.addEventListener('resize',function(){
    ip_chart.resize();

});


