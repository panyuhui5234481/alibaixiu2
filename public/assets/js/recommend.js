// 获取热门推荐并渲染
$.ajax({
    type:'get',
    url:'/posts/recommend',
    success:function(res){
        console.log(res)
        var recommendmod=`
        {{each data}}
        <li>
        <a href="detail.html?id={{$value._id}}">
          <img src="{{$value.thumbnail}}" alt="" />
          <span>{{$value.title}}</span>
        </a>
      </li>
      {{/each}}`
     var html= template.render(recommendmod,{data:res})
      $('#tuijianul').html(html)
    }
})