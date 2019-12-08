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

