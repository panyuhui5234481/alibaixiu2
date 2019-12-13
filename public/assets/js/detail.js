var postid=getwenzhang('id');
var review;
// 根据id获取详情
$.ajax({
    type:'get',
    url:'/posts/'+postid,
    success:function(res){

        console.log(res);
        var html=template('wenzhangmod',res)
        $('#wenzhang').html(html)

    }
})
//点赞
$('#wenzhang').on('click','#like',function(){
    $.ajax({
        type:'post',
        url:'/posts/fabulous/'+postid,
        success:function(){
            alert('点赞成功,感谢你的支持');
        }
    })
})
//获取网站配置
$.ajax({
    type:'get',
    url:'/settings',
    success:function(res){
        review=res.review
        // 判断是否开启评论功能
        if(res.comment){
            var html=template('newcomment')
            $('.comment').html(html)
        }
    }
})
$('.comment').on('submit','form',function(){
    var content=$(this).find('textarea').val()
    var state;
    if(review){
        state=0
    }else{
        state=1;
    }
    $.ajax({
        type:'get',
        url:'/comments',
        data:{
            content:content,
            post:postid,
            state:state
        },
        success:function(){
            alert('评论成功')
            location.reload();
        },
        error:function(){
            alert('评论失败')
        }
        
    })
    return false;
})