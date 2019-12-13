// 请求轮播图并渲染数据
$.ajax({
    type:'get',
    url:'/slides',
    success:function(res){
        console.log(res)
        var html= template('lunbo',{
            data:res
        })
        $('#lunboul').html(html)
         //
      var swiper = Swipe(document.querySelector(".swipe"), {
        auto: 3000,
        transitionEnd: function(index) {
          // index++;

          $(".cursor span")
            .eq(index)
            .addClass("active")
            .siblings(".active")
            .removeClass("active");
        }
      });

      // 上/下一张
      $(".swipe .arrow").on("click", function() {
        var _this = $(this);

        if (_this.is(".prev")) {
          swiper.prev();
        } else if (_this.is(".next")) {
          swiper.next();
        }
      });
    }
})
//请求最新发布数据
$.ajax({
    type:'get',
    url:'posts/lasted',
    success:function(res){
        console.log(res);
        var html=template('newmod',{
            data:res
        })
        $('#new').html(html)
    }
})