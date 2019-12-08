//向服务器发送请求,获取评论列表并渲染
$.ajax({
    type:'get',
    url:'/comments',
    success:function(res){
        console.log(res);
        var html=template('commentmod',res);
        $('#tbody').html(html)
        var yehtml=template('fenye',res);
        $('#ye').html(yehtml)
    }
})
//分页函数
function changePage(page){
    $.ajax({
        type:'get',
        url:'/comments',
         data :{page:page},
        success:function(res){
            console.log(res);
            var html=template('commentmod',res);
            $('#tbody').html(html)
            var yehtml=template('fenye',res);
            $('#ye').html(yehtml)
        }
    })
}
//实现评论审核
$('#tbody').on('click','.status',function(){
    var status=$(this).attr('data-status');
    var id=$(this).attr('data-id')
    $.ajax({
        type:'put',
        url:'/comments/'+id,
        data:{
            state: status==0 ? 1 : 0
        },
        success:function(res){
            location.reload()
        }
    })
})
//实现评论删除
$('#tbody').on('click','.delete',function(){
    var id=$(this).attr('data-id');
    $.ajax({
        type:'delete',
        url:'/comments/'+id,
        success:function(){
            location.reload();
        }
    })
})