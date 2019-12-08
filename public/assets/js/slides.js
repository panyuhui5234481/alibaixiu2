//实现图片上传
$('#file').on('change',function(){
    var file=this.files[0];
    var formdata=new FormData();
    formdata.append('img',file);
    $.ajax({
        type:'post',
        url:'/upload',
        data:formdata,
        processData:false,
        contentType:false,
        success:function(res){
            $('#image').val(res[0].img);
        }
    })
})
//实现轮播添加表单提交
$('#lunform').on('submit',function(){
    var formdata=$(this).serialize();
    console.log(formdata)
    if(formdata===''){
        alert('你没有上传任何文件');
        return false;
    }
    $.ajax({
       type:'post',
       url:'/slides',
       data:formdata,
       success:function(res){
        location.reload();
       } 
    })
    return false
})
//请求轮播图渲染在页面中
$.ajax({
    type:'get',
    url:'/slides',
    success:function(res){
        console.log(res);
        var html=template('mod',{
            data:res
        })
        $('#tbody').html(html);
    }
})
//删除轮播图功能
$('#tbody').on('click','.delete',function(){
    var id=$(this).attr('data-id');
    $.ajax({
        type:'delete',
        url:'/slides/'+id,
        success:function(){
            location.reload()
        }
    })
})