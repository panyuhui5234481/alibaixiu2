// 获取随机推荐并渲染
$.ajax({
    type:'get',
    url:'posts/random',
    success:function(res){
        console.log(res);
        var randommod=`
        {{each data}}<li>
        <a href="detail.html?id={{$value._id}}">
          <p class="title">{{$value.title}}</p>
          <p class="reading">阅读({{$value.meta.views}})</p>
          <div class="pic">
            <img src="{{$value.thumbnail}}" alt="" >
          </div>
        </a>
      </li>
      {{/each}}`
      var html=template.render(randommod,{
          data:res
      })
      $('#random').html(html)
    }
})
// 获取评论数据并渲染
$.ajax({
    type:'get',
    url:'/comments/lasted',
    success:function(res){
        console.log(res);
        var commentmod=`
        {{each data}}
        {{if $value.state==1}}<li>
        <a href="detail.html?id={{$value._id}}">
          <div class="avatar">
            <img src="{{$value.author.avatar}}" alt="" />
          </div>
          <div class="txt">
            <p><span>{{$value.author.nickName}}</span>{{$value.createAt | shijian}}说:</p>
            <p>{{$value.content}}</p>
          </div>
        </a>
      </li> 
      {{/if}}
      {{/each}}`
      var html=template.render(commentmod,{
          data:res
      })
      $('#comment').html(html)
    }
})
//获取分类并渲染
$.ajax({
    type:'get',
    url:'/categories',
    success:function(res){
        console.log(res)
        var navmod=` 
        {{each data}}
        <li>
        <a href="list.html?categoryId={{$value._id}}"><i class="{{$value.className}}"></i>{{$value.title}}</a>
      </li>
      {{/each}}`
      var html=template.render(navmod,{data:res});
      $('#navul').html(html)
      $('#navul1').html(html)
    }
})
//搜索功能
$('.search form').on('submit',function(){
  var keys=$(this).find('.keys').val();
  location.href='/seachlist.html?key='+keys
  return false
})