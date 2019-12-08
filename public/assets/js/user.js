// 用户添加
$('#userForm').on('submit',function(){
    var formdate=$(this).serialize();
    // console.log(formdate);
    $.ajax({
        type:'post',
        url:'/users',
        data:formdate,
        success:function(){
            location.reload();
        },
        error:function(){
            alert('用户添加失败')
        }
        
    })
    return false;
})
// 上传图片
$('#biaodan').on('change','#avatar',function(){
    var formdata=new FormData;
formdata.append('avatar',this.files[0]);
$.ajax({
    type:'post',
    url:'/upload',
    data:formdata,
    processData:false,
    contentType:false,
    success:function(res){
        console.log(res);
        $('#xianshi').attr('src',res[0].avatar);
        $('#hiddenavatar').val(res[0].avatar);
    }
})
});
// 渲染用户列表
$.ajax({
    type:'get',
    url:'/users',
    success:function(res){
        console.log(res);
       var html=  template('userTpl',{data:res})
       $('#show').html(html)
    }
})
// 编辑用户
$('#show').on('click','.edit',function(){
    var id=$(this).attr('data-id');
    $.ajax({
        type:'get',
        url:'/users/'+id,
        success:function(res){
           var html=template('userxiugai',{
               data:res
           })
           $('#biaodan').html(html)
        }
    })
})
//提交修改用户按钮
$('#biaodan').on('submit','#xiugaiForm',function(){
    var formdata=$(this).serialize();
    // console.log(formdata);
    var id =$(this).attr('data-id')
    $.ajax({
        type:'put',
        url:'/users/'+id,
        data:formdata,
        success:function(res){
            location.reload();
        }
    })
    return false;
})
// 删除用户
$('#show').on('click','.delete',function(){
    if(confirm('你真的要删除用户吗?')){
        var id=$(this).attr('data-id');
        $.ajax({
            type:'delete',
            url:'/users/'+id,
            success:function(res){
                location.reload();
            }
        })
    }
})
//按钮全选反选
var setall=$('#setall')
var deletesome=$('#deletesome')
setall.on('change',function(){
    if(setall.prop('checked')){
        deletesome.show()
    }else{
        deletesome.hide()
    }
    $('#show').find('input').prop('checked',$(this).prop('checked'))
})
$('#show').on('click','.fu',function(){
    if($('#show').find('input:checked').length>0){
        deletesome.show()
    }else{
        deletesome.hide() 
    }
    if($('#show').find('input:checked').length==$('#show').find('input').length){
        setall.prop('checked','checked')
    }else{
        setall.prop('checked','') 
    }})
    //为批量删除按钮添加点击事件
    deletesome.on('click',function(){
        var ids=[];
        var checkedUser=$('#show').find('input:checked')
        checkedUser.each(function(i,e){
            ids.push($(e).attr('data-id'))
        });
        if(confirm('你真的要进行批量删除吗?')){
            $.ajax({
                type:'delete',
                url:'/users/'+ids.join('-'),
                success:function(){
                    location.reload();
                }
            })
        }
    })
