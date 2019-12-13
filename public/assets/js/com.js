function  shijian(date){
    dt=new Date(date); 
    return dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate()
}
//显示用户信息在侧边栏
var id=userID
$.ajax({
    type:'get',
    url:'/users/'+id,
    success:function(res){
        console.log(res);
        $('#users').html(
            `<img class="avatar" src=${res.avatar}>
            <h3 class="name">${res.nickName}</h3>`
        )
    }
})
//字符串转对象函数
function serializeObj(form){
    var arr = form.serializeArray();
    var obj = {};
    arr.forEach((item) => {
        obj[item.name] = item.value;
    });
    return obj;
}
//根据地址栏参数id获取文章
function getwenzhang(name) {
    var paramsAry = location.search.substr(1).split("&");
    for (var i = 0; i < paramsAry.length; i++) {
      var tep = paramsAry[i].split("=");
      if (tep[0] == name) {
        return tep[1];
      }
    }
    return -1;
  }

