/**
 * Created by Administrator on 2017/8/17 0017.
 */
/*基础资源概况*/
$(document).ready(function () {
    $.ajax({
        type:"get",
        async:true,
        url:"../data/basis.json",
        dataType:'json',
        success:function(data){
            for(var i=0;i<data.length;i++){
                var  id = data[i].id;
                var  name = data[i].name;
                var  sex = data[i].sex;
                var  age = data[i].age;
                var tel = data[i].tel;
                var width = data[i].width;
                var height = data[i].height;
                var _class = data[i]._class;

                $(".hh").html(id);
                $(".name").html(name);
                $(".sex").html(sex);
                $(".age").html(age);
                $(".tel").html(tel);
                $(".width").html(width);
                $(".height").html(height);
                $("._class").html(_class);
            }
        },
        error:function (data) {
            // alert("请求未成功");
        }
    })
});

/*虚拟化资源概况*/

$(document).ready(function(){
    $.ajax({
        type:"get",
        async:true,
        url:"../data/virtual.json",
        dataType:"json",
        success:function(data){
            var html = " ";
            for(var i=0;i<data.length;i++){
                console.log(data[i]);
                /*html0 += '<div class="progress-bar" style="width:'+data[i].cpu+'%; background:#06d7ea;">'
                    +'<div class="progress-value">'+data[i].cpu+'%</div></div>'
*/              html += '<h3 class="progress-title">CPU总数</h3>'
                    +'<div class="progress">'
                    +'<div class="progress-bar" style="width:'+data[i].cpu+'%; background:#06d7ea;">'
                    +'<div class="progress-value">'+data[i].cpu+'%</div>'
                    +'</div></div>'
                    +'<h3 class="progress-title">内存总数</h3>'
                    +'<div class="progress">'
                    +'<div class="progress-bar" style="width:'+data[i].nei+'%; background:#06d7ea;">'
                    +'<div class="progress-value">'+data[i].nei+'%</div></div></div>'
                    +'<h3 class="progress-title">存储容量</h3>'
                    +'<div class="progress">'
                    +'<div class="progress-bar" style="width:'+data[i].cun+'%; background:#06d7ea;">'
                    +'<div class="progress-value">'+data[i].cun+'%</div></div></div>'
                $(".jindu").html(html);
            }
        },
        error:function (data) {
            alert("请求失败");
        }
    })
});

/*IP使用情况*/

/*资源变化趋势*/

/*地税业务核心健康度*/
$(document).ready(function () {
    $.ajax({
        type:"get",
        url:'../data/_health.json',
        async:true,
        dataType:"json",
        success:function(data){
           var sum = " ";
           var html = "";
           for(var i=0;i<data.length;i++){
               html += '<li class="content_middle_one_data_01">'
                   +'<span>'+data[i].one+'</span></li>'
                   +'<li class="content_middle_one_data_02">'
                   +'<span>'+data[i].two+'</span></li>'
                   +'<li class="content_middle_one_data_03">'
                   +'<span>'+data[i].three+'</span></li>'
                   +'<li class="content_middle_one_data_04">'
                   +'<span>'+data[i].four+'</span></li>'
               $("._health").html(html);
               sum = data[i].one
           }
        },
        error:function () {
            /*alert("业务指标请求未成功")*/
        }
    })
});

/*业务运行情况*/

/*系统运行事件（告警趋势）*/

/*系统运行事件（告警统计*/

/*核心系统（运行状态趋势）*/

