// 获取分类数据并显示在下拉列表当中
$.ajax({
  type: "get",
  url: "/categories",
  success: function(res) {
    console.log(res);
    var html = template("fenlei", {
      data: res
    });
    $("#category").html(html);
  }
});
//文章封面上传
$("#feature").on("change", function() {
  console.log(this.files[0]);
  var file = this.files[0];
  var formdata = new FormData();
  formdata.append("avatar", file);
  $.ajax({
    type: "post",
    url: "/upload",
    data: formdata,
    processData: false,
    contentType: false,
    success: function(res) {
      console.log(res);
      $("#thumbnail").val(res[0].avatar);
    }
  });
});
// 添加文章
$("#addform").on("submit", function() {
  var formData = $(this).serialize();
  console.log(formData);
  $.ajax({
    type: "post",
    url: "/posts",
    data: formData,
    success: function() {
      location.href = "/admin/posts.html";
    }
  });
  return false;
});
// 获取浏览器地址id参数
var id = getwenzhang("id");
//  根据id获取文章详细信息
if (id != -1) {
  $.ajax({
    type: "get",
    url: "/posts/" + id,
    success: function(res) {
      $.ajax({
        type: "get",
        url: "/categories",
        success: function(categories) {
          res.categories = categories;
          var html = template("xiugai", res);
          $("#parent").html(html);
        }
      });
    }
  });
}
//提交修改事件
$('#parent').on('submit','#xiugaiform',function(){
    var formdata =$(this).serialize();
    $.ajax({
        type:'put',
        url:'/posts/'+id,
        data:formdata,
        success:function(){
            location.href='posts.html'
        }
    })
    return false;
})
function getwenzhang(name) {
  var paramsAry = location.search.substr(1).split("&");
  for (var i = 0; i < paramsAry.length; i++) {
    var tep = paramsAry[i].split("=");
    if (tep[0] == name) {
      return tep[1];
    }
  }
  return -1;
}
