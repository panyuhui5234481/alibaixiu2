var key=getwenzhang('key')
//根据key搜索文章
$.ajax({
    type:'get',
    url:'/posts/search/'+key,
    success:function(res){
        console.log(res);
        var html=template('seachmod',{data:res})
        $('#wenzhang').html(html)
    }
})