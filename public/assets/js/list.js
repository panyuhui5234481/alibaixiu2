var categoryid=getwenzhang('categoryId')
//根据分类id获取文章
$.ajax({
    type:'get',
    url:'posts/category/'+categoryid,
    success:function(res){
        console.log(res);
        var html=template('wenzhangmod',{
            data:res
        })
        $('#wenzhang').html(html)
    }
})