// 退出登录
$('#logout').on('click',function(){
    var isout = confirm('宁真的要退出吗?');
    if(isout){
      $.ajax({
        type:'post',
        url:'/logout',
        success:function(){
         location.href='login.html'
        },
        error:function(data){
         alert(data.message) 
        }
      })
    }
   })
