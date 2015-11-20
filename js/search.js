// function timeFormat(timeStamp){
//   var date = new Date(parseInt(timeStamp));
//   return 'created@' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()+1);
// }
// function appendBookmarks(data){
//   var searchResult = data.reduce(function(str,item){
//     str+="<li class='bookmarkTitle'>"+item.title+"</li>";
//     str+="<li class='bookmarkCreated'>"+timeFormat(item.created)+"</li>";
//     return str;
//   },"");
//   $('ul').html(searchResult);
// }

// $(document).ready(function(){
//   function showResult(keywords,bookmarks){
//     $("ul").html("");
//     var reg = new RegExp(keywords,"ig");
//     var selectedData = bookmarks.filter(function(item){
//       return reg.test(item.title);
//     }).map(function(item){
//       item.title = item.title.replace(reg,'<span style="background-color:#D58C87">'+keywords+'</span>');
//       return item;
//     });
//     appendBookmarks(selectedData);
//   }

//   $("#keywordInput").bind("input propertychange",function(){
//      $.ajax({
//        url:"bookmarks.json",
//        type:"get",
//        dataType:"json",
//        success:function(data){
//          var inputWords = $('#keywordInput').val();
//          showResult(inputWords,data);
//        }
//      })
//   });
// })

new Vue({
  el: "#bookmarks",

  data: {
    bookmarks: [
      {
        "title": "Code Generation Network - Language Translation ...",
        "created": "1387243195"
      },
      {
        "title": "推荐一个数据库查询监控插件 - query_reviewer - rails - Ruby - JavaEye论坛",
        "created": "1387243195"
      }
    ]
  }


});
