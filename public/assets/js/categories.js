// 添加分类
$('#addlei').on('submit',function(){
    var formdata=$(this).serialize();
    $.ajax({
        type:'post',
        url:'/categories',
        data:formdata,
        success:function(){
            location.reload();
        }
    })
    return false;
})
// 渲染列表
$.ajax({
    type:'get',
    url:'/categories',
    success:function(res){
        var html=template('fenlei',{
            data:res
        })
        $('#tbody').html(html);
    }
})
// 修改分类
$('#tbody').on('click','.idit',function(){
    var id=$(this).attr('data-id');
    console.log(id);
    $.ajax({
        type:'get',
        url:'/categories/'+id,
        success:function(res){
           var html=template('xiugai',{
               result:res
           })
           $('#biaodan').html(html);
        }
    })
})
// 提交修改分类
$('#biaodan').on('submit','#xiugailei',function(){
    var id= $(this).attr('data-id');
    var formdata=$(this).serialize();
    $.ajax({
        type:'put',
        url:'/categories/'+id,
        data:formdata,
        success:function(){
            location.reload();
        }
    })
    return false;
})
// 删除分类
$('#tbody').on('click','.delete',function(){
    var id=$(this).attr('data-id');
    console.log(id)
    if(confirm('你确定要删除吗?')){
    $.ajax({
        type:'delete',
        url:'/categories/'+id,
        success:function(){
            location.reload()
        }
    })
 }
})