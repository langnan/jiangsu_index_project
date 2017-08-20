/**
 * Created by Administrator on 2017/4/17.
 */

var oBox=document.getElementsByClassName("date-time")[0];
setInterval(function(){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var hours=date.getHours();
    var min=date.getMinutes();
    var seconds=date.getSeconds();
    oBox.innerHTML=(year+" "+month+"."+day+"."+hours+":"+min+":"+seconds+"");
},1000);

