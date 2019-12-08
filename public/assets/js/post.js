//查询渲染文章 以及分页
$.ajax({
    type:'get',
    url:'/posts',
    success:function(res){
        console.log(res)
        var html =template('wzmod',{
            wenzhang:res
        })
        $('#tbody').html(html)
        var page=template('ye',res)
        $('#fenye').html(page);
    }
})
function changePage (page){
    $.ajax({
        type:'get',
        url:'/posts',
        data:{
            page:page
        },
        success:function(res){
            var html =template('wzmod',{
                wenzhang:res
            })
            $('#tbody').html(html)
            var page=template('ye',res)
            $('#fenye').html(page);
        }
    })
}
//筛选文章
$.ajax({
    type:'get',
    url:'/categories',
    success:function(res){
        console.log(res);
        var html=template('saixuan',{
            data:res
        })
        console.log(html)
        $('#saixuans').html(html);
    }
})
$('#zhuangtai').on('submit',function(){
        var formdata=$(this).serialize();
        $.ajax({
            type:'get',
            url:'/posts',
            data:formdata,
            success:function(res){
                var html =template('wzmod',{
                    wenzhang:res
                })
                $('#tbody').html(html)
                var page=template('ye',res)
                $('#fenye').html(page);
            }
        })
   return false; 
})
//删除文章
$('#tbody').on('click','#delete',function(){
   var id= $(this).attr('data-id');
   $.ajax({
       type:'delete',
       url:'/posts/'+id,
        success:function(){
            location.reload();
        }
   })
})

