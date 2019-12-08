// 实现图片上传
$('#logo').change(function(){
    var formdata=new FormData();
    formdata.append('img',this.files[0])
    $.ajax({
        type:'post',
        url:'/upload',
        data:formdata,
        processData:false,
        contentType:false,
        success:function(res){
            $('#site_logo').val(res[0].img);
            $("#show").prop('src',res[0].img);
        }
    })
})

// 实现配置属性的提交
$('#setForm').on('submit',function(){
    var formdata=serializeObj($(this))
    if(formdata.comment=='on'){
        formdata.comment=true
    }else{
        formdata.comment=false
    }
    if(formdata.review=='on'){
        formdata.review=true
    }else{
        formdata.review=false
    }
    console.log(formdata)
    $.ajax({
        type:'post',
        url:'/settings',
        data:formdata,
        success:function(res){
            console.log(res)
        }
    })
    return false
})
//实现网站信息的查看
$.ajax({
    type:'get',
    url:'/settings',
    success:function(res){
        console.log(res);
    if(res){
        $('#site_logo').val(res.logo);
        $('#show').attr('src',res.logo);
        $('#site_name').val(res.title);
        $('#site_description').val(res.description)
        $('#site_keywords').val(res.keywords)
        $('#comment_status').prop('checked',res.comment)
        $('#comment_reviewed').prop('checked',res.review)
    }
    }
})